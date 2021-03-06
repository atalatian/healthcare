import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Grid} from "@material-ui/core";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(time, systole, diastole, map, hr, error, notes) {
    return { time, systole, diastole, map, hr, error, notes};
}

const rows = [
    createData('07.09.2015 8:37', 112, 72, 92, 92),
    createData('07.09.2015 8:39', 132, 70, 94, 81),
    createData('07.09.2015 8:53', 112, 68, 79, 73),
    createData('07.09.2015 9:13', 111, 69, 91, 84),
    createData('07.09.2015 9:28', 128, 98, 129, 81),
];


function TableCustom(props){
    const classes = useStyles();

    return(
        <React.Fragment>
            <Grid xs={12}>
                <Paper style={{backgroundColor: "white",
                    color: "#009999", borderRadius: props.borderRadius }} elevation={3}>
                    {(props.fontWidth ? <h1 className="h1_style">Hourly Averages/Table</h1>
                        :<h2 className="h1_style">Hourly Averages/Table</h2>)}
                </Paper>
            </Grid>
            <div style={{ width: "100%" }}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Time</TableCell>
                                <TableCell align="left">Systole [mmHg]</TableCell>
                                <TableCell align="left">Diastole [mmHg]</TableCell>
                                <TableCell align="left">MAP [mmHg]</TableCell>
                                <TableCell align="left">HR [mmHg]</TableCell>
                                <TableCell align="left">Error</TableCell>
                                <TableCell align="left">Notes</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.time}>
                                    <TableCell align="left" component="th" scope="row">
                                        {row.time}
                                    </TableCell>
                                    <TableCell align="left">{row.systole}</TableCell>
                                    <TableCell align="left">{row.diastole}</TableCell>
                                    <TableCell align="left">{row.map}</TableCell>
                                    <TableCell align="left">{row.hr}</TableCell>
                                    <TableCell align="left">{row.error}</TableCell>
                                    <TableCell align="left">{row.notes}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </React.Fragment>
    );
}

export default TableCustom