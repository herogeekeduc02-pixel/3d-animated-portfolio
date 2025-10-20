import { animate } from "motion/react";
import "./hero.css";
import Speech from "./Speech.jsx";
import { motion, stagger } from "motion/react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Shape from "./Shape.jsx";


const awardVariants = {
    intial: {
        x: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 5,
            staggerChildren: 0.2,
        }
    }
}

const followVariants = {
    intial: {
        y: -100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,
        }
    } 
}

const Hero = () => {
    return <div className = "hero">
        <div className="hSection left">
            <motion.h1
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 3 }}
                className="hTitle">
                    Olá a Todos
                    <br />
                    <span>Eu sou David</span>
            </motion.h1>
            <motion.div >
                <motion.h2 variants={awardVariants}>Dev Experiente !</motion.h2>
                <motion.p variants = {awardVariants}>Programador com ampla gama de conhecimentos.</motion.p>
                <motion.div variants={awardVariants} className="awardList">
                    <motion.img variants={awardVariants} src="/award1.png" alt="" />
                    <motion.img variants={awardVariants} src="/award2.png" alt="" />
                    <motion.img variants={awardVariants} src="/award3.png" alt="" />
                </motion.div>
            </motion.div>
            {/* Scroll SVG*/}
            <motion.a 
                animate={{ y: [0,5], opacity: [0,1,0] }}
                transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                }}
                href="#services" 
                className="scroll">
                <svg
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
                        stroke="white"
                        strokeWidth="1"
                    />

                    <motion.path
                        animate={{ y: [0,5] }}
                        transition={{
                            repeat: Infinity,
                            duration: 4,
                            ease: "easeInOut",
                        }}
                        d = "M12 5V8"
                        stroke="white"
                        strokeWidth="1"
                        strokeLinecap="round" 
                    />
                </svg>
            </motion.a>
        </div>
        <div className="hSection right">
            {/* follow */}
            <motion.div 
                variants={followVariants} 
                initial="initial"
                animate="animate"
                className="follow"
            >
                <motion.a variants={followVariants} href="/">
                    <img src="/instagram.png" alt="" />
                </motion.a>
                <motion.a variants={followVariants} href="/">
                    <img src="/facebook.png" alt="" />
                </motion.a>
                <motion.a variants={followVariants} href="/">
                    <img src="/youtube.png" alt="" />
                </motion.a>
                <motion.div variants={followVariants} className="followTextContainer">
                    <div className="followText">
                        ME SIGA
                    </div>
                </motion.div>
            </motion.div>
            {/* BUNBBLE */}
            <Speech/>

            {/* CERTIFICATE */}
            <motion.div 
                className="certificate"
                animate={{ opacity: [0,1] }}
                transition={{ duration: 3 }}
            >
                <img src="/certificado.png" alt="" />
                <br />
                CERTIFICAÇÂO HERO GEEK 
                <br />
                PROFISSIONAL 
                <br />
                DESENVOLVEDOR WEB E UI DESIGNER
            </motion.div>

            {/* Contact Button */}
            <motion.a 
                href="/#contact" 
                className="contactlink"
                animate={{
                    x: [200,0], opacity: [0,1],
                }}
                transition={{
                    duration: 2,
                }}
            >
                <motion.div 
                    className="contactButton"
                    animate={{ rotate: [0,360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear", }}
                
                >
                    <svg viewBox="0 0 200 200" width="150" height="150">
                        <circle cx="100" cy="100" r="90" fill="pink"/>

                        <path 
                            id="innerCirclePath"
                            fill="none"
                            d = "M 100, 100 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                        />

                        <text className="circleText" >

                            <textPath href="#innerCirclePath">
                                ENTRE EM CONTATO
                            </textPath>
                        </text>
                        <text className="circleText" >

                            <textPath href="#innerCirclePath" startOffset={"60%"}>
                                E CONTRATE.
                            </textPath>
                        </text>

                    </svg>
                    <div className="arrow">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="50"
                            height="50"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                        >
                            <line x1="6" y1="18" x2="18" y2="6" />
                            <polyline points="9 6 18 6 18 15" />
                        </svg>
                    </div>
                </motion.div>
            </motion.a>
        </div>
        {/* 3D Animation */}
        <div className="bg">
            <Canvas>
                <Suspense fallback="loading...">
                    <Shape />
                </Suspense>
            </Canvas>

            <div className="hImg">
                <img src="hero1.png" alt="" />
            </div>
        </div>
    </div>;
};

export default Hero