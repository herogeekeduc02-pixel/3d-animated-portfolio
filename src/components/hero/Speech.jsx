import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import "./hero.css";

const Speech = () => {
    return (
        <motion.div className = 'bubbleContainer'
            animate= {{opacity: [0,1]}}
            transition={{duration: 1}}
        >
            <div className="bubble">
                <TypeAnimation
                    sequence={[
                        1000,
                        "seja bem vindo ao meu portfólio !",
                        1000,
                        "sou um desenvolvedor full stack",
                        1000,
                        "especialista em React",
                    ]}
                    wrapper="span"
                    speed={48}
                    deletionSpeed={50}
                    repeat={Infinity}
                />
            </div>
            <img src="/man.png" alt="" />
        </motion.div>
    )
}

export default Speech;