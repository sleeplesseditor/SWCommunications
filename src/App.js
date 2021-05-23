import * as React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [value, setValue] = React.useState('');
  const channel = new BroadcastChannel('sw-messages');

  channel.addEventListener('message', event => {
    console.log('Received', event.data);
    setValue(event.data)
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to change something here.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>{value}</div>
    </div>
  );
}

export default App;
