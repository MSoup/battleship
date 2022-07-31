import './App.css';
import Board from './components/Board'
import GameMenu from './components/GameMenu'

function App() {
  return (
    <div className="App">
      <h1>Battleship MVP</h1>
      <header className="App-header">
        <GameMenu />
      </header>
    </div>
  );
}

export default App;
