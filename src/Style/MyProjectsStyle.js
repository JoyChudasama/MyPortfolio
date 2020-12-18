import styledComponents from 'styled-components';
// Framer Motion
import {motion} from 'framer-motion';

export const StyledWork = styledComponents(motion.div)`
    background-color: #fff;
    min-height:100vh;
    overflow:hidden;
    padding: 5rem 10rem;

    h2{
        padding: 1rem 0rem;

    }
`

export const StyledProjects = styledComponents(motion.div)`
    padding-bottom: 10rem;

    .line{
        height: 0.5rem;
        background: #23dd97;
        margin-bottom: 3rem;
    }

    img{
        width: 100%;
        height: 75vh;
        object-fit: cover;
    }
`

export const StyledHide = styledComponents(motion.div)`
    overflow: hidden;
`

export const StyledFrame1 = styledComponents(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`

export const StyledFrame2 = styledComponents(StyledFrame1)`
    background: #ff8ebf;
`
export const StyledFrame3 = styledComponents(StyledFrame1)`
    background: #8ed2ff;
`
export const StyledFrame4 = styledComponents(StyledFrame1)`
    background: #8effa0;
`