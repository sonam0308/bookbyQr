import { AppBar, Button, Grid, IconButton, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
const useStyles = makeStyles((theme) => {
    return {
        root: {
            width: '100%',
        },
        container: {
            fontFamily: "'Nunito', sans-serif",
            maxHeight: 450,
        },
        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
            color: 'black',
            fontFamily: "'Nunito', sans-serif"
        },
        search: {
            position: 'relative',
            borderRadius: '20px',
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
            border: '2px solid black'
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'black'
        },
        inputRoot: {
            color: 'inherit',
            fontFamily: "'Nunito', sans-serif"
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
            color: 'black',
            fontFamily: "'Nunito', sans-serif"
        },
        static: {
            flexGrow: '1',
            backgroundColor: 'white',
            border: '2px solid #3834b4',
            fontFamily: "'Nunito', sans-serif"
        },
        menuButton: {
            marginRight: theme.spacing(2),
            color: '#3834b4',
            fontFamily: "'Nunito', sans-serif"
        },
        table: {
            width: '100%',
            display: 'block',
            overflowX: 'auto',
            fontFamily: "'Nunito', sans-serif"
        },
        buttonStyle: {
            backgroundColor: '#E7ca15',
            color: '#3834b4',
            fontFamily: "'Nunito', sans-serif",
            fontWeight: '800'
        }
    }
});

const length = [
    {title: 'event1', slot: 2, from: '22/07/2022', to: '22/07/2022'},
    {title: 'schedule1', slot: 1, from: '25/07/2022', to: '26/07/2022'},
    {title: 'test', slot: 2, from: '21/07/2022', to: '22/07/2022'},
    {title: 'event2', slot: 4, from: '27/07/2022', to: '27/07/2022'},
    {title: 'abc', slot: 2, from: '29/07/2022', to: '29/07/2022'},
]

const SchedulesTable = () => {
    const classes = useStyles();
    const history = useHistory()
    const AddItem = (e, item) => {
        history.push('/add/schedules')
    }

    return (
        <>
            <Paper className={classes.root}>
                <AppBar position="static" className={classes.static}>
                    <Toolbar>
                        {/* <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={() => getWorkerList("ALL")}
                        >
                            <AttachMoneySharp />
                        </IconButton> */}
                        <Typography className={classes.title} variant="h6" noWrap>
                            My Schedules
                        </Typography>
                        <Button className={classes.buttonStyle} onClick={(e) => AddItem(e)}>
                            Add Schedules
                        </Button>
                    </Toolbar>
                </AppBar>
                <Grid >
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table" className={classes.table}>
                            <TableHead>
                                <TableRow style={{ border: '2px solid #3834b4' }}>

                                    <TableCell
                                        style={{ border: '2px solid #3834b4' }}
                                    >
                                        No.
                                    </TableCell>
                                    <TableCell
                                        style={{ border: '2px solid #3834b4' }}
                                    >
                                        Title
                                    </TableCell>
                                    <TableCell
                                        style={{ border: '2px solid #3834b4', width: '200px' }}
                                    >
                                        Slot
                                    </TableCell>
                                    <TableCell
                                        style={{ border: '2px solid #3834b4', width: '200px' }}
                                    >
                                        From
                                    </TableCell>
                                    <TableCell style={{ border: '2px solid #3834b4' }}>
                                        To
                                    </TableCell>
                                    <TableCell
                                        style={{ border: '2px solid #3834b4' }}
                                    >
                                        Action
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* {data && data.map((item, index) => (
                                    <TableRow key={item.id}>
                                        <TableCell style={{ border: '2px solid #3834b4' }} >
                                            {index + 1}
                                        </TableCell>
                                        <TableCell style={{ border: '2px solid #3834b4', width: '150px' }} >
                                            {item.uniqueId}
                                        </TableCell>
                                        <TableCell style={{ border: '2px solid #3834b4', width: '300px' }} >
                                            {item.planName}
                                        </TableCell>
                                        <TableCell style={{ border: '2px solid #3834b4', width: '250px' }}>
                                            {item.duration}
                                        </TableCell>
                                        <TableCell style={{ border: '2px solid #3834b4', width: '150px' }} >
                                            {item.price}
                                        </TableCell>
                                        <TableCell style={{ border: '2px solid #3834b4', width: '100px' }} >
                                            <EditRoundedIcon
                                                onClick={(e) => onEdit(e, item)}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))} */}
                                {length && length.map((item, index) => (
                                <TableRow>
                                    <TableCell style={{ border: '2px solid #3834b4' }} >
                                        1
                                    </TableCell>
                                    <TableCell style={{ border: '2px solid #3834b4', width: '250px' }} >
                                        {item.title}
                                    </TableCell>
                                    <TableCell style={{ border: '2px solid #3834b4', width: '100px' }} >
                                    {item.slot}
                                    </TableCell>
                                    <TableCell style={{ border: '2px solid #3834b4', width: '150px' }}>
                                    {item.from}
                                    </TableCell>
                                    <TableCell style={{ border: '2px solid #3834b4', width: '200px' }} >
                                    {item.to}
                                    </TableCell>
                                    <TableCell style={{ border: '2px solid #3834b4', width: '150px', textAlign: 'center' }} >
                                    <EditRoundedIcon
                                            onClick={(e) => console.log(e)}
                                        />
                                        <DeleteForeverRoundedIcon/>
                                    </TableCell>
                                </TableRow>
                                ))} 
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Paper>
        </>
    )
}

export default SchedulesTable