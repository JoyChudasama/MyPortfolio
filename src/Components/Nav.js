import React from 'react';
import {Link} from 'react-router-dom';
// Style
import {StyledNav} from '../Style/NavStyle';

const Nav = () =>{
    return(
        <StyledNav>
            <h1><Link id="logo" to="/">Joy Chudasama</Link></h1>
            <ul>
                <li>
                    <Link to="/">1. AboutMe</Link>
                </li>
                <li>
                    <Link to="/my-projects">2. MyProjects</Link>
                </li>
                <li>
                    <Link to="/contact-joy">3. ContactMe</Link>
                </li>
            </ul>
        </StyledNav>
    
    )
}

export default Nav;