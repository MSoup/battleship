import { useState } from "react";

export default function Box(props) {
    const [clicked, setClicked] = useState(false);
    
    const handleClick = (e) => {
        if (clicked) {
            console.log("Already clicked this box")
            return
        }
        setClicked(true)
    }
    
    return <div 
        onClick={handleClick} 
        className={"box " + props.i + "-" + props.j}>
        </div>
}
