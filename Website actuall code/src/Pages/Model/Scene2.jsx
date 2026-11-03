import { Canvas } from "@react-three/fiber";
import "../../assets/Styles/Pages/contact.scss";
import { Facebook } from "./facebook";

function Scene2() {
  return (
    <div className="git">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 34 }}
        dpr={[1, 1.25]}
        gl={{ antialias: true, alpha: true }}     
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 4, 5]} intensity={0.9} />
        <Facebook />
      </Canvas>
    </div>
  );
}

export default Scene2;
