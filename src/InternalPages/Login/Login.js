import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Component/Footer';
import Header from '../../Component/Header';
import '../Signup/Signup.css'
const Login = () => {

  const [phone_number, setPhone] = useState('')
  const [otp, setOtp] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Header />
      <div style={{ textAlign: 'center' }}>
        <h3>
          LOGIN TO BOOKBYQR
        </h3>
      </div>
      <div className="box-form">
        <div className="left hidden-xs">
          <div className="overlay-left">

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur et est sed felis aliquet sollicitudin</p>
            <span>
              <img src="https://app.zasta.de/5570835351ccbed5a1f517f68e7ca081.png" />
            </span>
          </div>
        </div>
        <div className="right">
          <div className="inputs">
            <input type="tel" placeholder="Phone"
              name="phone_number" value={phone_number}
              onChange={(e) => { setPhone(e.target.value) }} />
            <br />
            <br/>
            <div style={{display: 'flex'}}>
            <button className="secondary">Send OTP</button>
            <input  className='partion-input' value='0123456' maxLength="4"/>
            </div>
            
          </div>
          <br />
          <div className="remember-me--forget-password">
            <p>Forgot Password?</p>
          </div>
          <Link to="/schedules"><button className='signup-button'>Login</button></Link>
          <div className="new-user">
            New to BookByQr?<Link to="/register"> Signup Now For Free</Link>
          </div>
        </div>
      </div>
      {/* partial */}
      <Footer />
    </>
  );
};

export default Login;
