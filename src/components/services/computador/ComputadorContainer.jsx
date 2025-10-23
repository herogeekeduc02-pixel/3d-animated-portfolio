import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Computador } from "./Computador";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const ComputadorContainer = () => {
   return (
      <Canvas style={{ width: '100%', height: '400px' }} camera={{ position: [0, 0, 5], fov: 50 }}>
            <Suspense fallback={"loading..."}>
               <Stage environment="night" intensity={0.5}>
                  <Computador/>
               </Stage> 
               <OrbitControls enableZoom={false} autoRotate/>
               <PerspectiveCamera  position={[-1, 0, 1.8]} zoom={0.6} makeDefault/>
            </Suspense>
      </Canvas>
   )
}

export default ComputadorContainer