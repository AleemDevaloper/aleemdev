import { Canvas } from "@react-three/fiber";
import Project from "./project";

function ProjectScene() {
  return (
    <Canvas camera={{ fov: 27, position: [0, 0, 4.3] }} dpr={[1, 1.25]}>
      <ambientLight intensity={1.2} />
      <Project />
    </Canvas>
  );
}

export default ProjectScene;