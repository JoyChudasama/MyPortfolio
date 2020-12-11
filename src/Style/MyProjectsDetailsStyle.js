import styledComponents from 'styled-components';

export const StyledProjectDetails = styledComponents.div`
    color:white;
`

export const StyledProjectHeadline = styledComponents.div`
    min-height: 90vh;
    padding-top: 30vh;
    position: relative;

    h2{
        position:absolute;
        top:10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }

    img{
        width:100%;
        height : 100vh;
        object-fit: cover;
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

export const StyledWebstack = styledComponents.div`
    min-height: 90vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: start;
    justify-content: space-evenly;
`
export const StyledSecondaryImg = styledComponents.div`
    width: 100%;
    height: 100vh;
    object-fit: cover;
`
export const StyledDescription = styledComponents.div`
    margin: 15rem 10rem 0 10rem;
    padding: 2rem 0;
    h4{
        font-weight: lighter;
    }
`
