import { lazy, Suspense, useEffect } from "react"; 
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

// Lazy load the Ball component
const LazyBall = lazy(() => import('./Ball')); // Ensure the correct path

const Ball = (props) => {
  const [decal, error] = useTexture([props.imgUrl]);

  // Check for errors while loading the texture
  if (error) {
    console.error("Error loading texture:", error);
    return null; // Optionally handle the error by returning a placeholder or nothing
  }

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  useEffect(() => {
    // Check for WebGL2 support; if not present, fallback to WebGL1 (Safari fallback)
    const canvas = document.createElement('canvas'); // Create a new canvas
    const gl = canvas.getContext('webgl2');
    if (!gl) {
      console.warn('WebGL2 not supported, falling back to WebGL1.');
      // Optionally handle fallback behavior here
    }
  }, []);

  return (
    <Canvas frameloop='demand' dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <LazyBall imgUrl={icon} /> {/* Using lazy loaded component */}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
