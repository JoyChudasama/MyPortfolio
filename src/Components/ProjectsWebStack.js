import React from 'react';
import uuid from 'react-uuid';
// Style
import {StyledWebstackComponent} from '../Style/WebStackComponentStyle';

const ProjectsWebStack = ({title,names}) => {
    return(
        <StyledWebstackComponent>
            <h3>{title}</h3>
            <div className="line"></div>
            <div className="lists">
                {names.map((i)=>(
                    <ul key={uuid()}><li >{i}</li></ul>
                ))}
                
            </div>
        </StyledWebstackComponent>
    )
}


export default ProjectsWebStack;