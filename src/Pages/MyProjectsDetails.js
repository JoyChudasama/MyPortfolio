import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import uuid from 'react-uuid';
// Details about Projects like Title, Photos etc
import MyProjectsData0 from '../Data/MyProjectsData';
// Style
import {StyledProjectDetails, StyledProjectHeadline, StyledWebstack, StyledDescription} from '../Style/MyProjectsDetailsStyle';
// Components 
import ProjectsWebStack from '../Components/ProjectsWebStack';
// Framer Motion
import {motion} from 'framer-motion';
// Animations
import {pageAnimation} from '../Animations/PageAnimation';
import {textFadeAnimation, spinAnimation} from '../Animations/ChildElementsAnimation';


const MyProjectsDetails = () => {

    // Getting Current URL From User
    const history = useHistory();
    const url = history.location.pathname;

    // State for Current Project URL
    const [projects, setProjects] = useState(MyProjectsData0);
    const [project, setProject] = useState({});
    

    // UseEffect
    useEffect(() => {
        const currentProject = projects.filter((projectData) => projectData.url === url);
        setProject(currentProject[0])
    }, [projects,url]);

    
    return(
        <StyledProjectDetails variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <StyledProjectHeadline >
                <> {project.mainImg ? (<motion.div variants={spinAnimation} id="img-wrapper"><motion.img  src={project.mainImg} alt="MainImg" /></motion.div>) : <motion.h1 id="img-tag"> This Is The Website It Self</motion.h1>} </>
            </StyledProjectHeadline>
            < StyledWebstack>
                {project.webstack && project.webstack.map((i) => (
                    <ProjectsWebStack title={i.title} names={i.lists} key={uuid()}/>
                ))}
            </StyledWebstack>
            <StyledDescription>
                <motion.h4>Extras</motion.h4>
                <motion.p>{project.description}</motion.p>
            </StyledDescription>
        </StyledProjectDetails>
    )
    
}

export default MyProjectsDetails;