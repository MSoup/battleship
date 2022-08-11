// Why factory function > class?
// Because an API should be open for extension, but closed for modification.
// Classes allow for modification from the outside; factories do not (need verification)

// ShipFactory(shipLength) -> return a Ship object of length shipLength 
// methods:
// hit(position): marks a position to be hit
// isDestroyed: boolean -> if no hittable parts remain (shipBody is an array of 1's), return True

export const ShipFactory = (shipLength) => {
    // ship is represented as an array of 0's of length shipLength 
    const shipBody = Array.from("0".repeat(shipLength))

    return {
        hit: (position) => {
            // Catch edge cases
            if (position < 0 || position > shipLength-1) {
                throw new Error("Area out of bounds")
            }

            if (shipBody[position] === "1") {
                throw new Error("Area already marked: check positioning logic")
            }

            // no error, position is in bounds and shipBody[position] === 0
            shipBody[position] = "1"

            if (shipBody.indexOf("0") === -1) {
                return "ship destroyed"
            }
        },
        isDestroyed: () => {
            return (shipBody.indexOf("0") === -1)
        }
    }
}
