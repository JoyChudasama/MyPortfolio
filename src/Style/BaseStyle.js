import styledComponents from 'styled-components';


export const StyledAbout = styledComponents.div`
    min-height : 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`

export const StyledDescription = styledComponents.div`
    flex: 1;
    

    h2{
        font-weight: lighter;
    }
`

export const StyledImage = styledComponents.div`
    flex:0.9;

    img{
        width:90%;
        height: 80vh;
        object-fit:cover;
        margin-left: 2rem;
        border-radius:50px;
    }
`
export const StyledButton = styledComponents.button`
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    
    &:hover{
        background-color: #23d997;
        color:black;
        }
    }
`
