import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Computador } from "./Computador";
import { OrbitControls, Stage } from "@react-three/drei";

const ComputadorContainer = () => {
   return (
      <Canvas style={{ width: '100%', height: '400px' }} camera={{ position: [0, 0, 5], fov: 50 }}>
            <Suspense fallback={"loading..."}>
               <Stage>
                  
               </Stage>
               <Computador />
               <OrbitControls enableZoom={false} />
            </Suspense>
      </Canvas>
   )
}

export default ComputadorContainer