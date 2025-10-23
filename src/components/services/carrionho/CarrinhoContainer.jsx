import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Carrinho } from "./Carrinho";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const CarrinhoContainer = () => {
   return (
      <Canvas style={{ width: '100%', height: '400px' }} camera={{ position: [0, 0, 5], fov: 50 }}>
            <Suspense fallback={"loading..."}>
               <Stage environment="night" intensity={0.5}>
                  <Carrinho/>
               </Stage> 
               <OrbitControls enableZoom={false} autoRotate/>
               <PerspectiveCamera  position={[-1, 0, 1.8]} zoom={9} makeDefault/>
            </Suspense>
      </Canvas>
   )
}

export default CarrinhoContainer