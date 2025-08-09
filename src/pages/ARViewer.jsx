import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Camera, RotateCcw, Maximize, Heart, ShoppingBag, Info } from 'lucide-react';
import { getProductById } from '../data/mockData';
import ARScene from '../components/ARScene';
import '../App.css';

const ARViewer = () => {
  const { productId } = useParams();
  const [isARActive, setIsARActive] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [error, setError] = useState(null);
  const [showARScene, setShowARScene] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  
  const product = getProductById(productId);

  // Mapear produtos para tipos de modelo 3D
  const getProductType = (productName) => {
    const name = productName.toLowerCase();
    if (name.includes('poltrona')) return 'poltrona';
    if (name.includes('abajur')) return 'abajur';
    if (name.includes('planta')) return 'planta';
    if (name.includes('vestido')) return 'vestido';
    if (name.includes('batom')) return 'batom';
    if (name.includes('relógio') || name.includes('relogio')) return 'relogio';
    return 'poltrona'; // default
  };

  useEffect(() => {
    if (isARActive) {
      startCamera();
    } else {
      stopCamera();
    }
    
    return () => stopCamera();
  }, [isARActive]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: 'environment', // Usar câmera traseira
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setHasPermission(true);
        setError(null);
        // Mostrar cena AR após 2 segundos
        setTimeout(() => {
          setShowARScene(true);
        }, 2000);
      }
    } catch (err) {
      console.error('Erro ao acessar câmera:', err);
      setError('Não foi possível acessar a câmera. Verifique as permissões.');
      setHasPermission(false);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setShowARScene(false);
  };

  const toggleAR = () => {
    setIsARActive(!isARActive);
  };

  const resetView = () => {
    setShowARScene(false);
    setTimeout(() => {
      setShowARScene(true);
    }, 100);
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext('2d');
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0);
      
      // Converter para blob e fazer download
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${product.name}_AR.jpg`;
        a.click();
        URL.revokeObjectURL(url);
      });
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Produto não encontrado
          </h1>
          <Link
            to="/"
            className="ar-button inline-flex items-center px-4 py-2 text-white rounded-lg"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Início
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-black bg-opacity-50 text-white p-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 text-white hover:text-gray-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </Link>
          
          <div className="text-center">
            <h1 className="text-lg font-semibold">{product.name}</h1>
            <p className="text-sm text-gray-300">Visualização em AR</p>
          </div>
          
          <div className="w-16"></div> {/* Spacer for centering */}
        </div>
      </div>

      {/* AR Viewer */}
      <div className="relative w-full h-screen">
        {isARActive ? (
          <>
            {/* Camera Feed */}
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
            
            {/* AR Scene Overlay */}
            {showARScene && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-full">
                  <ARScene 
                    productType={getProductType(product.name)} 
                    isVisible={showARScene}
                  />
                </div>
              </div>
            )}

            {/* AR Positioning Guide */}
            {!showARScene && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-32 h-32 border-2 border-white border-dashed rounded-lg flex items-center justify-center mb-4 animate-pulse">
                    <div className="text-4xl">📦</div>
                  </div>
                  <p className="text-sm">Procurando superfície plana...</p>
                </div>
              </div>
            )}

            {/* AR Controls */}
            <div className="absolute bottom-20 left-0 right-0 flex justify-center space-x-4 pointer-events-auto">
              <button
                onClick={capturePhoto}
                className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-colors"
                title="Capturar foto"
              >
                <Camera className="w-6 h-6" />
              </button>
              
              <button
                onClick={resetView}
                className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-colors"
                title="Resetar visualização"
              >
                <RotateCcw className="w-6 h-6" />
              </button>
              
              <button
                onClick={() => setIsARActive(false)}
                className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-colors"
                title="Sair do AR"
              >
                <Maximize className="w-6 h-6" />
              </button>
            </div>
          </>
        ) : (
          /* Product Preview */
          <div className="flex items-center justify-center h-full bg-gray-900">
            <div className="text-center text-white max-w-md mx-auto p-6">
              <div className="mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-64 h-64 object-cover rounded-lg mx-auto mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <p className="text-3xl font-bold text-purple-400">{product.price}</p>
              </div>
              
              {error ? (
                <div className="bg-red-500 bg-opacity-20 border border-red-500 rounded-lg p-4 mb-6">
                  <p className="text-red-200 text-sm">{error}</p>
                </div>
              ) : (
                <div className="bg-blue-500 bg-opacity-20 border border-blue-500 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-center mb-2">
                    <Info className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Como usar o AR</span>
                  </div>
                  <p className="text-sm text-gray-300">
                    Permita o acesso à câmera e aponte para uma superfície plana para visualizar o produto em seu ambiente.
                  </p>
                </div>
              )}
              
              <button
                onClick={toggleAR}
                disabled={hasPermission === false}
                className="ar-button w-full py-4 rounded-lg font-semibold text-lg mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {hasPermission === false ? 'Câmera Indisponível' : 'Iniciar Visualização AR'}
              </button>
              
              <div className="flex space-x-3">
                <button className="flex-1 bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors flex items-center justify-center">
                  <Heart className="w-4 h-4 mr-2" />
                  Favoritar
                </button>
                
                <button className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Comprar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Hidden canvas for photo capture */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      {/* Product Info Panel (when AR is active) */}
      {isARActive && (
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white p-4 pointer-events-auto">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-300">{product.store}</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-purple-400">{product.price}</p>
              <button className="text-sm text-purple-400 hover:text-purple-300">
                Ver detalhes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ARViewer;

