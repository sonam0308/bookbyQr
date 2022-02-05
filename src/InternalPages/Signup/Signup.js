import React from 'react';
import Header from '../../Component/Header';
import './Signup.css'

const Signup = () => {
  return (
    <>
      <Header/>
      <div style={{textAlign: 'center'}}>
        <h3>
        REGISTER NOW FOR FREE AT BOOKBYQR
        </h3>
      </div>
      <div className="box-form">
        <div className="right">
          <h5>Your Details</h5>
          <div className="inputs">
            <input type="text" placeholder="Name" />
            <br />
            <input type="text" placeholder="Business Name" />
            <br />
            <input type="email" placeholder="Email" />
            <br />
            <input type="website" placeholder="Website" />
            <br />
            <input type="address" placeholder="Address" />
            <br />
            <input type="Phone" placeholder="Phone" />
            <br />
            <input type="tel" placeholder="Phone" />
          </div>
          <br /><br />
          <div className="remember-me--forget-password">
            <label>
              <input type="checkbox" name="item" defaultChecked />
              <span className="text-checkbox">Free Plan</span>
            </label>
            <label>
              <input type="checkbox" name="item" defaultChecked />
              <span className="text-checkbox">Accept Terms of Service</span>
            </label>
          </div>
          <br />
          <button>Sign Up</button>
        </div>
        <div className="left">
          <div className="overlay">

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur et est sed felis aliquet sollicitudin</p>
            <span>
              <img src="https://app.zasta.de/5570835351ccbed5a1f517f68e7ca081.png" />
            </span>
          </div>
        </div>
      </div>
      {/* partial */}

    </>
  )
};

export default Signup;
