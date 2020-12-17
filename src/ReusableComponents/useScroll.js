// Use Animation
import {useAnimation} from 'framer-motion';
// Intersection Observer
import {useInView} from 'react-intersection-observer';

export const useScroll = () => {
    const controls = useAnimation();
    const [elements, view] = useInView({threshold : 0.3})

    if(view){
        controls.start('show')
    }else{
        controls.start('hidden')
    }

    return [elements, controls]
}