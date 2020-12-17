import React, {useState} from 'react';
// Style
import {StyledFAQ} from '../Style/FAQSectionStyle';
// Toggle Component
import Toggle from '../ReusableComponents/Toggle'
// Framer Motion, AnimateSharedLayout
import {motion} from 'framer-motion';
import {AnimateSharedLayout} from 'framer-motion';
import {textFadeAnimation} from '../Animations/ChildElementsAnimation';

const FAQSection = () => {
    

    return(
        <StyledFAQ>
            <h2>Any Question? <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle question="What and Where Joy Studied?">
                    <motion.div variants={textFadeAnimation} layout className="answer">
                        <p>Joy has Computer Programming Diploma from Lambton College at Toronto Campus; 
                            he Graduated in December 2019.</p>
                    </motion.div>
                </Toggle>
                
                <Toggle question="What are Joy's Interests or Hobbies?">
                        <motion.div variants={textFadeAnimation} layout className="answer">
                            <p>Well, there are bunch of things that Joy likes to do apart from Programming and it includes Sports(Cricket, Basketball,
                                Bowling, Pool), Reading, Space Exploration, Playing FPS Games and last but not least Watching <span>FRIENDS</span> over 
                                and over again.</p>
                        </motion.div>
                </Toggle>

                <Toggle question="What is Joy Learning Right Now?">   
                        <motion.div variants={textFadeAnimation} layout className="answer">
                            <p>Currently, Joy is focusing on some of his Projects but once they are done he'll back to learning Neaural Networks or
                                Some New JS Frameworks.</p>
                        </motion.div>
                </Toggle>
            </AnimateSharedLayout>
        </StyledFAQ>

    )
}

export default FAQSection;