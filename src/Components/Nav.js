import React from 'react';

// Style
import {StyledNav} from '../Style/NavStyle';

const Nav = () =>{
    return(
        <StyledNav>
            <h1><a id="logo" href="#">Joy Chudasama</a></h1>
            <ul>
                <li>
                    <a href="">1. AboutMe</a>
                </li>
                <li>
                    <a href="">2. MyProjects</a>
                </li>
                <li>
                    <a href="">3. ContactMe</a>
                </li>
            </ul>
        </StyledNav>
    
    )
}

export default Nav;