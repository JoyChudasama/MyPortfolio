import styledComponents from 'styled-components';

export const StyledWork = styledComponents.div`
    min-height:100vh;
    overflow:hidden;
    padding: 5rem 10rem;

    h2{
        padding: 1rem 0rem;

    }
`

export const StyledProjects = styledComponents.div`
    padding-bottom: 10rem;

    .line{
        height: 0.5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }

    img{
        width: 100%;
        height: 75vh;
        object-fit: cover;
    }
`