import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import uuid from 'react-uuid';
// Details about Projects like Title, Photos etc
import MyProjectsData0 from '../Data/MyProjectsData';
// Style
import { StyledProjectDetails, StyledProjectHeadline, StyledWebstack, StyledDescription } from '../Style/MyProjectsDetailsStyle';
// Components 
import ProjectsWebStack from '../Components/ProjectsWebStack';
// Framer Motion
import { motion } from 'framer-motion';
// Animations
import { pageAnimation } from '../Animations/PageAnimation';
import { spinAnimation, scrollRevealAnimation } from '../Animations/ChildElementsAnimation';
// For Scroll Animation
import {useScroll} from '../ReusableComponents/useScroll';
import ScrollToTop from '../ReusableComponents/ScrollToTop.js';

const MyProjectsDetails = () => {

    
    // Getting Current URL From User
    const history = useHistory();
    const url = history.location.pathname;

    // State for Current Project URL
    const [projects, setProjects] = useState(MyProjectsData0);
    const [project, setProject] = useState({});


    // Updating State for Current Project & URL
    useEffect(() => {
        const currentProject = projects.filter((projectData) => projectData.url === url);
        setProject(currentProject[0])
    }, [projects, url]);

    //useScroll
    const [elements, controls] = useScroll();
    const [elements1, controls1] = useScroll();

    return (
        <StyledProjectDetails variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <ScrollToTop />
            <StyledProjectHeadline >
                <> {project.mainImg ? (
                        <motion.div variants={spinAnimation} id="imgWrapper">
                            <motion.img src={project.mainImg} alt="MainImg" />
                        </motion.div>
                    ) 
                    : <motion.h1 id="img-tag"> This Is The Website It Self</motion.h1>} 
                </>
            </StyledProjectHeadline>
            < StyledWebstack variants={scrollRevealAnimation} ref={elements1} animate={controls1} initial='hidden'>
                {project.webstack && project.webstack.map((i) => (
                    <ProjectsWebStack title={i.title} names={i.lists} key={uuid()} />
                ))}
            </StyledWebstack>
            <StyledDescription variants={scrollRevealAnimation} ref={elements} animate={controls} initial='hidden'>
                <motion.h4>Extras</motion.h4>
                <motion.p>{project.description}</motion.p>
            </StyledDescription>
        </StyledProjectDetails>
    )
}

export default MyProjectsDetails;