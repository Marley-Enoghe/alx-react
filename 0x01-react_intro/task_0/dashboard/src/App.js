import React from 'react'
import Holberton_Logo from "./Holberton_Logo.jpg";
import './App.css';

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={Holberton_Logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <hr />
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <footer className="App-footer">
        <hr />
        <p>copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
