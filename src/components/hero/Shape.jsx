import { MeshDistortMaterial, Sphere } from "@react-three/drei";


const Shape = () => {
    return (
        <>
            <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial 
                    color="#8352FD" 
                    attach="material" 
                    distort={0.5}
                    speed={2}
                />
            </Sphere>
            <ambientLight intensity={1}/>
            <directionalLight color="#8352FD" position={[1, 2, 5]}/>
       </>

    );
};

export default Shape;