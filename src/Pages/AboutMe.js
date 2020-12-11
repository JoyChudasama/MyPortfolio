import React from 'react';
import AboutMeSection from '../Components/AboutMeSection';
import MySkillsSection from '../Components/MySkillsSection';
import FAQSection from '../Components/FAQSection';
//Animation
import {motion} from 'framer-motion';
import {pageAnimation} from '../Animations/PageAnimation';

const AboutMe = () => {
    return(
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <AboutMeSection />
            <MySkillsSection />
            <FAQSection />
        </motion.div>
    )
}

export default AboutMe;