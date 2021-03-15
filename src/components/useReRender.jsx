import useWindowSize from "./useWindowSize";
import { useState, useEffect } from "react";

let switchWidth = window.innerWidth

export default function useReRender() {
    const [trigger, setTrigger] = useState(false);

    const windowWidth = useWindowSize().width

    let width = window.innerWidth

    const handleResize = () => {
        width = window.innerWidth
    }

    const handleTrigger = () =>{
        setTrigger(!trigger)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        if (Math.abs(switchWidth - width) >= 20){
            switchWidth = width
            handleTrigger()
        }
        return () => window.removeEventListener("resize", handleResize);
    }, [windowWidth]);

    return trigger;
}