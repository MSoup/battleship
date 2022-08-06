import Box from "./Box"
import "./Board.css"

export default function Board({height, width}) {
// pass node object function and handle click
    let container = []
    for (let i = 0; i < height; i++) {
        let rows = []
        for (let j = 0; j < width; j++) {
            rows.push(<Box key={i+"-"+j} i={i} j={j}/>)
        }
        container.push(<div key={"row-" + i} className={"row " + i}>{rows}</div>)
    }

    return <div className="board-container">{container}</div>
}