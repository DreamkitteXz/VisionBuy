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

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  const getProductGeometry = () => {
    switch (productType) {
      case 'poltrona':
        return (
          <group ref={meshRef} position={position} scale={scale}>
            {/* Assento */}
            <Box args={[1.2, 0.1, 1]} position={[0, 0.5, 0]}>
              <meshStandardMaterial color="#666666" />
            </Box>
            {/* Encosto */}
            <Box args={[1.2, 1, 0.1]} position={[0, 1, -0.45]}>
              <meshStandardMaterial color="#666666" />
            </Box>
            {/* Braços */}
            <Box args={[0.1, 0.8, 0.8]} position={[-0.55, 0.8, -0.1]}>
              <meshStandardMaterial color="#666666" />
            </Box>
            <Box args={[0.1, 0.8, 0.8]} position={[0.55, 0.8, -0.1]}>
              <meshStandardMaterial color="#666666" />
            </Box>
          </group>
        );
      case 'abajur':
        return (
          <group ref={meshRef} position={position} scale={scale}>
            {/* Base */}
            <Box args={[0.3, 0.05, 0.3]} position={[0, 0, 0]}>
              <meshStandardMaterial color="#8B4513" />
            </Box>
            {/* Haste */}
            <Box args={[0.02, 1, 0.02]} position={[0, 0.5, 0]}>
              <meshStandardMaterial color="#8B4513" />
            </Box>
            {/* Cúpula */}
            <mesh position={[0, 1.2, 0]}>
              <coneGeometry args={[0.4, 0.6, 8]} />
              <meshStandardMaterial color="#F5F5DC" />
            </mesh>
          </group>
        );
      case 'planta':
        return (
          <group ref={meshRef} position={position} scale={scale}>
            {/* Vaso */}
            <mesh position={[0, 0.2, 0]}>
              <cylinderGeometry args={[0.2, 0.15, 0.4, 8]} />
              <meshStandardMaterial color="#8B4513" />
            </mesh>
            {/* Folhas */}
            <mesh position={[0, 0.6, 0]}>
              <sphereGeometry args={[0.3, 8, 6]} />
              <meshStandardMaterial color="#228B22" />
            </mesh>
          </group>
        );
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

        {/* Texto informativo */}
        <Text
          position={[0, 3, 0]}
          fontSize={0.3}
          color="#333333"
          anchorX="center"
          anchorY="middle"
        >
          Arraste para rotacionar • Scroll para zoom
        </Text>
      </Canvas>
    </div>
  );
};

export default ARScene;

