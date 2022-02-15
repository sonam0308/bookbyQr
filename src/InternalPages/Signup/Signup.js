import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Component/Footer';
import Header from '../../Component/Header';
import './Signup.css'

const Signup = () => {

  const [name, setName] = useState('')
  const [business_name, setBusinessName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [website, setWebsite] = useState('')
  const [address, setAddress] = useState('')
  const [phone_number, setPhone] = useState('')
  const [freePlan, setFreePlan] = useState(false)
  const [termsOfService, setTermService] = useState(false)
  const [otp, setOtp] = useState('')

  const onFormSubmit = async (e) => {
    console.log('working');
    e.preventDefault();
    try {
      let body = {
        name: name,
        business_name: business_name,
        email: email,
        password: password,
        website: website,
        address: address,
        phone_number: phone_number,
        freePlan: freePlan,
        termsOfService: termsOfService
      }
      let response = await axios.post(process.env.REACT_APP_BASE_URL + '/sendRegisterOtpURL', body, { mode: 'cors' })
        .then((res) => res.json())
        .then((resp) => {
          console.log(resp);
        })
      console.log(response);
      setName('')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Header />
      <div style={{ textAlign: 'center', marginBottom: '35px' }}>
        <h3>
          REGISTER NOW FOR FREE AT BOOKBYQR
        </h3>
      </div>
      <div className="box-form">
        <div className="left hidden-xs">
          <div className="overlay">

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur et est sed felis aliquet sollicitudin</p>
            <span style={{ marginLeft: '20%', marginTop: '20%' }}>
              <img src="https://app.zasta.de/5570835351ccbed5a1f517f68e7ca081.png" />
            </span>
          </div>
        </div>
        <div className="right">
          <h5>Your Details</h5>
          <form onSubmit={onFormSubmit}>
            <div className="inputs">
              <input type="text" placeholder="Name"
                name="name" value={name}
                onChange={(e) => { setName(e.target.value) }} />
              <br />
              <input type="text" placeholder="Business Name"
                name="business_name" value={business_name}
                onChange={(e) => { setBusinessName(e.target.value) }} />
              <br />
              <input type="email" placeholder="Email"
                name="email" value={email}
                onChange={(e) => { setEmail(e.target.value) }} />
              <br />
              <input type="website" placeholder="Website"
                name="website" value={website}
                onChange={(e) => { setWebsite(e.target.value) }} />
              <br />
              <input type="address" placeholder="Address"
                name="address" value={address}
                onChange={(e) => { setAddress(e.target.value) }} />
              <br />
              {/* <input type="password" placeholder="Password"
                name="password" value={password}
                onChange={(e) => { setPassword(e.target.value) }} />
              <br /> */}
              <input type="tel" placeholder="Phone"
                name="phone_number" value={phone_number}
                onChange={(e) => { setPhone(e.target.value) }} />
            </div>
            <br />
            <button className="secondary">Send OTP</button>
            <br />
            <div className="remember-me--forget-password">
              <label>
                <input type="checkbox"
                  checked={freePlan}
                  onChange={(e) => { setFreePlan(e.target.checked) }}
                />
                <span className="text-checkbox">Free Plan</span>
              </label>
              <label>
                <input type="checkbox"
                  checked={termsOfService}
                  onChange={(e) => { setTermService(e.target.checked) }}
                />
                <span className="text-checkbox">Accept Terms of Service</span>
              </label>
            </div>
          
          <br />
          <button type='submit' className='signup-button'>Sign Up</button>
          <div className="new-user">
            <Link to="/login">Already Registered? Login to BookByQr</Link>
          </div>
          </form>
        </div>

      </div>
      {/* partial */}
      <Footer />
    </>
  )
};

export default Signup;
