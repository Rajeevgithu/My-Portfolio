import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  Html,
  useProgress,
  Environment,
  PresentationControls,
} from "@react-three/drei";

// Inline Loader Component
const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center text-white">
        <div className="relative w-16 h-16 mb-4">
          <div className="absolute inset-0 border-4 border-gray-600 rounded-full"></div>
          <div
            className="absolute inset-0 border-4 border-[#00d4aa] rounded-full"
            style={{
              clipPath: `polygon(0 0, ${progress}% 0, ${progress}% 100%, 0 100%)`,
            }}
          ></div>
        </div>
        <span className="text-lg font-semibold text-[#00d4aa]">
          Loading 3D Model
        </span>
        <span className="mt-2 text-sm opacity-80">{progress.toFixed(0)}%</span>
      </div>
    </Html>
  );
};

// 3D Model Component
const DesktopPC = ({ isMobile, isVisible, onLoad, onError, modelPosition = [0, -1.5, 0], modelRotation = [0, Math.PI / 6, 0] }) => {
  const pc = useGLTF("/desktop_pc/scene.gltf");
  const meshRef = useRef();

  useEffect(() => {
    if (pc.scene) {
      onLoad?.();
    }
  }, [pc.scene, onLoad]);

  useFrame((state) => {
    if (meshRef.current && isVisible) {
      // Subtle floating animation
      meshRef.current.position.y =
        -4.25 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      // Removed manual Y rotation, now handled by OrbitControls autoRotate
    }
  });

  return (
    <group ref={meshRef}>
      {/* Enhanced Lighting */}
      <ambientLight intensity={0.4} />
      <hemisphereLight
        intensity={0.5}
        groundColor="#000000"
        skyColor="#00d4aa"
      />

      {/* Main spotlight */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.15}
        penumbra={1}
        intensity={2.5}
        castShadow
        shadow-mapSize={2048}
        color="#ffffff"
      />

      {/* Accent light */}
      <spotLight
        position={[20, 30, -10]}
        angle={0.1}
        penumbra={1}
        intensity={1.2}
        color="#00d4aa"
      />

      {/* Fill light */}
      <pointLight position={[0, 20, 0]} intensity={0.6} color="#ffffff" />

      {/* Model */}
      <primitive
        object={pc.scene}
        scale={isMobile ? 0.7 : 1.0}
        position={modelPosition}
        rotation={modelRotation}
      />

    </group>
  );
};

// Canvas Wrapper Component
const PCCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleMediaChange);

    // Delay visibility for smooth entrance
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsLoading(false);
    }, 500);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      clearTimeout(timer);
    };
  }, []);

  const handleModelLoad = () => {
    setModelLoaded(true);
    console.log("3D Model loaded successfully");
  };

  const handleModelError = () => {
    setHasError(true);
    console.error("Failed to load 3D model");
  };

  return (
    <div className="w-full h-full relative">
      {isMobile ? (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center text-white opacity-60">
            <div className="text-6xl mb-4">💻</div>
            <p className="text-lg">Interactive 3D Model</p>
            <p className="text-sm opacity-80">Available on desktop</p>
          </div>
        </div>
      ) : (
          <Canvas
            frameloop="demand"
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, 10, 45], fov: 25, near: 0.1, far: 2000 }}
            gl={{
              preserveDrawingBuffer: true,
              antialias: true,
              alpha: true,
            }}
            style={{
              backgroundColor: "transparent",
            }}
            className="cursor-grab active:cursor-grabbing transition-all duration-300"
            onError={handleModelError}
          >
            <Suspense fallback={<CanvasLoader />}>
              <PresentationControls
                global
                rotation={[0, -0.2, 0]}
                polar={[-Math.PI / 4, Math.PI / 4]}
                azimuth={[-Math.PI / 4, Math.PI / 4]}
                config={{ mass: 2, tension: 400 }}
              >
                <OrbitControls
                  enableZoom={true}
                  enablePan={false}
                  enableRotate={true}
                  minDistance={20}
                  maxDistance={100}      // restrict how far user can zoom out
                  minPolarAngle={Math.PI / 4}
                  maxPolarAngle={(3 * Math.PI) / 4}  // prevent flipping
                  enableDamping={true}
                  dampingFactor={0.05}
                  autoRotate={false}
                />
                <DesktopPC
                  isMobile={isMobile}
                  isVisible={isVisible}
                  onLoad={handleModelLoad}
                  onError={handleModelError}
                  modelPosition={[2, -2, 0]}
                  modelRotation={[0, -Math.PI / 2, 0]}
                />
              </PresentationControls>
            </Suspense>
            <Environment preset="city" />
            <Preload all />
          </Canvas>
      )}
    </div>
  );
};

export default PCCanvas;
