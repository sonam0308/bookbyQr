import React from 'react';
import './AllAppointments.css'
import Footer from '../../Component/Footer';
import Header from '../../Component/Header';

const AllAppointments = () => {
    return (
        <>
            <Header />
            <h2 className='h2-tag'>Account Info</h2>
            <div className='container appointment-box'>
                <div>
                    <form className='appointment-form'>
                        <input type="text" placeholder='Scheduler Name' className='appointment-input' />
                    </form>
                </div>
                <div className='row' style={{ marginTop: '50px' }}>
                    <div className='col-md-7 col-lg-7 col-sm-1'>
                        <div style={{ display: 'flex' }}>
                            <p>Choose Date: </p>
                            <input type='date' placeholder='27/02/2020' /> &nbsp; to &nbsp; <input type='date' placeholder='27/02/2020' />
                        </div>
                    </div>
                    <div className='col-md-2 col-lg-2 col-sm-1'>
                        <div style={{ display: 'flex' }}>
                            <p>Parallel Slots:</p> &nbsp;
                            <input type='text' placeholder='One' className='input-style' />
                        </div>
                    </div>
                    <div className='col-md-2 col-lg-2 col-sm-1'>
                        <div style={{ display: 'flex' }}>
                            <p>Slot Duration:</p> &nbsp;
                            <input type='text' placeholder='15 Min' className='input-style-slot' />
                        </div>
                    </div>
                </div>
                <div className='appoint-week'>
                    <div className='row margin-appoint'>
                        <div className='col-md-6 col-lg-6'>
                            <div>
                                <div className='box-appointmet yellow'></div>
                                &nbsp; Monday
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6'>
                            <input type="time" id="appt" name="appt" />
                            &nbsp; to &nbsp;<input type="time" id="appt" name="appt" />
                        </div>
                    </div>
                    <div className='row margin-appoint'>
                        <div className='col-md-6 col-lg-6'>
                            <div>
                                <div className='box-appointmet yellow'></div>
                                &nbsp; Tuesday
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6'>
                            <input type="time" id="appt" name="appt" />
                            &nbsp; to &nbsp;<input type="time" id="appt" name="appt" />
                        </div>
                    </div>
                    <div className='row margin-appoint'>
                        <div className='col-md-6 col-lg-6'>
                            <div>
                                <div className='box-appointmet yellow'></div>
                                &nbsp; Wednesday
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6'>
                            <input type="time" id="appt" name="appt" />
                            &nbsp; to &nbsp;<input type="time" id="appt" name="appt" />
                        </div>
                    </div>
                    <div className='row margin-appoint'>
                        <div className='col-md-6 col-lg-6'>
                            <div>
                                <div className='box-appointmet yellow'></div>
                                &nbsp; Thursday
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6'>
                            <input type="time" id="appt" name="appt" />
                            &nbsp; to &nbsp;<input type="time" id="appt" name="appt" />
                        </div>
                    </div>
                    <div className='row margin-appoint'>
                        <div className='col-md-6 col-lg-6'>
                            <div>
                                <div className='box-appointmet yellow'></div>
                                &nbsp; Friday
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6'>
                            <input type="time" id="appt" name="appt" />
                            &nbsp; to &nbsp;<input type="time" id="appt" name="appt" />
                        </div>
                    </div>
                    <div className='row margin-appoint'>
                        <div className='col-md-6 col-lg-6'>
                            <div>
                                <div className='box-appointmet white'></div>
                                &nbsp; Saturday
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6'>
                            <input type="time" id="appt" name="appt" />
                            &nbsp; to &nbsp;<input type="time" id="appt" name="appt" />
                        </div>
                    </div>
                    <div className='row margin-appoint'>
                        <div className='col-md-6 col-lg-6'>
                            <div>
                                <div className='box-appointmet white'></div>
                                &nbsp; Sunday
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6'>
                            <input type="time" id="appt" name="appt" />
                            &nbsp; to &nbsp;<input type="time" id="appt" name="appt" />
                        </div>
                    </div>
                </div>
                <div className='vertical-center'>
                    <button className='back-btn'>Back</button>
                    <button className='confirm-btn'>Confirm</button>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default AllAppointments;
