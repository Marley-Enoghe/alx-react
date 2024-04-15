import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from "../utils/utils";

const Footer = () =>{
  <footer className="App-footer">
    <hr />
    <p>
      copyright {getFullYear()} - {getFooterCopy(true)}
    </p>
  </footer>;
}

export default Footer;