import { useState, useEffect } from "react";
const screen_sm = 320;
const screen_md = 640;
const screen_lg = 990;
const screen_xl = 991; 

export default function useResize (){
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = (e) => {
            setWidth(event.target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return() => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return{
        width,
        isScreenSm: width <= screen_sm,
        isScreenMm: width <= screen_md,
        isScreenLg: width <= screen_lg,
        isScreenXl: width >= screen_xl,
    }
}
