import logo from './logo.svg';
import './App.css';
import Button from './components/button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola
        </p>
        <Button/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
