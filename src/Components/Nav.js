import React from 'react';
import {Link} from 'react-router-dom';
// Style
import {StyledNav} from '../Style/NavStyle';


const Nav = () =>{

    return(
        <StyledNav>
            <h1 ><Link id="logo" to="/">Joy Chudasama</Link></h1>
            <ul>
                <li>
                    <Link to="/">About Me</Link>
                </li>
                <li>
                    <Link to="/my-projects">My Projects</Link>
                </li>
                <li>
                    <Link to="/contact-joy">Contact Me</Link>
                </li>
            </ul>
        </StyledNav>
    
    )
}

export default Nav;