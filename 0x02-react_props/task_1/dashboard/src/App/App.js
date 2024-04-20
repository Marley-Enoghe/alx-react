import React from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Login from "../Login/Login.js";
import Notifications from "../Notifications/Notifications.js";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
