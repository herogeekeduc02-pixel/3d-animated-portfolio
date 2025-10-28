import { div } from "motion/react-client"
import { useEffect } from "react";
import { useState, useRef, useEffect} from "react";
import { animate, useInView } from "motion/react";



const Couter = ({from,to,text}) => {
    const [currentServiceId, setCurrentServiceId] = useState(1);
    
    const [count, setCount] = useState(from);

    const ref = useRef();

    const isInView = useInView(ref);
    return (
        <div className="couter" ref={ref}>
            <h1>{count}+</h1>
            <p>{text}+</p>
        </div>
    )
}

useEffect(() => {
    const animation = animate(from, to, {
        duration: 4,
        ease: "easeOut",
        onUpdate: (prev => {
            setCount(Math.round(prev));
        })

    })

    return () => animation.cancel();
}, [isInView, from, to]);

export default Couter