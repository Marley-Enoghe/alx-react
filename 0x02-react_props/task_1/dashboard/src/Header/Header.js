import React from "react";
import "./Header.css"
import Holberton_Logo from '../assets/holberton-logo.jpg'

const Header = () =>{
  return (
    <div className="App-header">
      <img src={Holberton_Logo} className="App-logo" alt="logo" />
      <h1>School dashboard</h1>
    </div>
  );
}

export default Header;