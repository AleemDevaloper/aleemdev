import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Macbook from "./Macbook";

function Scene4() {
  return (
    <div className="macbook">
      <Canvas
        camera={{ fov: 15, position: [0, -10, 130] }}
        dpr={[1, 1.25]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[6, 8, 6]} intensity={1.2} />
        <spotLight
          position={[-8, 6, 10]}
          intensity={1.4}
          angle={0.5}
          penumbra={1}
          color="#c1ff12"
        />
        <OrbitControls
          enableDamping
          dampingFactor={0.1}
          enableZoom={false}
          enableRotate
          rotateSpeed={0.02}
          enablePan={false}
          panSpeed={0.5}
          minDistance={10}
          maxDistance={130}
        />
        <Suspense fallback={null}>
          <Macbook />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Scene4;
