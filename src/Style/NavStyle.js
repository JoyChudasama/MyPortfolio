import styledComponents from 'styled-components';

export const StyledNav = styledComponents.nav`
    min-height: 10vh;
    display: flex;
    margin:auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #282828;

    a{
        text-decoration: none;
        color: white;
    }
    
    ul{
        display:flex;
        list-style: none;
    }

    #logo{
        font-size: 1.5rem;
        font-family: 'Pacifico', cursive;
        font-weight:lighter;
    }

    li{
        padding-left: 8rem;
        position: relative;
    }
`