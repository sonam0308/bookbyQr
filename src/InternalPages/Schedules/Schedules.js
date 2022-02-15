import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import './Schedule.css'
import ConditionalHeader from '../../Component/conditional-header/ConditionalHeader';
import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import AllAppointments from '../AllAppointments/AllAppointments';

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];
const Schedules = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('md');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleMaxWidthChange = (event) => {
        setMaxWidth(
            // @ts-expect-error autofill of arbitrary value is not handled.
            event.target.value,
        );
    };

    const handleFullWidthChange = (event) => {
        setFullWidth(event.target.checked);
    };

    const [title, setTitle] = useState('')
    const [start_time, setStartTime] = useState('')
    const [end_time, setEndTime] = useState('')
    const [start_date, setStartDate] = useState('')
    const [end_date, setEndDate] = useState('')
    const [slot, setSlot] = useState('')
    const [seats, setSeats] = useState('')
    const [days, setDays] = useState('')

    // myschedule-data
    const [scheduleData,setScheduleData]=useState([])

    useEffect(async () => {
        const response = await axios.get(process.env.REACT_APP_BASE_URL + '/UserAppointmentSchedule')
        console.log(response)
        setScheduleData(response.data.data.schedule)
    }, [])
    // myschedule-data-ends

    const onFormSubmit = async (e) => {
        console.log('working');
        e.preventDefault();
        try {
            let body = {
                title: title,
                start_time: start_time,
                end_time: end_time,
            }
            let response = await axios.post(process.env.REACT_APP_BASE_URL + '/UserAppointmentSchedule', body, { mode: 'cors' })
                .then((res) => res.json())
                .then((resp) => {
                    console.log(resp);
                })
            console.log(response);
            setTitle('')
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <ConditionalHeader />
            <div className='container heading'>
                <h2>Your Schedules</h2>
                <hr className='hr' />
                <button className="button" onClick={handleClickOpen}>Add Schedules</button>
                {/* </div>
                <div className='container'> */}
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {column.format && typeof value === 'number'
                                                                ? column.format(value)
                                                                : value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        style={{ fontSize: '15px' }}
                    />
                </Paper>
                <Dialog
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    open={open}
                    onClose={handleClose}
                >
                    <DialogActions>
                        <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
                    {/* <DialogTitle className='center-head'>Make Your Schedule</DialogTitle> */}
                    <AllAppointments/>
                    {/* <DialogContent>
                        <form action="" onSubmit={onFormSubmit}>
                            <div className="row">
                                <div className="col-sm-12">
                                    <TextField id="outlined-basic"
                                        onChange={(e) => { setTitle(e.target.value) }}
                                        value={title} className='schedule-field' label="Title" variant="outlined" />
                                </div>
                                <div className="col-sm-6">
                                    <TextField id="outlined-basic"
                                        onChange={(e) => { setStartTime(e.target.value) }}
                                        value={start_time} type="time" className='schedule-field' label="Start Time" variant="outlined" />
                                </div>
                                <div className="col-sm-6">
                                    <TextField id="outlined-basic"
                                        onChange={(e) => { setEndTime(e.target.value) }}
                                        value={end_time} type="time" className='schedule-field' label="End Time" variant="outlined" />
                                </div>
                                <div className="col-sm-6">
                                    <Select className='sch-select'
                                        id="demo-simple-select"
                                        label="Slot"
                                        value={slot}
                                        onChange={(e) => { setSlot(e.target.value) }}
                                    >
                                        <MenuItem value="">
                                            <em>Slot</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </div>
                                <div className="col-sm-6">
                                    <TextField id="outlined-basic"
                                        onChange={(e) => { setSeats(e.target.value) }}
                                        value={seats} className='schedule-field' type="number" label="Total Seats" variant="outlined" />
                                </div>
                                <div className="col-sm-6">
                                    <TextField id="outlined-basic"
                                        onChange={(e) => { setStartDate(e.target.value) }}

                                        type="date" value={start_date} className='schedule-field' label="From" variant="outlined" />
                                </div>
                                <div className="col-sm-6">
                                    <TextField id="outlined-basic" type="date"
                                        onChange={(e) => { setEndDate(e.target.value) }}

                                        value={end_date} className='schedule-field' label="To" variant="outlined" />
                                </div>
                                <div className="col-sm-12">
                                    <TextField id="outlined-basic" className='schedule-field' label="Days" variant="outlined" />
                                </div>
                                <div className="col-sm-12">
                                    <div className="sch-popup-btn">
                                        <button className="button btn-add">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </DialogContent> */}

                </Dialog>
            </div>
            {/* </div> */}
            <Footer />
        </>
    )
};

export default Schedules;




