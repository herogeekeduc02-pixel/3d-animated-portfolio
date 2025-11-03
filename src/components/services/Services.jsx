import ComputadorContainer from "./computador/ComputadorContainer"
import "./services.css"
import Couter from "./Couter"
import { motion, useInView } from "motion/react";
import { useState, useRef } from "react";
import { setCurrentStack } from "three/tsl";

const textVariants = {
   initial: {
      x: -100,
      y: -100,
      opacity: 0,
   },
   animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { 
         duration: 1,
      },
   },
}

const listVariants = {
   initial: {
      x: -100,
      y: -100,
      opacity: 0,
   },
   animate: {
      x: 0,
      opacity: 1,
      transition: { 
         duration: 1,
         staggerChildren: 0.5,
      },
   },
}

const service = [
   {
      id: 1,
      img: "/service1.png",
      title: "Desenvolvimento Web",
   counter: 35,
   },
   {
      id: 2,
      img: "/service2.png",
      title: "Design 3D",
   counter: 20,
   },
   {
      id: 3,
      img: "/service3.png",
      title: "Aplicativos Mobile",
   counter: 15,
   }
]

const Services = () => {
   const [currentServiceId, setCurrentServiceId] = useState(1);
   const ref = useRef();
   const isInView = useInView(ref, {margin: "-200px"});
   return (
      <div className="services" ref={ref}>
         <div className="sSection left">
            <motion.h1 
               variants={textVariants}
               initial="initial"
               animate={isInView ? "animate" : "initial"}
               className="sTitle"
            >
                  Como Posso Ajudar ?
            </motion.h1>
            <motion.div 
               variants={listVariants}
               initial="initial"
               animate={isInView ? "animate" : "initial"}
             className="serviceList">
               {service.map((service) => (
                  <motion.div 
                     variants={listVariants}
                     className="service" 
                     key={service.id}
                     onClick ={() => setCurrentServiceId(service.id)}
                  >
                     <div className="serviceIcon">
                        <img src={service.img} alt="" />
                     </div>
                     <div className="serviceInfo">
                        <h2>{service.title}</h2>
                        <p>{service.counter} Projetos</p>
                     </div>
                  </motion.div>
               ))}
            </motion.div>
            <div className="couterList">
               <Couter from ={0} to ={104} text = "Projetos Completos"/>
               <Couter from ={0} to ={72} text = "Clientes Felizes"/>
            </div>
         </div>
         <div className="sSection right">
            {currentServiceId === 1 ?(
               <ComputadorContainer />
            ) : currentServiceId === 2 ? (
               <CarrinhoContainer />
            ) : (
               <SetupContainer />
            )}
         </div>

      </div>
   );
};

export default Services;