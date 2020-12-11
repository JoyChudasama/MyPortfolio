import React from 'react';
// Animations
import {motion} from 'framer-motion';
import {pageAnimation} from '../Animations/PageAnimation';

const ContactMe = () => {
    return(
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <h1>Contact Me</h1>
        </motion.div>
    )
}

export default ContactMe;