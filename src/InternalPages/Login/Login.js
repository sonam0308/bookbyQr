import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Component/Footer';
import Header from '../../Component/Header';
import '../Signup/Signup.css'
const Login = () => {
  return (
    <>
      <Header />
      <div style={{ textAlign: 'center' }}>
        <h3>
          LOGIN TO BOOKBYQR
        </h3>
      </div>
      <div className="box-form">
        <div className="left">
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
            <input type="email" placeholder="Email" />
            <br />
            <input type="password" placeholder="Password" />
            <br />
          </div>
          <br /><br />
          <div className="remember-me--forget-password">
            <p>Forget Password</p>
          </div>
          {/* <button>Login</button> */}
          <div className="new-user">
            <Link to="/register">New to BookByQr? Signup Now For Free</Link>
          </div>
        </div>
      </div>
      {/* partial */}
      <Footer />
    </>
  );
};

export default Login;
