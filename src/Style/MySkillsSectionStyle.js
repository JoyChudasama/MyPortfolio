// Styled Components
import styledComponents from 'styled-components';

//General Style
import {StyledDescription} from './BaseStyle';

export const StyledSkills = styledComponents(StyledDescription)`
    h2{
        padding:5rem 10rem;
        color:white;
    }

    p{
        padding: 2rem 0rem 4rem 0rem;
    }
`

export const StyledCards =styledComponents.div`
    
    width:90vw;
    position:relative;
    left:50%;
    transform: translateX(-50%);
    display:flex;
    flex-wrap:wrap;
    justify-content: space-evenly;
    padding:2rem;
`

export const StyleCard = styledComponents.div`
postion:relative;
min-width:25%;
height:300px;
transform-style: preserve-3d;
text-align:center;
margin-left:5rem;
margin-bottom:3rem;

h3{
    font-size:1.5rem;
}

.icon, p{
    position: absolute;
    top:0;
    left:0;
    min-width:100%;
    height:100%;
    transfrom-style: preserve-3d;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    padding:0 1rem;
    backface-visibility:hidden;
    transition: 1s ease-in-out;
    transform:perspective(500px) rotateY(0deg);
    background-color:#141414;
    border-radius: 50px;
}

p{
    color: #23d997;
    transform:perspective(500px) rotateY(180deg);
    font-size:2rem;
    transform:perspective(500px) rotateZ(150px);
}

&:hover{
    .icon{
        transform:perspective(500px) rotateY(180deg);
    }
    p{
        transform:perspective(500px) rotateY(360deg);
        transform:perspective(-500px) translateZ(50px);
    }
}
`