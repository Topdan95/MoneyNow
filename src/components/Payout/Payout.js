import React from "react";
import "./Payout.css";

const Payout = () => {
  return (
    <div className="method back">
      <div className="head">
        <h2 className="header">HELLO VICTOR!</h2>
        <p>Add Your Payment Method</p>
      </div>
      <div className="account">
        <div className="select">
        <h5>Add Your Bank Account!</h5>
        <p>Please add your account’s primary payout method 
            which will  be used to process your withdrawal 
        </p>
        <div className="boxx">
            <div className="container">
            <input type="text" name="email" placeholder="Account Number" />
            </div>
        </div>
        <div className="bttns22">
            <button className="ads buttn btn-whites">Go Back</button>
            <button className="adds buttn btn-prys">Next</button>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Payout