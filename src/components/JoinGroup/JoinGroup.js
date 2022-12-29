import React from "react";
import "./JoinGroup.css";

const JoinGroup = () => {
  return (
    <div className="joingroup back">
      <h2 className="header">Join Group</h2>
      <h5 className="text">
        Explore any of our available groups to choose the one that suits your
        goal
      </h5>
      <div className="groups">
        <div className="silver groupp">
          <h2>SILVER GROUP</h2>
          <ul>
            <li>Each member pays: N10,000 monthly for savings duration</li>
            <li>Savings Target: N1,000,000</li>
            <li>Savings Duration: 5 months</li>
          </ul>
          <input type="range" />
          <p>9 members remaining</p>
          <button className="btn">JOIN</button>
        </div>
        <div className="gold groupp">
          <h2>GOLD GROUP</h2>
          <ul>
            <li>Each member pays: N100,000 monthly for savings duration</li>
            <li>Savings Target: N5,000,000</li>
            <li>Savings Duration: 5 months</li>
          </ul>
          <input type="range" />
          <p>4 members remaining</p>
          <button className="btn">JOIN</button>
        </div>
        <div className="platinum groupp">
          <h2>PLATINUM GROUP</h2>
          <ul>
            <li>Each member pays: N200,000 monthly for savings duration</li>
            <li>Savings Target: N5,000,000</li>
            <li>Savings Duration: 5 months</li>
          </ul>
          <input type="range" />
          <p>3 members remaining</p>
          <button className="btn">JOIN</button>
        </div>
      </div>
    </div>
  );
};

export default JoinGroup;
