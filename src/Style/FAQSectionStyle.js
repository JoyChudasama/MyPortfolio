// Styled Components
import styledComponents from 'styled-components';
//General Style
import {StyledAbout} from './BaseStyle';

export const StyledFAQ = styledComponents(StyledAbout)`
    display:block;

    h2{
        padding-bottom:2rem;
        font-weight:lighter;

        span{
            display:block;
        }
    }

    .faq-line{
        background: #cccccc;
        height:0.2rem;
        margin: 2rem 0rem;
        width:100%;
    }

    .question{
        padding: 3rem 0;
        cursor:pointer;
    }

    .answer{
        padding: 2rem 0;

        p{
            padding: 1rem 0;
        }
    }
`