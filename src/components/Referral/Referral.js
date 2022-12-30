import React from 'react';
import "./Referral.css";
import invitation from "../../Images/invitation.svg";
import signup from "../../Images/signup.svg";
import gift from "../../Images/gift.svg";

const Referral = () => {
  return (
    <div className="referral back">
        <div className="refer">
            <h2>Referrals</h2>
            <p>Refer your friends to  Money<span>Now</span>, if they sign up, you  enjoy N200.00 on every referrals</p>
        <div className="referrals">
        <div className="invite friends">
            <img className="iv" src={invitation} alt="invitation" />
            <h6>Invite your friends<br/>with the referral code</h6>
        </div>
        <div className="they friends">
            <img className="sign" src={signup} alt="signup" />
            <h6>They sign up</h6>
        </div>
        <div className="get friends">
            <img className="gift" src={gift} alt="gift" />
            <h6>You get N200.00<br/>on every referral</h6>
        </div>
        </div>
        <div className="texxt">
        <h5>Invite your friends</h5>
        <h6>Insert your friends’ addresses and send them invitations to join Money<span>Now</span></h6>
        <input type="text" Email address/>

        </div>
        </div>
        
    </div>
  )
}

export default Referral