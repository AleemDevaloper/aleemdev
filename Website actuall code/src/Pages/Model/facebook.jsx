
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
export function Facebook(props) {

   const boxRef = useRef();  // Create a reference to the box
  
    // Rotate the box
    useFrame(() => {
      if (boxRef.current) {
        boxRef.current.rotation.y += 0.03;  // Rotate around the Y-axis
      }
    });


  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}facebook.glb`)
  return (
    <group {...props} dispose={null} ref={boxRef} position={[0,0,0]}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group position={[0, 0, 0]} scale={24.3814}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials['glossy_putih.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.glossy_fb}
          />
        </group>
      </group>
    </group>
  )
}