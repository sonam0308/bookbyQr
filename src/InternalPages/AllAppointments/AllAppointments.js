import React from 'react';
import './AllAppointments.css'
import Footer from '../../Component/Footer';
import Header from '../../Component/Header';
import { Switch } from '@mui/material';
import ConditionalHeader from '../../Component/conditional-header/ConditionalHeader';

const AllAppointments = () => {
    return (
        <>
            {/* <ConditionalHeader /> */}
            <h2 className='h2-tag'>All Schedules</h2>
            <div className='container'>
                <div>
                    <form className='appointment-form'>
                        <input type="text" placeholder='Scheduler Name' className='appointment-input' />
                    </form>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="centerText" style={{ display: 'flex' }}>
                            <p>Choose Date: </p>
                            <input type='date' placeholder='27/02/2020' /> &nbsp; to &nbsp; <input type='date' placeholder='27/02/2020' />
                        </div>
                    </div>
                    <div className='col-xs-6'>
                        <div className="centerText" style={{ display: 'flex' }}>
                            <p>Parallel Slots:</p> &nbsp;
                            <input type='text' placeholder='One' className='input-style' />
                        </div>
                    </div>
                    <div className='col-md-6 '>
                        <div className="centerText" style={{ display: 'flex' }}>
                            <p>Slot Duration:</p> &nbsp;
                            <input type='text' placeholder='15 Min' className='input-style-slot' />
                        </div>
                    </div>
                </div>
                <div className='appoint-week'>
                    <div className='row margin-appoint'>
                        <div className='col-sm-4 col-md-6 col-lg-6'>
                            <div className='box-wrap-toggle'>
                                <div className='box-appt-wrap'>
                                    {/* <div className='box-appointmet yellow'></div> */}
                                    &nbsp; Monday
                                </div>
                                <Switch defaultChecked />
                                <h4>Open</h4>
                            </div>

                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            &nbsp; From &nbsp;<input type="time" id="appt" name="appt" />
                            &nbsp; to &nbsp;<input type="time" id="appt" name="appt" />
                        </div>
                    </div>
                    <div className='row margin-appoint'>
                        <div className='col-sm-4 col-md-6 col-lg-6'>
                            <div className='box-wrap-toggle'>
                                <div className='box-appt-wrap'>
                                    {/* <div className='box-appointmet yellow'></div> */}
                                    &nbsp; Tuesday
                                </div>
                                <Switch defaultChecked />
                                <h4>Open</h4>
                            </div>

                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            &nbsp; From &nbsp;<input type="time" id="appt" name="appt" />
                            &nbsp; to &nbsp;<input type="time" id="appt" name="appt" />
                        </div>
                    </div>
                    <div className='row margin-appoint'>
                        <div className='col-sm-4 col-md-6 col-lg-6'>
                            <div className='box-wrap-toggle'>
                                <div className='box-appt-wrap'>
                                    {/* <div className='box-appointmet yellow'></div> */}
                                    &nbsp; Wednesday
                                </div>
                                <Switch defaultChecked />
                                <h4>Open</h4>
                            </div>

                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            &nbsp; From &nbsp;<input type="time" id="appt" name="appt" />
                            &nbsp; to &nbsp;<input type="time" id="appt" name="appt" />
                        </div>
                    </div>
                    <div className='row margin-appoint'>
                        <div className='col-sm-4 col-md-6 col-lg-6'>
                            <div className='box-wrap-toggle'>
                                <div className='box-appt-wrap'>
                                    {/* <div className='box-appointmet yellow'></div> */}
                                    &nbsp; Thursday
                                </div>
                                <Switch defaultChecked />
                                <h4>Open</h4>
                            </div>

                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            &nbsp; From &nbsp;<input type="time" id="appt" name="appt" />
                            &nbsp; to &nbsp;<input type="time" id="appt" name="appt" />
                        </div>
                    </div>
                    <div className='row margin-appoint'>
                        <div className='col-sm-4 col-md-6 col-lg-6'>
                            <div className='box-wrap-toggle'>
                                <div className='box-appt-wrap'>
                                    {/* <div className='box-appointmet yellow'></div> */}
                                    &nbsp; Friday
                                </div>
                                <Switch defaultChecked />
                                <h4>Open</h4>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            &nbsp; From &nbsp;<input type="time" id="appt" name="appt" />
                            &nbsp; to &nbsp;<input type="time" id="appt" name="appt" />
                        </div>
                    </div>
                    <div className='row margin-appoint'>
                        <div className='col-sm-4 col-md-6 col-lg-6'>
                            <div className='box-wrap-toggle'>
                                <div className='box-appt-wrap'>
                                    {/* <div className='box-appointmet white'></div> */}
                                    &nbsp; Saturday
                                </div>
                                <Switch defaultChecked />
                                <h4>Open</h4>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            &nbsp; From &nbsp;<input type="time" id="appt" name="appt" />
                            &nbsp; to &nbsp;<input type="time" id="appt" name="appt" />
                        </div>
                    </div>
                    <div className='row margin-appoint'>
                        <div className='col-sm-4 col-md-6 col-lg-6'>
                            <div className='box-wrap-toggle'>
                                <div className='box-appt-wrap'>
                                    {/* <div className='box-appointmet white'></div> */}
                                    &nbsp; Sunday
                                </div>
                                <Switch defaultChecked />
                                <h4>Open</h4>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            &nbsp; From &nbsp;<input type="time" id="appt" name="appt" />
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
