import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from 'react';
import * as THREE from "three";

function Project() {
    let tex = useTexture('./pro.png');
    const meshRef = useRef();

    useFrame(() => {
      meshRef.current.rotation.y += 0.004;
    });
 
  
  return (
    <group rotation= {[-Math.PI / -10, 3, -0.2] } scale={0.8}>
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
      <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
    </mesh>
    </group>
  );
}

export default Project;
