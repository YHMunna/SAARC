import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <img
          className="header-img"
          src="https://www.saarc-sec.org/images/logot.svg"
          alt=""
        />
      </div>
      <div className="header-content">
        <h1>Raise Fund for Climate Change</h1>
        <h5>
          Day by day the world is going to face a danger of Global Warming! So
          SAARC has to take immidiate actions to save the world.
        </h5>
        <h2>Target Budget: 01 Million USD</h2>
      </div>
    </div>
  );
};

export default Header;
