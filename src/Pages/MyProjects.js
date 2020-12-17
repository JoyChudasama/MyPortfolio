import React from 'react';
import {Link} from 'react-router-dom';
// Style
import {StyledWork,StyledProjects,StyledHide, StyledFrame1, StyledFrame2, StyledFrame3, StyledFrame4} from '../Style/MyProjectsStyle';
// Images
import tempImg1 from '../Images/HelpStudents.png';
import tempImg2 from '../Images/TechForum.png';
import tempImg3 from '../Images/VirtualAssistant.PNG';
import tempImg4 from '../Images/AceCoding.png';
//Animation
import {motion} from 'framer-motion';
import {pageAnimation} from '../Animations/PageAnimation';
import {textFadeAnimation, imgAnimation, lineAnimation, overlaySliderAnimation} from '../Animations/ChildElementsAnimation';

const MyProjects = () => {

    return(
        
        <StyledWork variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <StyledFrame1 variants={overlaySliderAnimation}></StyledFrame1>
            <StyledFrame2 variants={overlaySliderAnimation}></StyledFrame2>
            <StyledFrame3 variants={overlaySliderAnimation}></StyledFrame3>
            <StyledFrame4 variants={overlaySliderAnimation}></StyledFrame4>
            <StyledProjects>
                <motion.h2 variants={textFadeAnimation}>Help Students</motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <StyledHide>
                    <Link to="/my-projects/help-students"> <motion.img variants={imgAnimation} src={tempImg1} alt="Help Students" /></Link>
                </StyledHide>
            </StyledProjects>
            <StyledProjects>
                <motion.h2 variants={textFadeAnimation}>Tech Forum</motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <StyledHide>
                    <Link to="/my-projects/tech-forum"><motion.img variants={imgAnimation} src={tempImg2} alt="Tech Forum" /></Link>
                </StyledHide>
            </StyledProjects>
            <StyledProjects>
                <motion.h2 variants={textFadeAnimation}>Virtual Assistant</motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <StyledHide>
                    <Link to="/my-projects/virtual-assistant"><motion.img variants={imgAnimation} src={tempImg3} alt="Virtual Assistant" /></Link>
                </StyledHide>
            </StyledProjects>
            <StyledProjects >
                <motion.h2 variants={textFadeAnimation}>AceCoding.io</motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <StyledHide>
                    <Link to="/my-projects/ace-coding-io"><motion.img variants={imgAnimation} src={tempImg4} alt="AceCoding.io" /></Link>
                </StyledHide>
            </StyledProjects>
        </StyledWork>
    )
}


export default MyProjects;