import React from "react";
import "./SideBar.css";
import home from "../../Images/home.svg"
import group from "../../Images/lefticon.svg"
import atm from "../../Images/atm.svg"
import more from "../../Images/more.svg"
import referral from "../../Images/referral.svg"
import logout from "../../Images/logout.svg"

import logo from "../../Images/moneylogo.svg";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div>
        <img src={logo} alt="Moneynow" className="logo" />
        <div className="sidenav">
          <ul>
            <li className="sidenav_active"><Link  to="/"><img src={home} alt="home" />Overview</Link></li>
            <li><Link  to="/join-group"><img src={group} alt="group" />Join Group </Link></li>
            <li><Link  to="/payment"><img src={atm} alt="atm" />Payment</Link></li>
            <li><Link  to="/referral"><img src={referral} alt="referral" />Referral</Link></li>
            <li className="more"><Link  to="#"><img src={more} alt="more" />More</Link></li>
          </ul>
        </div>
      </div>

      <h6 className="signout"><img src={logout} alt="logout" />Sign out</h6>
    </div>  
  );
};

export default SideBar;



