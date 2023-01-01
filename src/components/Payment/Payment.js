import React from "react";
import "./Payment.css";
import bank from "../../Images/bank.svg";
import card from "../../Images/card.svg";

const Payment = () => {
  return (
    <div className="payment back">
      <div className="head">
        <h2 className="header">HELLO VICTOR!</h2>
        <p>Add Your Preferred Payment Method</p>
      </div>
      <div className="choice">
        <div className="methods pay">
          <h5>Choose Your Primary Payment Method</h5>
          <p>
            Please add your account’s primary payment method which will be used
            to pay for your contributions . Don’t worry, you can always change
            this later
          </p>
          <h6>Select a Payment Method</h6>
          <div className="box">
            <div className="contner">
              <img className="iconss" src={bank} alt="bank" />
              <div>
                <p>Bank account</p>
                <h6>Pay via bank transfer</h6>
              </div>
            </div>

            <button className="add butn btn-pry">Add Bank</button>
          </div>
          <div className="box">
            <div className="contner">
              <img className="iconss" src={card} alt="card" />
              <div>
                <p>Credit or Debit Card</p>
                <h6>Pay via card</h6>
              </div>
            </div>

            <button className="add1 butn btn-pry">Add Card</button>
          </div>
          <div className="bttns2">
            <button className="ads butn btn-white">Go Back</button>
            <button className="adds butn btn-pry">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
