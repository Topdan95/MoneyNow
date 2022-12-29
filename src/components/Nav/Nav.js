import React from "react";
import profile from "../../Images/profile.svg"
import notification from "../../Images/notification.svg"
import arrowdown from "../../Images/arrowdown.svg"

import "./Nav.css";

const Nav = () => {
  return (
    <div className="navbar">
      <div>
        <img className="icon1" src={notification} alt="notification" />
        <span className="divider"></span>
        <img className="icon2" src={profile} alt="profile" />
        <h5>David Okoye</h5>
        <img className="icon3" src={arrowdown} alt="arrow-down" />
      </div>
    </div>
  );
};

export default Nav;
