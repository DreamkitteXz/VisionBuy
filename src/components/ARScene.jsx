import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Componente de produto 3D simples
const Product3D = ({ productType, position = [0, 0, 0], scale = 1 }) => {
  const meshRef = useRef();

  // Se for poltrona, carrega o modelo GLB
  if (productType === 'poltrona') {
    const { scene } = useGLTF('/models/poltrona.glb');
    return (
      <primitive
        ref={meshRef}
        object={scene}
        position={position}
        scale={scale}
      />
    );
  }

  // Se for abajur, carrega o modelo GLB e aplica escala menor
  if (productType === 'abajur') {
    const { scene } = useGLTF('/models/abajur.glb');
    return (
      <primitive
        ref={meshRef}
        object={scene}
        position={position}
        scale={scale * 0.4} // Diminui o abajur para 40% do tamanho original
      />
    );
  }

  // Se for planta, carrega o modelo GLB
  if (productType === 'planta') {
    const { scene } = useGLTF('/models/planta/source/planta.glb');
    return (
      <primitive
        ref={meshRef}
        object={scene}
        position={position}
        scale={scale}
      />
    );
  }

  // Se for geladeira, carrega o modelo GLB
  if (productType === 'geladeira') {
    const { scene } = useGLTF('/models/geladeira_eletrolux/scene.gltf');
    return (
      <primitive
        ref={meshRef}
        object={scene}
        position={position}
        scale={scale}
      />
    );
  }

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  const getProductGeometry = () => {
    switch (productType) {
      // Remova o procedural de poltrona e abajur, pois agora são modelos GLB
      case 'vestido':
        return (
          <group ref={meshRef} position={position} scale={scale}>
            {/* Corpo do vestido */}
            <Box args={[0.8, 1.5, 0.1]} position={[0, 0.75, 0]}>
              <meshStandardMaterial color="#4169E1" />
            </Box>
            {/* Mangas */}
            <Box args={[0.2, 0.6, 0.1]} position={[-0.5, 1.2, 0]}>
              <meshStandardMaterial color="#4169E1" />
            </Box>
            <Box args={[0.2, 0.6, 0.1]} position={[0.5, 1.2, 0]}>
              <meshStandardMaterial color="#4169E1" />
            </Box>
          </group>
        );
      case 'batom':
        return (
          <group ref={meshRef} position={position} scale={scale * 2}>
            {/* Tubo */}
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.1, 0.1, 0.8, 8]} />
              <meshStandardMaterial color="#FFD700" />
            </mesh>
            {/* Batom */}
            <mesh position={[0, 0.5, 0]}>
              <cylinderGeometry args={[0.08, 0.08, 0.2, 8]} />
              <meshStandardMaterial color="#DC143C" />
            </mesh>
          </group>
        );
      case 'relogio':
        return (
          <group ref={meshRef} position={position} scale={scale}>
            {/* Mostrador */}
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.3, 0.3, 0.05, 16]} />
              <meshStandardMaterial color="#000000" />
            </mesh>
            {/* Pulseira */}
            <Box args={[0.1, 0.05, 1]} position={[0, 0, 0]}>
              <meshStandardMaterial color="#333333" />
            </Box>
          </group>
        );
      default:
        return (
          <Box ref={meshRef} args={[1, 1, 1]} position={position} scale={scale}>
            <meshStandardMaterial color="#ff6b6b" />
          </Box>
        );
    }
  };

  return getProductGeometry();
};

// Componente principal da cena AR
const ARScene = ({ productType = 'poltrona', isVisible = true }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="w-full h-full relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p>Carregando modelo 3D...</p>
          </div>
        </div>
      )}
      
      <Canvas
        camera={{ position: [0, 2, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        {/* Iluminação */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />

        {/* Produto 3D */}
        <Product3D productType={productType} />

        {/* Controles de órbita para interação */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={2}
          maxDistance={10}
        />

        {/* Plano de referência (opcional) */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color="#f0f0f0" transparent opacity={0.3} />
        </mesh>

      </Canvas>
    </div>
  );
};

export default ARScene;

