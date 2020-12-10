import React from 'react';
// Style
import {StyledWebstackComponent} from '../Style/WebStackComponentStyle';

const ProjectsWebStack = ({title,names}) => {
    return(
        <StyledWebstackComponent>
            <h3>{title}</h3>
            <div className="line"></div>
            <div className="lists">
                {
                    names.map((i)=>(<ul><li>{i}</li></ul>))
                }
            </div>
        </StyledWebstackComponent>
    )
}


export default ProjectsWebStack;