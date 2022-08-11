# Battleship

Battleship is a Player vs AI Game where the player and AI take turns guessing the locations of each others' ships. The player who guesses (hits) all the opponent's ships first wins.  
## UI Layout  
![01-onLoad.png](./src/assets/01-onLoad.png)
The page consists of two main components  
- The Board  
    - The board is a 7x7 grid for ships to be placed into  
- The Ship placement area  
    - The ship placement area contains a render of all the available ships to be placed   
## Game Flow  
On Page Load  
- Player is presented with an empty 7x7 grid board  
- Ships are presented below the board and are dragged to the board by the player  
- When all ships are dragged out of this area and onto the board, a "start game" button appears in this area
![02-onReady.png](./src/assets/02-onReady.png)
- Until "start game" is pressed, the ships can be rearranged on the board, and their orientation can be changed (default horizontal, vertical also possible)  

On "Start Game"  
- Pressing the start game button will lock the ships into place (they cannot be moved further) and allows the player to make the first move (see game flow)  
- When the player makes a move (as defined by pressing on a grid cell), the cell gets marked as "hit" and cannot be selected again  
- If the opponent's ship is in this cell, the opponent's ship is considered "hit"  
- If a ship has been hit on every cell it aligns with, it is considered sunk  
- If all ships have been sunk, the game ends  
## Objects  
Ships  
- Ships take up 1 grid cell in width and have lengths determined by the ship's size:  
    - Small: 3 cells  
    - Medium: 4 cells  
    - Large: 5 cells  
- There are 2 small, 2 medium, and 1 large ship  
- Board  
	- The board is a grid of 7x7 cells

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
