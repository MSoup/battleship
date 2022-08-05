import { useState } from "react"
import './GameMenu.css'
import Board from "./Board"

export default function GameMenu() {
    // defaults
    const [width, setWidth] = useState(7)
    const [height, setHeight] = useState(7)

    const newGameInit = () => {
        console.log("Init called")
        const width = document.querySelector(".input-width").value
        const height = document.querySelector(".input-height").value

        if ((width > 6 && height > 6)
            & (width < 13 && height < 13)) {
                setWidth(width)
                setHeight(height)
        }
        else {
            console.log("Width and height must both be 7-12 (inclusive) or higher to fit ships")
        }
    }

    return (
        <div className="game-menu-container">
            <button className="start-button" onClick={newGameInit}>New Game</button>
            <div className="input">
                <label htmlFor="width">width</label>
                <input className="input-width" name="width" ></input>
            </div>
            <div className="input">
                <label htmlFor="height">height</label>
                <input className="input-height" name="height" ></input>
            </div>
            <Board width={width} height={height} />
        </div>
      )
}