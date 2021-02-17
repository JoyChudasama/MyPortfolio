import styledComponents from 'styled-components';
// Animations
import {motion} from 'framer-motion';


export const StyledProjectDetails = styledComponents(motion.div)`
    color:white;
`

export const StyledProjectHeadline = styledComponents(motion.div)`
    min-height: 90vh;
    padding-top: 10vh;
    position: relative;

    #img-wrapper{
        width:100%;
        height:100%;
        display:flex;
        align-items: center;
        justify-content: center;
        overflow:hidden;


        img{
            padding:2rem;
        }
    }
    

    h1{
        width:100%;
        height:100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 4rem;
        color: #23d997;
    }
`

export const StyledWebstack = styledComponents(motion.div)`
    min-height: 90vh;
    display: flex;
    margin-top: 5rem;
    align-items: start;
    justify-content: space-evenly;
`
export const StyledDescription = styledComponents(motion.div)`
    margin: 0 5rem;
    padding: 2rem 0;
    h4{
        font-weight: lighter;
    }
`

