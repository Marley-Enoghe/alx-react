import React from "react";
import "./Notifications.css";
import image from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";

const Notifications = () => {
  return (
    <div className="Notifications">
      <p
        style={{
          display: "inline",
          marginRight: "80%"
        }}
      >
        Here is the list of notifications
      </p>
      <button
        onClick={console.log("Close button has been clicked")}
        aria-label="Close"
      >
        <img src={image} alt="close-img" />
      </button>
      <ul>
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li
          data="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
};

export default Notifications;
