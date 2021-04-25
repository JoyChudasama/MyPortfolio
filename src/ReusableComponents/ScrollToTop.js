import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// When link changes, this function makes sure that page starts from top
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(()=>{
        window.scroll({
            top: 0,
            left: 0
        });
    },[pathname]);

    return null
}

export default ScrollToTop;