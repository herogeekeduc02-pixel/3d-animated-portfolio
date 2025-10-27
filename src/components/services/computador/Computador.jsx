import { useGLTF } from '@react-three/drei'

export function Computador(props) {
  const { nodes, materials } = useGLTF('/computador.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-2.302, 0, 0.011]} scale={[0.463, 0.024, 0.645]}>
        <group position={[-0.001, 1.102, 0.679]} rotation={[Math.PI, Math.PI / 2, 0]} scale={[-0.041, 0.088, 0.057]}>
          <mesh geometry={nodes.Object_9.geometry} material={materials.KEYS} />
          <mesh geometry={nodes.Object_10.geometry} material={materials.wasd_key} />
        </group>
        <group position={[-0.706, 1.045, -0.934]} scale={[0.036, 0.026, 0.026]}>
          <mesh geometry={nodes.Object_20.geometry} material={materials.power_button} />
          <mesh geometry={nodes.Object_22.geometry} material={materials.material_7} position={[-0.254, 1.368, -0.004]} rotation={[0, Math.PI / 2, 0]} scale={[12.048, 1609.138, 57.751]} />
        </group>
        <mesh geometry={nodes.Object_4.geometry} material={materials.DECK} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.deck2} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.pendrive} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.DECK} position={[-0.977, -0.059, -0.116]} rotation={[-Math.PI, 0, -Math.PI]} scale={[1, 1.167, 1]} />
        <mesh geometry={nodes.Object_14.geometry} material={materials['DECK.001']} position={[-0.91, 0.285, -0.625]} scale={[2.161, 45.815, 0.787]} />
        <mesh geometry={nodes.Object_16.geometry} material={materials['DECK.001']} position={[-0.91, 0.296, 0.653]} scale={[2.161, 45.815, 0.787]} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.material_7} position={[-0.917, 1.045, -0.002]} scale={[2.161, 41.868, 1.551]} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.tuf_logo} position={[0.492, 0.898, -0.097]} scale={[-2.161, 41.868, 1.551]} />
      </group>
      <group position={[-2.428, 0.03, 0.43]} rotation={[0, 1.571, 0]} scale={[0.039, 0.024, 0.032]}>
        <mesh geometry={nodes.Object_26.geometry} material={materials.DECK} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.DECK} position={[-1.498, -0.016, 2.039]} scale={[0.652, 0.652, 0.785]} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.DECK} position={[2.033, 0.003, 2.066]} scale={[0.294, 0.294, 0.354]} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.DECK} position={[0.229, -0.004, 2.073]} scale={[0.371, 0.371, 0.447]} />
      </group>
      <group position={[-2.734, 0.008, 0.655]} rotation={[0, 0, -1.136]} scale={[-0.762, 0.008, 0.762]}>
        <mesh geometry={nodes.Object_34.geometry} material={materials.DECK} />
        <mesh geometry={nodes.Object_35.geometry} material={materials.display_sqr} />
        <mesh geometry={nodes.Object_37.geometry} material={materials.DECK} position={[0, 1.111, -0.029]} rotation={[1.571, -1.571, 0]} scale={[-100.103, 1.441, 1.005]} />
        <mesh geometry={nodes.Object_39.geometry} material={materials.DECK} position={[0, 1.111, -1.668]} rotation={[1.571, -1.571, 0]} scale={[-100.103, 1.441, 1.005]} />
        <mesh geometry={nodes.Object_41.geometry} material={materials.ASUS_LOGO} position={[0.133, -2.677, -0.77]} rotation={[0, 0, -0.231]} scale={[-1.472, 130.758, 1.313]} />
        <mesh geometry={nodes.Object_43.geometry} material={materials.outer_logo} position={[0.992, -3.737, -0.305]} rotation={[-3.142, 0, -0.132]} scale={[1.982, 162.831, 1.718]} />
        <mesh geometry={nodes.Object_45.geometry} material={materials.material_13} position={[0.699, -3.434, -0.852]} rotation={[-1.566, -1.562, -1.557]} scale={[-0.948, 94.428, 1.008]} />
      </group>
      <mesh geometry={nodes.Object_47.geometry} material={materials.keyLight} position={[-2.42, 0.02, 0.005]} scale={[0.229, 0.346, 0.625]} />
    </group>
  )
}

useGLTF.preload('/computador.glb')
