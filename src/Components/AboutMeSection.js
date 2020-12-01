import React from 'react';
import home1 from '../Images/home1.png';

const AboutMeSection = () => {
    return(
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>Hi, I am Joy</h2>
                    </div>
                    <div className="hide">
                        <h2>I Work to <span>Solve</span></h2>
                    </div>
                    <div className="hide">
                        <h2>Technologicaal Issues</h2>
                    </div>
                </div>
                <p> And I Draw Websites On The Back Of FLASK & Node Using CSS & JavaScript Frameworks </p>
                <button>Contact Me</button>
            </div>
            <div className="image">
                <img src={home1} alt="CameraMan" />
            </div>
        </div>
    )
}

export default AboutMeSection;