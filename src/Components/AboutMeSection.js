import React from 'react';
import {Link} from 'react-router-dom';
// Image
import home1 from '../Images/home1.png';
// Style
import {StyleButton, StyleddImage, StyledHide} from '../Style/AboutMeSectionStyle';
//General Style
import {StyledAbout, StyledDescription} from '../Style/BaseStyle';
// Framer Motion
import {motion} from 'framer-motion';
import {titleAnimation, textFadeAnimation, imgAnimation} from '../Animations/ChildElementsAnimation';
// Component
import BgWaveAnimation from '../Components/BgWaveAnimation';

const AboutMeSection = () => {

    return(
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <motion.h2 variants={titleAnimation} >Hi, I am <span>Joy</span></motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnimation} >I Work to <span>Solve</span></motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnimation} >Technological <span>Issues</span></motion.h2>
                    </StyledHide>
                </div>
                <motion.p variants={textFadeAnimation}> And I Draw Websites On The Back Of Flask & Node Using CSS & JavaScript Frameworks </motion.p>
                <Link to="/contact-joy"><StyleButton variants={textFadeAnimation}> Contact Me</StyleButton></Link>
            </StyledDescription>
            <StyleddImage variants={imgAnimation} >
                <img src={home1} alt="CameraMan" />
            </StyleddImage>
            <BgWaveAnimation />
        </StyledAbout>
    )
}

export default AboutMeSection;