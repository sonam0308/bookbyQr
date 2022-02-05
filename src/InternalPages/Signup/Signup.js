import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Component/Footer';
import Header from '../../Component/Header';
import './Signup.css'

const Signup = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Header/>
      <div style={{textAlign: 'center', marginBottom: '35px'}}>
        <h3>
        REGISTER NOW FOR FREE AT BOOKBYQR
        </h3>
      </div>
      <div className="box-form">
      <div className="left hidden-xs">
          <div className="overlay">

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur et est sed felis aliquet sollicitudin</p>
            <span style={{marginLeft: '20%', marginTop: '20%'}}>
              <img src="https://app.zasta.de/5570835351ccbed5a1f517f68e7ca081.png" />
            </span>
          </div>
        </div>
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
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
              <span className="text-checkbox">Free Plan</span>
            </label>
            <label>
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
              <span className="text-checkbox">Accept Terms of Service</span>
            </label>
          </div>
          <br />
          <button>Sign Up</button>
          <div className="new-user">
            <Link to="/login">Already Registered? Login to BookByQr</Link>
          </div>
        </div>
        
      </div>
      {/* partial */}
      <Footer/>
    </>
  )
};

export default Signup;
