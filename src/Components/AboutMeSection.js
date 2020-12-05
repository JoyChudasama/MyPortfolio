import React from 'react';
import home1 from '../Images/home1.png';

// Style
import {StyleButton} from '../Style/AboutMeSectionStyle';

//General Style
import {StyledAbout, StyledDescription, StyledImage} from '../Style/BaseStyle';

const AboutMeSection = () => {
    return(
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <div className="hide">
                        <h2>Hi, I am <span>Joy</span></h2>
                    </div>
                    <div className="hide">
                        <h2>I Work to <span>Solve</span></h2>
                    </div>
                    <div className="hide">
                        <h2>Technological <span>Issues</span></h2>
                    </div>
                </div>
                <p> And I Draw Websites On The Back Of Flask & Node Using CSS & JavaScript Frameworks </p>
                <StyleButton> Contact Me</StyleButton>
            </StyledDescription>
            <StyledImage>
                <img src={home1} alt="CameraMan" />
            </StyledImage>
        </StyledAbout>
    )
}

export default AboutMeSection;