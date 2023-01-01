import React from "react";
import "./Referral.css";
import invitation from "../../Images/invitation.svg";
import signup from "../../Images/signup.svg";
import gift from "../../Images/gift.svg";
import email from "../../Images/email.svg";
import light from "../../Images/light.svg";

const Referral = () => {
  return (
    <div className="referral back">
      <div className="refer">
        <h2 className="header">Referrals</h2>
        <p>
          Refer your friends to Money<span className="text-blue">Now</span>, if
          they sign up, you enjoy N200.00 on every referrals
        </p>
        <div className="referrals">
          <div className="friends">
            <img className="iv" src={invitation} alt="invitation" />
            <h6>Invite your friends with the referral code</h6>
          </div>
          <div className="friends">
            <img className="sign" src={signup} alt="signup" />
            <h6>They sign up</h6>
          </div>
          <div className="friends">
            <img className="gift" src={gift} alt="gift" />
            <h6>You get N200.00 on every referral</h6>
          </div>
        </div>
        <div className="texxt">
          <h5>Invite your friends</h5>
          <h6>
            Insert your friends’ addresses and send them invitations to join
            Money<span className="text-blue">Now</span>
          </h6>
          <div className="message">
            <input type="text" name="email" placeholder="Email Address" />
            <img className="myy" src={email} alt="email" />
          </div>
        </div>
        <div className="texxt">
          <h5>Share the referral code</h5>
          <h6>
            You can also share your referral code by copying and sending or
            sharing it on your social media Money
            <span className="text-blue">Now</span>
          </h6>
          <div className="test">
          <input type="text" name="email" placeholder="AB0AJr4G" />
          <img className="myyy" src={light} alt="light" />
          </div>
          <div className="performance">
            <button className="view bttns3">View Referral Performance</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
