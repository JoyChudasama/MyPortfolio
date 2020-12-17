import React,{useState} from 'react';
// Framer Motion
import { motion } from 'framer-motion';


const Toggle = ({children,question}) => {
    const [toggle,  setToggle] = useState(false);
    return(
        <motion.div  className="question" onClick={() => setToggle(!toggle)}>
            <motion.h4 layout>{question}</motion.h4>
            {toggle ? children : ""}
            <motion.div layout className="faq-line"></motion.div>
        </motion.div>
        
    )
}

export default Toggle;