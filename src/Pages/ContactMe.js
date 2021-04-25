import { React, Component } from 'react';
import { motion } from 'framer-motion';
// Animations
import { pageAnimation } from '../Animations/PageAnimation.js';
import { titleAnimation, iconScaleAnimation } from '../Animations/ChildElementsAnimation.js';
//Style
import { StyledIconsContainer, StyledContactMe, StyledHide } from '../Style/ContactMeStyle.js';
//Social Media Icons
import GmailLogo from '../Icons/GmailLogo.js';
import GitHubLogo from '../Icons/GitHubLogo.js';
import TwitterLogo from '../Icons/TwitterLogo.js';
import LinkedInLogo from '../Icons/LinkedInLogo.js';
import ScrollToTop from '../ReusableComponents/ScrollToTop.js';

class ContactMe extends Component {

    emailLink = "mailto:joychudasama11@gmail.com";
    twitterLink = 'https://twitter.com/JoyChudasama';
    githubLink = 'https://github.com/JoyChudasama';
    linkedinLink = 'https://www.linkedin.com/in/joy-chudasama/';

    render() {

        return (
            <StyledContactMe variants={pageAnimation} initial="hidden" animate="show" exit="exit">
                <ScrollToTop />

                <div className="headings-container">
                    <StyledHide>
                        <motion.h1 variants={titleAnimation} id="title">Connect</motion.h1>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnimation} id="subTitle">With Me Here &#8595;</motion.h2>
                    </StyledHide>
                </div>

                <StyledIconsContainer variants={titleAnimation}>
                    <motion.a whileHover={iconScaleAnimation} href={this.emailLink} id="gmailLogo">
                        <GmailLogo />
                    </motion.a>
                    <motion.a whileHover={iconScaleAnimation} href={this.twitterLink} target='blank' id="twitterLogo">
                        <TwitterLogo />
                    </motion.a>
                    <motion.a whileHover={iconScaleAnimation} href={this.githubLink} target='blank' id="githubLogo">
                        <GitHubLogo />
                    </motion.a>
                    <motion.a whileHover={iconScaleAnimation} href={this.linkedinLink} target='blank' id="linkedinLogog">
                        <LinkedInLogo />
                    </motion.a>
                </StyledIconsContainer>

            </StyledContactMe>
        )
    }
}

export default ContactMe;