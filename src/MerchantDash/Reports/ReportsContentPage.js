import { Button, Grid, TextField } from '@material-ui/core'
import React from 'react'

const ReportsContentPage = () => {
    return (
        <div>
            <div className='box-wrap'>
                <div class="head-wrap">
                    <h2 class="center-txt-reports">Reports</h2>
                </div>
                <div className="box-iner-wrap">
                    <div className="row">
                        <div className="col-sm-6 col-xs-12 col-md-6 col-lg-6" >
                            <div className="head-box">Recharge Summary</div>
                            <TextField
                                id="date"
                                label="Start Date"
                                type="date"
                                defaultValue="2017-05-24"
                                // sx={{ width: 220 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="date"
                                label="End Date"
                                type="date"
                                defaultValue="2017-05-24"
                                // sx={{ width: 220 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <Grid container justify='center'>
                            <Button className="mail-button" variant='contained' style={{backgroundColor: '#E7ca15',color: '#3834b4', margin: '20px'}}>Mail</Button>
                            </Grid>
                        </div>
                        <div className="col-sm-6 col-xs-12 col-md-6 col-lg-6 ">
                            <div className="head-box">Booking Summary</div>
                            <TextField
                                id="date"
                                label="Start Date"
                                type="date"
                                defaultValue="2017-05-24"
                                // sx={{ width: 220 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="date"
                                label="End Date"
                                type="date"
                                defaultValue="2017-05-24"
                                // sx={{ width: 220 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <Grid container justify='center'>
                            <Button className="mail-button" variant='contained' style={{backgroundColor: '#E7ca15',color: '#3834b4', margin: '20px'}}>Mail</Button>
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportsContentPage