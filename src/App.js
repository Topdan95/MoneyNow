import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Overview from "./components/Overview/Overview";
import SideBar from "./components/SideBar/SideBar";
import JoinGroup from "./components/JoinGroup/JoinGroup";
import Payment from "./components/Payment/Payment";
import Payout from "./components/Payout/Payout";
import Referral from "./components/Referral/Referral";

import "./App.css";

function App() {
  return (
    <div className="app">
      <SideBar />
      <div className="maincontent">
        <Nav />
        <div>
          <Routes>
            <Route exact path="/" element={<Overview />} />
            <Route exact path="/join-group" element={<JoinGroup />} />
            <Route exact path="/payment" element={<Payment />} />
            <Route exact path="/payout" element={<Payout />} /> 
            <Route exact path="/referral" element={<Referral />} /> 
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
