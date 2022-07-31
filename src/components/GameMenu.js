import { useState } from "react"
import './GameMenu.css'
import Board from "./Board"

export default function GameMenu() {
    // defaults
    const [width, setWidth] = useState(7)
    const [height, setHeight] = useState(7)

    const newGameInit = (x, y) => {
        console.log("Init called")

    }

    return (
        <div className="game-menu-container">
            <button className="start-button" onClick={newGameInit}>New Game</button>
            <div className="input">
                <label htmlFor="width">width</label>
                <input name="width" onChange={(e)=> setWidth(e.target.value)}></input>
            </div>
            <div className="input">
                <label htmlFor="height">height</label>
                <input name="height" onChange={(e)=> setHeight(e.target.value)}></input>
            </div>
            <Board width={width} height={height} />
        </div>
      )
}