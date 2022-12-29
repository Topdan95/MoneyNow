import React from 'react';
import "./Payment.css";

const Payment = () => {
  return (
    <div className="payment back">
      <h2 className="header1">HELLO VICTOR!</h2>
      <p>Add Your Preferred Payment Method</p>
      <div className="choice">
        <div className="methods pay">
            <h5>Choose Your Primary Payment Method</h5>
            <p>Please add your account’s primary payment method which will be used to<br /> 
                pay for your contributions . Don’t worry, you can always change this later</p>
        <h6>Select a Payment Method</h6>
        
        </div>

      </div>
    </div>
  )
}

export default Payment