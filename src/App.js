import './App.css';
import Board from './components/Board'
import GameMenu from './components/GameMenu'
import Dropdown from './components/Dropdown'

function App() {
  return (
    <div className="App">
      <Dropdown />
      <h1>Battleship MVP</h1>
        <GameMenu />
    </div>
  );
}

export default App;
