import { AppBar, Box, Button, Grid, makeStyles, Paper, Tab, Tabs, Toolbar, Typography, useTheme } from '@material-ui/core';
import React from 'react'
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}
const useStyles = makeStyles((theme) => {
    return {
        root: {
            width: '100%',
        },
        static: {
            flexGrow: '1',
            backgroundColor: 'white',
            border: '2px solid #3834b4'
        },
        buttonStyle: {
            backgroundColor: '#E7ca15',
            color: '#3834b4'
        },
        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
            color: 'black'
        },
    }
})

const AllAppointmentsPage = () => {
    const classes = useStyles()
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    return (
        <>
            <Grid container justify='center'>
                <Box sx={{ bgcolor: 'background.paper', width: 900, marginTop: 50 }}>
                    <AppBar position="static">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="inherit"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab label="All Appointments" {...a11yProps(0)} />
                            <Tab label="Past Appointments" {...a11yProps(1)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            100
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            200
                        </TabPanel>
                    </SwipeableViews>
                </Box>
            </Grid>
        </>
    )
}

export default AllAppointmentsPage