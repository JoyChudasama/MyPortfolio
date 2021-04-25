import styledComponents from 'styled-components';
// Animations
import { motion } from 'framer-motion';

export const StyledContactMe = styledComponents(motion.div)`
    text-align: center;
    
    #title{
        font-size: 20em;
        color: #23D997;
        opacity: 50%;
    }

    #subTitle{
        margin: 5rem 0rem;
        font-size: 3em;
        color: #fff;
        opacity: 80%;div
    }
`
export const StyledHide = styledComponents.div`
    overflow: hidden;
`

export const StyledIconsContainer = styledComponents(motion.div)`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 5rem 0rem;
`