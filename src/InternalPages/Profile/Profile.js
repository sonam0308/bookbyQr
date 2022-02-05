import React from 'react';
import Footer from '../../Component/Footer';
import Header from '../../Component/Header';
import './Profile.css'

const Profile = () => {
    return (
        <>
            <Header />
            <h2 className='h2-tag'>Account Info</h2>
            <div className='container box'>
                <div className='row'>
                    <div className='col-md-4 col-lg-3 col-sm-2 col-xs-6'>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <h5>Name:</h5>
                            </div>
                            <div className='p-tag'>
                                <p>Sonam Jha</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-lg-5 col-sm-2 col-xs-12'>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <h5>Business Name:</h5>
                            </div>
                            <div className='p-tag'>
                                <p>ContriverTech </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-lg-4 col-sm-2 col-xs-12'>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <h5>Email:</h5>
                            </div>
                            <div className='p-tag'>
                                <p>sonam43jha@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4 col-lg-3 col-sm-2 col-xs-12'>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <h5>Phone:</h5>
                            </div>
                            <div className='p-tag'>
                                <p>+912 1223456789</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-lg-5 col-sm-2 col-xs-12'>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <h5>Address:</h5>
                            </div>
                            <div className='p-tag'>
                                <p>
                                    605,RBI EMPLOYEES SHANTI,S.C ROAD,DAHANUKAR WADI,KANDIVALI(W),MUMBAI-67,MAHARAHSTRA
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-lg-4 col-sm-2 col-xs-12'>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <h5>Website:</h5>
                            </div>
                            <div className='p-tag'>
                                <p>contrivertech.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4 col-lg-3 col-sm-2 col-xs-12'>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <h5>Plan:</h5>
                            </div>
                            <div className='p-tag'>
                                <p>Free</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-lg-5 col-sm-2 col-xs-12'>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <h5>Receive Promotion Mails:</h5>
                            </div>
                            <div className='p-tag'>
                            <input type="checkbox" id="vehicle12" name="vehicle12" value="Bike"/>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-lg-4 col-sm-2 col-xs-12'>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <h5>Receive Newsletter:</h5>
                            </div>
                            <div className='p-tag'>
                            <input type="checkbox" id="vehicle12" name="vehicle12" value="Bike"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4 col-lg-3 col-sm-2 col-xs-12'>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <h5>Member Since:</h5>
                            </div>
                            <div className='p-tag'>
                                <p>5 Feb 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-lg-5 col-sm-2 col-xs-12'>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <h5>Your Personal Link:</h5>
                            </div>
                            <div className='p-tag'>
                                <p>
                                    https://bookbyqr.com/in/rRZ183
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='vertical-center'>
                    <button className='edit-btn'>Edit</button>
                    <button className='delete-btn'>Delete</button>
                </div>
            <Footer />
        </>
    )
};

export default Profile;
