import React from 'react';

// Icons
import sassIcon from '../Icons/Sass.svg';
import figmaIcon from '../Icons/Figma.svg';
import bootstrapIcon from '../Icons/Bootstrap.svg';
import es6Icon from '../Icons/ES6.svg';
import flaskIcon from '../Icons/Flask.svg';
import nodeIcon from '../Icons/Node.svg';
import pythonIcon from '../Icons/Python.svg';
import reactIcon from '../Icons/React.svg';


const MySkillsSection = () =>{

    const size='125px';

    return(
        <div className="skills">
            <div className="description">
                <h2>My</h2><span>Skills</span>
                <div className="cards">

                    <div className="card">
                        <div className="icon">
                            <img src={figmaIcon} alt="FigmaIcon" width={size} height={size}/>
                            <h3>Figma</h3>
                        </div>
                        <p>For UI/UX Design</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={sassIcon} alt="SASSIcon" width={size} height={size} />
                            <h3>Sass</h3>
                        </div>
                        <p>For Easier CSS</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={bootstrapIcon} alt="BootstrapIcon" width={size} height={size} />
                            <h3>Bootstrap</h3>
                        </div>
                        <p>When I am Lazy to write some HTML/CSS</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={es6Icon} alt="ES6Icon" width={size} height={size} />
                            <h3>ES6</h3>
                        </div>
                        <p>To make my work easy with Deconstruction, SpreadOperators, ArrowFunction and so on</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={reactIcon} alt="ReactIcon" width={size} height={size} />
                            <h3>React</h3>
                        </div>
                        <p>To get better control on FrontEnd</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={nodeIcon} alt="NodeIcon" width={size} height={size} />
                            <h3>Node</h3>
                        </div>
                        <p>My Backend for the FrontEnd</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={flaskIcon} alt="FlaskIcon" width={size} height={size} />
                            <h3>Flask</h3>
                        </div>
                        <p>When I am focusing on totally BackEnd</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={pythonIcon} alt="PythonIcon" width={size} height={size} />
                            <h3>Python</h3>
                        </div>
                        <p>Real Life Saver</p>
                    </div>
                </div>
            </div>    
        </div>
    )
}


export default MySkillsSection;