import introImg from './introImg.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Trial</h1>
        <img src={introImg} className="App-logo" alt="logo" />
        <span>Practice Purpose</span>
        <span>Contac me</span>

      </header>
    </div>
  );
}

export default App;
