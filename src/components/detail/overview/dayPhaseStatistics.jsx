import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from "@material-ui/core";

function DayPhaseStatistics(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
        },
    }));

    function createData(n, maximum, average, minimum, standard_dev) {
        return { n, maximum, average, minimum, standard_dev };
    }

    const classes = useStyles();

    const rows = [
        createData('Systole [mmHg]', 100, 108, 151, 14.7),
        createData('Diastole [mmHg]', 69, 67, 106, 11.3),
        createData('MAP [mmHg]', 63, 84, 129, 14.4),
        createData('HR [min-1]', 63, 77, 98, 8.1),
    ];

    return(
        <React.Fragment>
            <Grid xs={12}>
                <Paper style={{backgroundColor: "white",
                    color: "#009999", borderRadius: props.borderRadius }} elevation={3}>
                    {(props.fontWidth ? <h1 className="h1_style">Overview/Day Phase Statistics</h1>
                        :<h2 className="h1_style">Overview/Day Phase Statistics</h2>)}
                </Paper>
            </Grid>
            <div style={{ width: "100%" }}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">N=76</TableCell>
                                <TableCell align="left">Maximum</TableCell>
                                <TableCell align="left">Average</TableCell>
                                <TableCell align="left">Minimum</TableCell>
                                <TableCell align="left">Standard Dev.</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.n}>
                                    <TableCell align="left" component="th" scope="row">
                                        {row.n}
                                    </TableCell>
                                    <TableCell align="left">{row.maximum}</TableCell>
                                    <TableCell align="left">{row.average}</TableCell>
                                    <TableCell align="left">{row.minimum}</TableCell>
                                    <TableCell align="left">{row.standard_dev}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </React.Fragment>
    );
}

export default DayPhaseStatistics;