class Board {
    constructor(x, y) {
        this.x = x
        this.y = y

        this.board = []

        for (let i = 0; i < this.x; i++) {
            let rows = []
            for (let j = 0; j < this.y; j++) {
                rows.push(
                    {
                        occupied: false, 
                        location: [i,j]
                    })
            }
            this.board.push(rows)
        }
    }

    showBoard() {
        // console.dir(board.board, { depth: null })
        let row;
        for (let i = 0; i < this.board.length; i++) {
            row = this.board[i]
            for (let cell of row) {
                process.stdout.write(JSON.stringify(cell.location))
            }
            console.log("")
        }
    }


    // ship: Ship, startCoordinate: Array[int,int], endCoordinate: Array[int,int]
    placeShip(ship, startCoordinate, endCoordinate) {
        // validate inputs
        if (!(ship && startCoordinate && endCoordinate)) {
            throw new Error("Requires 3 parameters: Ship, startCoordinate, endCoordinate")
        }

        // validate boundaries
        if (startCoordinate[0] > this.x ||
            endCoordinate[0] > this.x ||
            startCoordinate[0] < 0 ||
            endCoordinate[0] < 0 ||
            startCoordinate[1] > this.y || 
            endCoordinate[1] > this.y ||
            startCoordinate[1] < 0 ||
            endCoordinate[1] < 0) {

            throw new Error("Out of bounds placement attempted")
        }

        // validate direction
        if (startCoordinate[0] !== endCoordinate[0] || startCoordinate[1] !== endCoordinate[1]) {
            throw new Error("Must place vertically or horizontally")
        }

        let shipLength = ship.getLength()

        if (startCoordinate[0] === endCoordinate[0]) {
            // X coordinates are the same, place ship horizontally
            while (shipLength > 0) {
                
            }
        }
        // check ship size matches end and start
        
    }

}

const board = new Board(5,5)
board.showBoard()