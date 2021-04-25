import React from 'react';
import {Link} from 'react-router-dom';
// Style
import {StyledWork,StyledProjects,StyledHide, StyledFrame1, StyledFrame2, StyledFrame3, StyledFrame4} from '../Style/MyProjectsStyle';
// Images
import helpStudents from '../Images/HelpStudents.png';
import techForum from '../Images/TechForum.png';
import virtualAssistant from '../Images/VirtualAssistant.png';
import aceCoding from '../Images/AceCoding.png';
//Animation
import {motion} from 'framer-motion';
import {pageAnimation} from '../Animations/PageAnimation';
import {textFadeAnimation, imgAnimation, lineAnimation, overlaySliderAnimation, zeroToFullWidthAnimation} from '../Animations/ChildElementsAnimation';
// useScroll
import {useScroll} from '../ReusableComponents/useScroll';
import ScrollToTop from '../ReusableComponents/ScrollToTop.js';

const MyProjects = () => {

    // useScroll
    const [elements1, controls1] = useScroll();
    const [elements2, controls2] = useScroll();
    const [elements3, controls3] = useScroll();

    return(
        
        <StyledWork variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            
            <ScrollToTop />
            {/* Slider Animation */}
            <StyledFrame1 variants={overlaySliderAnimation}></StyledFrame1>
            <StyledFrame2 variants={overlaySliderAnimation}></StyledFrame2>
            <StyledFrame3 variants={overlaySliderAnimation}></StyledFrame3>
            <StyledFrame4 variants={overlaySliderAnimation}></StyledFrame4>

            <StyledProjects>
                <motion.h2 variants={textFadeAnimation}>Help Students</motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <StyledHide>
                    <Link to="/my-projects/help-students"> <motion.img variants={imgAnimation} src={helpStudents} alt="Help Students" /></Link>
                </StyledHide>
            </StyledProjects>
            <StyledProjects ref={elements1} variants={zeroToFullWidthAnimation} animate={controls1} initial="hidden">
                <motion.h2 variants={textFadeAnimation}>Tech Forum</motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <StyledHide>
                    <Link to="/my-projects/tech-forum"><motion.img variants={imgAnimation} src={techForum} alt="Tech Forum" /></Link>
                </StyledHide>
            </StyledProjects>
            <StyledProjects ref={elements2} variants={zeroToFullWidthAnimation} animate={controls2} initial="hidden">
                <motion.h2 variants={textFadeAnimation}>Virtual Assistant</motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <StyledHide>
                    <Link to="/my-projects/virtual-assistant"><motion.img variants={imgAnimation} src={virtualAssistant} alt="Virtual Assistant" /></Link>
                </StyledHide>
            </StyledProjects>
            <StyledProjects ref={elements3} variants={zeroToFullWidthAnimation} animate={controls3} initial="hidden">
                <motion.h2 variants={textFadeAnimation}>AceCoding.io</motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <StyledHide>
                    <Link to="/my-projects/ace-coding-io"><motion.img variants={imgAnimation} src={aceCoding} alt="AceCoding.io" /></Link>
                </StyledHide>
            </StyledProjects>
        </StyledWork>
    )
}


export default MyProjects;