import React from 'react';
import "./Payment.css";
import bank from "../../Images/bank.svg";
import card from "../../Images/card.svg";

const Payment = () => {
  return (
    <div className="payment back">
        <div className="head">
            <h2>HELLO VICTOR!</h2>
            <p>Add Your Preferred Payment Method</p>
        </div>
      <div className="choice">
        <div className="methods pay">
            <h5>Choose Your Primary Payment Method</h5>
            <p>Please add your account’s primary payment method which will be used to<br /> 
                pay for your contributions . Don’t worry, you can always change this later</p>
        <h6>Select a Payment Method</h6>
        <div className="box">
        <img className="iconss" src={bank} alt="bank" />
        <p>Bank account</p>
        <h6>Pay via bank transfer</h6>
        <div className="bttns">
            <button className="add">Add Bank</button>
        </div>
        </div>
        <div className="box1">
        <img className="iconss1" src={card} alt="card" />
        <p>Credit or Debit Card</p>
        <h6>Pay via card</h6>
        <div className="bttns1">
            <button className="add1">Add Card</button>
        </div>
        </div>
        <div className="bttns2">
            <button className="ads">Go Back</button>
            <button className="adds">Continue</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Payment