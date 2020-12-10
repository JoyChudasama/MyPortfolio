import React from 'react';
import {Link} from 'react-router-dom';
import {StyledWork,StyledProjects} from '../Style/MyProjectsStyle';

// Images
import tempImg1 from '../Images/Temp1.PNG';
import tempImg2 from '../Images/Temp2.PNG';
import tempImg3 from '../Images/Temp3.PNG';
import tempImg4 from '../Images/Temp4.PNG';



const MyProjects = () => {
    return(
        <StyledWork>
            <StyledProjects>
                <h2>Help Students</h2>
                <div className="line"></div>
                <Link to="#"><img src={tempImg1} alt="Help Students" /></Link>
            </StyledProjects>
            <StyledProjects>
                <h2>Tech Forum</h2>
                <div className="line"></div>
                <Link to="#"><img src={tempImg2} alt="Tech Forum" /></Link>
            </StyledProjects>
            <StyledProjects>
                <h2>Virtual Assistant</h2>
                <div className="line"></div>
                <Link to="#"><img src={tempImg3} alt="Virtual Assistant" /></Link>
            </StyledProjects>
            <StyledProjects>
                <h2>AceCoding.io</h2>
                <div className="line"></div>
                <Link to="#"><img src={tempImg4} alt="AceCoding.io" /></Link>
            </StyledProjects>
        </StyledWork>
    )
}


export default MyProjects;