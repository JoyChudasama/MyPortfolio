import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import uuid from 'react-uuid';
// Details about Projects like Title, Photos etc
import MyProjectsData0 from '../Data/MyProjectsData';
// Style
import {StyledProjectDetails, StyledProjectHeadline, StyledWebstack, StyledDescription} from '../Style/MyProjectsDetailsStyle';
// Components 
import ProjectsWebStack from '../Components/ProjectsWebStack';
// Animations
import {pageAnimation} from '../Animations/PageAnimation';



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
            <StyledProjectHeadline>
                <h2>{project.title}</h2>
                <> {project.mainImg ? (<div id="img-wrapper"><img src={project.mainImg} alt="MainImg" /></div>) : <h1 id="img-tag"> This Is The Website It Self</h1>} </>
            </StyledProjectHeadline>
            < StyledWebstack>
                {project.webstack && project.webstack.map((i) => (
                    <ProjectsWebStack title={i.title} names={i.lists} key={uuid()}/>
                ))}
            </StyledWebstack>
            <StyledDescription>
                <h4>Extras</h4>
                <p>{project.description}</p>
            </StyledDescription>
        </StyledProjectDetails>
    )
    
}

export default MyProjectsDetails;