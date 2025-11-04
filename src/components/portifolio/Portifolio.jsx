import "./portifolio.css"
import {motion, useScroll} from "motion/react"

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
   return(
      <div className="pItem">
         <div className="pImg">
            <img src={item.img} alt="" />
         </div>
         <div className="pText">
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <a href={item.link}>
               <button>View The project</button>
            </a>
         </div>
      </div>

   )
}

const Portifolio = () => {
   const[containerDistance, setContainerDistance] = useState(0)

   const ref = useRef()

   useEffect(() => {
      const calculateDistance = () => {
         if (ref.current) {
            const rect = ref.current.getBoundingClientReact();
            setContainerDistance(react.left);
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
         <motion.div className= "empty"
            style ={{width: window.innerWidth - containerDistance}}
         >

            {items.map((item) => (
               <ListItem item={item} key={item.id}/>
            ))}
         </motion.div>
         <section/>
         <section/>
         <section/>
         <section/>
      </div>
   );
};

export default Portifolio;