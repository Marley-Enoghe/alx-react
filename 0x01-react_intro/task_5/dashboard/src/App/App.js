import React from "react";
import Holberton_Logo from "./Holberton_Logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "../utils/utils";

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
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="password"> Password:</label>
        <input type="password" id="password" />
        <button>OK</button>
      </body>
      <footer className="App-footer">
        <hr />
        <p>
          copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}

export default App;
