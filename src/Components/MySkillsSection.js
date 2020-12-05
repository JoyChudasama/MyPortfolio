import React from 'react';

// Icons
import sassIcon from '../Icons/Sass.svg';
import figmaIcon from '../Icons/Figma.svg';
import bootstrapIcon from '../Icons/Bootstrap.svg';
import materialIcon from '../Icons/Material.svg';
import es6Icon from '../Icons/ES6.svg';
import flaskIcon from '../Icons/Flask.svg';
import nodeIcon from '../Icons/Node.svg';
import pythonIcon from '../Icons/Python.svg';
import reactIcon from '../Icons/React.svg';

// Style
import {StyleSkills, StyledCards, StyleCard} from '../Style/MySkillsSectionStyle';

const MySkillsSection = () =>{

    const size='100px';

    return(
        <StyleSkills>
            <StyleSkills>
                <h2>My <span>Skills</span></h2>
                <StyledCards>
                    <StyleCard>
                        <div className="icon">
                            <img src={figmaIcon} alt="FigmaIcon" width={size} height={size}/>
                            <h3>Figma</h3>
                        </div>
                        <p>For UI/UX Design</p>
                    </StyleCard>
                    <StyleCard>
                        <div className="icon">
                            <img src={sassIcon} alt="SASSIcon" width={size} height={size} />
                            <h3>Sass</h3>
                        </div>
                        <p>To Make CSS Easier</p>
                    </StyleCard>
                    <StyleCard>
                        <div className="icon">
                            <img src={bootstrapIcon} alt="BootstrapIcon" width={size} height={size} />
                            <h3>Bootstrap</h3>
                        </div>
                        <p>When I am Lazy to write some HTML/CSS</p>
                    </StyleCard>
                    <StyleCard>
                        <div className="icon">
                            <img src={materialIcon} alt="MaterialIcon" width={size} height={size} />
                            <h3>Material UI</h3>
                        </div>
                        <p>Same as Bootstrap but when I need better color combination</p>
                    </StyleCard>
                    <StyleCard>
                        <div className="icon">
                            <img src={es6Icon} alt="ES6Icon" width={size} height={size} />
                            <h3>ES6</h3>
                        </div>
                        <p>To make my work easy with cool features of ES6</p>
                    </StyleCard>
                    <StyleCard>
                        <div className="icon">
                            <img src={reactIcon} alt="ReactIcon" width={size} height={size} />
                            <h3>React</h3>
                        </div>
                        <p>To get better control on FrontEnd</p>
                    </StyleCard>
                    <StyleCard>
                        <div className="icon">
                            <img src={nodeIcon} alt="NodeIcon" width={size} height={size} />
                            <h3>Node</h3>
                        </div>
                        <p>Backend to my FrontEnd</p>
                    </StyleCard>
                    <StyleCard>
                        <div className="icon">
                            <img src={flaskIcon} alt="FlaskIcon" width={size} height={size} />
                            <h3>Flask</h3>
                        </div>
                        <p>When I am focusing totally on BackEnd</p>
                    </StyleCard>
                    <StyleCard>
                        <div className="icon">
                            <img src={pythonIcon} alt="PythonIcon" width={size} height={size} />
                            <h3>Python</h3>
                        </div>
                        <p>Real Life Saver</p>
                    </StyleCard>
                </StyledCards>
            </StyleSkills>    
        </StyleSkills>
    )
}

export default MySkillsSection;