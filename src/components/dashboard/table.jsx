import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Enter from "./enter";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(id, beginning, end, duration,
                    numberOfMeasurements,successfulMeasurements) {
    return {id, beginning, end, duration,
        numberOfMeasurements,successfulMeasurements};
}

const rows = [
    createData(1, "07.09.2015 (8:37)", "08.09.2015 (8:20)",
        "23:47 Hours", 77, 76,),
    createData(2, "07.09.2015 (8:37)", "08.09.2015 (8:20)",
        "23:47 Hours", 77, 76,),
    createData(3, "07.09.2015 (8:37)", "08.09.2015 (8:20)",
        "23:47 Hours", 77, 76,),
];

export default function BasicTable(props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} ref={props.componentToPrint}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">ID</TableCell>
                        <TableCell align="left">Beginning</TableCell>
                        <TableCell align="left">End</TableCell>
                        <TableCell align="left">Duration</TableCell>
                        <TableCell align="left">Number Of Measurements</TableCell>
                        <TableCell align="left">Successful Measurements</TableCell>
                        <TableCell align="left">Detail</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="left">{row.beginning}</TableCell>
                            <TableCell align="left">{row.end}</TableCell>
                            <TableCell align="left">{row.duration}</TableCell>
                            <TableCell align="left">{row.numberOfMeasurements}</TableCell>
                            <TableCell align="left">{row.successfulMeasurements}</TableCell>
                            <TableCell align="left">
                                <Enter/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

