import {useEffect, useRef, useState} from "react"
import "./portifolio.css"
import {motion, useScroll, useInView, useTransform} from "motion/react"

const imgVariants = {
   initial: {
      x:-500,
      y: 500,
      opacity: 0
   },
   animate: {
      x: 0,
       y:0,
      opacity: 1,
      transition: {
         duration: 0.5,
         ease: "easeInOut",
      }
   }
}

const textVariants = {
   initial: {
      x: 500,
      y: 500,
      opacity: 0
   },
   animate: {
      x: 0,
      y:0,
      opacity: 1,
      transition: {
      duration: 0.5,
      ease: "easeInOut",
         staggerChildren: 0.5,
      }
   }
}

const items = [
   {
      id: 1,
      img: "/p1.png",
      title: "Projeto 1",
      desc: "Descrição do projeto 1",
      link: "/",
   },
   {
      id: 2,
      img: "/p2.png",
      title: "Projeto 2",
      desc: "Descrição do projeto 2",
      link: "/",
   },
   {
      id: 3,
      img: "/p3.png",
      title: "Projeto 3",
      desc: "Descrição do projeto 3",
      link: "/",
   },
   {
      id: 4,
      img: "/p4.png",
      title: "Projeto 4",
      desc: "Descrição do projeto 4",
      link: "/",
   },
   {
      id: 5,
      img: "/p5.png",
      title: "Projeto 5",
      desc: "Descrição do projeto 5",
      link: "/",
   }
]

const ListItem = ({item}) => {

   const ref = useRef()

   const isInView = useInView (ref, {margin: "-100px"})

   return(
      <div className="pItem" ref = {ref}>
         <motion.div className="pImg"
            variants = {imgVariants} 
            animate ={isInView ? "animate": "initial"}
         >
            <img src={item.img} alt="" />
         </motion.div>
         <motion.div className="pText"
            variants = {imgVariants}
            animate ={isInView ? "animate": "initial"}
         >
            <motion.h1>{item.title}</motion.h1>
            <motion.p>{item.desc}</motion.p>
            <motion.a href={item.link}>
               <button>View The project</button>
            </motion.a>
         </motion.div>
      </div>

   )
}

const Portifolio = () => {
   const[containerDistance, setContainerDistance] = useState(0)

   const ref = useRef()

   useEffect(() => {
      const calculateDistance = () => {
         if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setContainerDistance(rect.left);
         }
      }
   
      calculateDistance();   
      window.addEventListener("resize", calculateDistance);
      
      return () => {
         window.removeEventListener("resize", calculateDistance);
      }
   }, [])

   const{scrollYProgress} = useScroll({target:ref})

   const xTranslate = useTransform(
      scrollYProgress,
      [0,1],
      [0, -window.innerWidth * items.length]
   )

   return (
      <div className='portifolio' ref ={ref}>
         <motion.div className= "pList"
            style ={{x:xTranslate}}
         >

            {items.map((item) => (
               <ListItem item={item} key={item.id}/>
            ))}
         </motion.div>
         <section/>
         <section/>
         <section/>
         <section/>
         <section/>
         <div className="pProgress">
            <svg width="100%" height="100%" viewBox="0 0 160 160">
               <circle 
                  cx ="80"
                  cy ="80"
                  r = "70"
                  fill = "none"
                  stroke="#ddd"
                  strokeWidth={20}               
               />
               <motion.circle 
                  cx ="80"
                  cy ="80"
                  r = "70"
                  fill = "none"
                  stroke="#dd4c62"
                  strokeWidth={20}   
                  pathLength={{pathLength:scrollYProgress}}         
                  transform="rotate(-90 80 80)"   
               />

            </svg>
         </div>
      </div>
   );
};

export default Portifolio;