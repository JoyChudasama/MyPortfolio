import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
// Details about Projects like Title, Photos etc
import MyProjectsData0 from '../Data/MyProjectsData';
// Style
import {StyledProjectDetails, StyledProjectHeadline, StyledWebstack, StyledSecondaryImg, StyledDescription} from '../Style/MyProjectsDetailsStyle';
// Components 
import ProjectsWebStack from '../Components/ProjectsWebStack';
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
        <StyledProjectDetails>
            <StyledProjectHeadline>
                <h2>{project.title}</h2>
                <> {project.mainImg ? (<img src={project.mainImg} alt="MainImg"/>) : <h1 id="img-tag"> This Is The Website It Self</h1>} </>
            </StyledProjectHeadline>
            < StyledWebstack>
                {project.webstack && project.webstack.map((i) => (
                    <ProjectsWebStack title={i.title} names={i.lists} key={i}/>
                ))}
            </StyledWebstack>
            <StyledSecondaryImg>
                <img src={project.secondaryImg} alt="SecondaryImg" />
            </StyledSecondaryImg>
            <StyledDescription>
                <h4>Extras</h4>
                <p>{project.description}</p>
            </StyledDescription>
        </StyledProjectDetails>
    )
    
}

export default MyProjectsDetails;