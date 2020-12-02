import React from 'react';
import home1 from '../Images/home1.png';
import Link from 'react-router-dom';
// Styled Component
import styledComponents from 'styled-components';



const AboutMeSection = () => {
    return(
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <div className="hide">
                        <h2>Hi, I am <span>Joy</span></h2>
                    </div>
                    <div className="hide">
                        <h2>I Work to Solve</h2>
                    </div>
                    <div className="hide">
                        <h2>Technologicaal Issues</h2>
                    </div>
                </div>
                <p> And I Draw Websites On The Back Of Flask & Node Using CSS & JavaScript Frameworks </p>
                <StyledButton> Contact Me</StyledButton>
            </StyledDescription>
            <StyledImage>
                <img src={home1} alt="CameraMan" />
            </StyledImage>
        </StyledAbout>
    )
}


// About Component Style
const StyledAbout = styledComponents.div`
    min-height : 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`

const StyledDescription = styledComponents.div`
    flex: 1;
    padding-right: 5rem;

    h2{
        font-weight: lighter;
    }
`

const StyledImage = styledComponents.div`
    flex:.8;

    img{
        width:90%;
        height: 85vh;
        object-fit:cover;
        margin-left: 2rem;
    }
`
const StyledButton = styledComponents.button`
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;

    ::before{
            content:'';
            position:absolute;
            height:4.7rem;
            width:11rem;
            margin-left:-2.7rem;
            margin-top:-1.9rem;
            border-left: 2px solid #23d997;
            border-top: 2px solid #23d997;
            transition: all 0.3s  ease-out;
        }

        ::after{
            content:'';
            position:absolute;
            height:4.7rem;
            width:11rem;
            margin-left:-8.5rem;
            margin-top:-1.6rem;
            border-right: 2px solid #23d997;
            border-bottom: 2px solid #23d997;
            transition: all 0.3s  ease-out;
        }


        
    :hover{

        background-color: #23d997;
        color:black;
        
    
        ::before{
            content:'';
            position:absolute;
            height:4.7rem;
            width:11rem;
            margin-left:-3.7rem;
            margin-top:-2.8rem;
            border-left: 2px solid #23d997;
            border-top: 2px solid #23d997;
            transition: all 0.3s  ease-out;
        }

        ::after{
            content:'';
            position:absolute;
            height:4.7rem;
            width:11rem;
            margin-left:-7.5rem;
            margin-top:-0.7rem;
            border-right: 2px solid #23d997;
            border-bottom: 2px solid #23d997;
            transition: all 0.3s  ease-out;
        }
    }
`
export default AboutMeSection;