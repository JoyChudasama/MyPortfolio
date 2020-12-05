import React from 'react';

// Style
import {StyledFAQ} from '../Style/FAQSectionStyle';

const FAQSection = () => {
    return(
        <StyledFAQ>

            <h2>Any Question? <span>FAQ</span></h2>
            <div className="question">
                <h4>What and Where Joy Studied?</h4>
                <div className="answer">
                    <p>Joy has Computer Programming Diploma from Lambton College at Toronto Campus; 
                        he Graduated in December 2019.</p>
                </div>
                <div className="faq-line"></div>
            </div>

            <div className="question">
                <h4>What are Joy's Interests or Hobbies?</h4>
                <div className="answer">
                    <p>Well, there are bunch of things that Joy likes to do apart from Programming and it includes Sports(Cricket, Basketball,
                        Bowling, Pool), Reading, Space Exploration, Playing FPS Games and last but not least Watching <span>FRIENDS</span> over 
                        and over again.</p>
                </div>
                <div className="faq-line"></div>
            </div>

            <div className="question">
                <h4>What is Joy Learning Right Now?</h4>
                <div className="answer">
                    <p>Currently, Joy is focusing on some his Projects but once they are done he'll back to learning Neaural Networks or
                        Some New JS Frameworks.</p>
                </div>
                <div className="faq-line"></div>
            </div>

        </StyledFAQ>

    )
}

export default FAQSection;