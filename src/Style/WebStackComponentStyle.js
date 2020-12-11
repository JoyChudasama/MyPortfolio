import styledComponents from 'styled-components';

export const StyledWebstackComponent = styledComponents.div`
    padding:0 3rem;
    h3{
        font-size: 9rem;
        color:#6C757D;
        opacity: 50%;
    }

    .lists{
        margin-top:3rem;
        ul{
            list-style: none;
            li{ 
                display:flex;
                align-items: center;
                justify-content: center;
                font-size: 3rem;
                padding: 1rem 0;
                color: #40BAD5;
            }
        }
    }

    .line{
        width:30%;
        height: 0.2rem;
        background: #23d997;
        margin-top: 1rem;
    }
`