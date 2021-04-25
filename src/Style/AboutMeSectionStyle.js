// General Styled 
import {StyledButton, StyledImage} from '../Style/BaseStyle';
// Styled Components
import styledComponents from 'styled-components';

export const StyleButton = styledComponents(StyledButton)`
    margin-top:2rem;

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
`
export const StyleddImage = styledComponents(StyledImage)`
    margin-top:-1.5rem;
    
`

export const StyledHide = styledComponents.div`
    overflow: hidden;
`