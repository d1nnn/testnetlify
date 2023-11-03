import logo from './logo.svg';
import './App.css';

function App() {
  async function fetchData(e) {
    const response = await fetch('/api');
    const data = await response.json();
    e.target.innerHTML = data.message;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          not changing <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={fetchData}>Click me</button>
      </header>
    </div>
  );
}

export default App;
