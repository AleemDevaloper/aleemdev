
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
export  function Git(props) {
  const boxRef = useRef();  // Create a reference to the box

  // Rotate the box
  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.y += 0.03;  // Rotate around the Y-axis
    }
  });
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}github.glb`)
  return (
    <group {...props} dispose={null} ref={boxRef}  position={[0, 0, 0]} >
      <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={28.364} >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve021.geometry}
          material={materials['glossy putih']}
        />
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve021_1.geometry}
        material={materials.github}
       /> 
      </group>
     
    </group>
    
  )
}