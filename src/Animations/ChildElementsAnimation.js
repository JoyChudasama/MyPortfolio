export const titleAnimation = {
    hidden: { y: 300 },
    show: {
        y: 0,
        transition: { duration: 0.75, ease: "easeOut" }
    }
}

export const textFadeAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: 0.75, ease: "easeOut" }
    }
}

export const imgAnimation = {
    hidden: { scale: 1.5, opacity: 0 },
    show: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.75, ease: "easeOut" }
    }
}

export const lineAnimation = {
    hidden: { width: '0%' },
    show: {
        width: '100%',
        transition: { duration: 1 }
    }
}

export const overlaySliderAnimation = {
    hidden: { x: '-130%', skew: '45deg' },
    show: {
        x: '100%',
        skew: '0deg',
        transition: { ease: 'easeOut', duration: 1 }
    }
}


export const scrollRevealAnimation = {
    hidden: {
        opacity: 0,
        scale: 1.2,
        transition: { duration: 0.5 }
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 }
    }
}

export const zeroToFullWidthAnimation = {
    hidden: {
        opacity: 0,
        width: '150%',
        transition: { duration: 0.5 }
    },
    show: {
        opacity: 1,
        width: '100%',
        transition: { duration: 0.5 }
    }
}

export const spinAnimation = {
    hidden: {
        opacity: 0,
        rotate: -90,
    },
    show: {
        opacity: 1,
        rotate: 0,
        transition: { duration: 0.7 }
    }
}

export const iconFadeAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" }
    }
}

export const iconScaleAnimation = {
    scale: 2, 
    rotate: 360 ,
    transition:  {duration: 0.5}
}

export const linkediniconAnimation = {
    
    scale: 2, 
    rotate: 360 ,
    transition:  {duration: 0.5},
}