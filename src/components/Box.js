import { useState } from "react";

export default function Box(props) {
    const [clicked, setClicked] = useState(false);
    
    const handleClick = (e) => {
        if (clicked) {
            console.log("Already clicked this box")
            return
        }
        setClicked(true)
        console.log(e)


    }
    
    return <div 
        onClick={handleClick} 
        key={props.i + "-" + props.j} 
        className={"box " + props.i + "-" + props.j}>
        </div>
}
