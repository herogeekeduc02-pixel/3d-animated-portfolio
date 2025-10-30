
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Setup(props) {
  const { nodes, materials } = useGLTF('/setup.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={21.277}>
        <mesh geometry={nodes.Final_lambert1_0.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      </group>
    </group>
  )
}

useGLTF.preload('/setup.glb')
