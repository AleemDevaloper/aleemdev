import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
function Macbook() {
    const model = useGLTF(`${import.meta.env.BASE_URL}mac.glb`);
    const tex = useTexture(`${import.meta.env.BASE_URL}red.png`);
    const elapsed = useRef(0);
    const screen = useRef(null);
    const baseRotation = useRef(new THREE.Quaternion());
    const lidDelta = useRef(new THREE.Quaternion());
    const lidAxis = useRef(new THREE.Vector3(1, 0, 0));
    const initialized = useRef(false);

    model.scene.traverse(mesh => {
      if (mesh.name === 'screen') screen.current = mesh;
      if (mesh.name === 'matte') {
        mesh.material.map = tex;
        mesh.material.emissive.set('#c8f4ff');
        mesh.material.emissiveMap = tex;
        mesh.material.emissiveIntensity = 0.65;
        mesh.material.needsUpdate = true;
      }
    });

    if (screen.current && !initialized.current) {
      baseRotation.current.copy(screen.current.quaternion);
      initialized.current = true;
    }

    useFrame((_, delta) => {
      if (!screen.current) return
      elapsed.current = Math.min(elapsed.current + delta / 2.4, 1)
      const progress = THREE.MathUtils.smoothstep(elapsed.current, 0, 1)
      lidDelta.current.setFromAxisAngle(
        lidAxis.current,
        THREE.MathUtils.degToRad(90 - 90 * progress)
      );
      screen.current.quaternion.copy(baseRotation.current).multiply(lidDelta.current);
    })
    

  return (
    <group position={[0,-12,46]} scale={0.6}>
        <primitive object={model.scene} />
    </group>
  )
}

export default Macbook
