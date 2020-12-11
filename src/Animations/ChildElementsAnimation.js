export const titleAnimation = {
    hidden : {y: 200},
    show :{
        y:0,
        transition : {duration: 0.75, ease:"easeOut"}
    }
}

export const textFadeAnimation = {
    hidden: {opacity:0},
    show : {
        opacity:1,
        transition: {duration: 1, ease:"easeOut"}
    }
} 

export const imgAnimation = {
    hidden: {scale: 1.5, opacity:0},
    show: {
        scale: 1,
        opacity: 1,
        transition : {duration: 0.7, ease: "easeOut"}
    }
}