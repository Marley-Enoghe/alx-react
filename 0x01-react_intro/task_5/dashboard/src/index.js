import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.js";
import reportWebVitals from "./reportWebVitals";
import Notifications from "./Notifications/Notifications.js";

ReactDOM.render(
  <React.StrictMode>
    <div className="root-notifications">
      <Notifications />
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
