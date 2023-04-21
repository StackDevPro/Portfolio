
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';




const Computers = ({isMobile}) => {
  const computer = useGLTF('./planet_earth/scene.gltf')



  return (
    <mesh>
      <hemisphereLight intensity={1.1} groundColor="white" />
      <pointLight intensity={0} />
      <spotLight
        position={[10, 10, 10]}
        angle={1}
        penumbra={1}
        intensity={1}
        
        
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 2}
        
        position-y={-4} 
        rotation-y={0}
      />
      
    </mesh>

  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=> {
    const mediaQuery = window.matchMedia('(max-width: 500)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change',
    handleMediaQueryChange);

    return() => {
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    };
  }, []);
  
  
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      dpr={[1, 2]}
      
      camera={{ position: [25, 10, 10], fov: 20,near: 0.1,
        far: 200 }}
      

    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          
        />
        <Computers isMobile={isMobile} />

      </Suspense>

      <Preload all />
    </Canvas>
  );



};

export default ComputersCanvas;