import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from "@material-ui/core/Button";
import data from "./data";

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function createData(id, firstName, lastName, history, tags) {
    return {
        id: id,
        firstName: firstName,
        lastName: lastName,
        history: history,
        tags: tags,
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell align="left">{row.firstName}</TableCell>
                <TableCell align="left">{row.lastName}</TableCell>
                <TableCell align="left">
                    <Button variant="contained" color="primary" href="#">
                        Start
                    </Button>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell align="left">Beginning</TableCell>
                                        <TableCell align="left">End</TableCell>
                                        <TableCell align="left">Duration</TableCell>
                                        <TableCell align="left">Number Of Measurements</TableCell>
                                        <TableCell align="left">Successful Measurements</TableCell>
                                        <TableCell align="left">More</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.id}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.id}
                                            </TableCell>
                                            <TableCell align="left">{historyRow.beginning}</TableCell>
                                            <TableCell align="left">{historyRow.end}</TableCell>
                                            <TableCell align="left">{historyRow.duration}</TableCell>
                                            <TableCell align="left">{historyRow.numberOfMeasurements}</TableCell>
                                            <TableCell align="left">{historyRow.successfulMeasurements}</TableCell>
                                            <TableCell align="left">
                                                <Button variant="contained" color="primary" href="/#/detail">
                                                    Detail
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        id: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                beginning: PropTypes.string.isRequired,
                end: PropTypes.string.isRequired,
                duration: PropTypes.string.isRequired,
                numberOfMeasurements: PropTypes.number.isRequired,
                successfulMeasurements: PropTypes.number.isRequired,
            }),
        ).isRequired,
    }).isRequired,
};

const rows = [];
for (let i=0; i<Object.keys(data).length; i++){
    let obj = createData(data[i].id, data[i].firstName, data[i].lastName, data[i].history, data[i].tags);
    rows.push(obj)
}

export default function Record() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell align="left">ID</TableCell>
                        <TableCell align="left">First Name</TableCell>
                        <TableCell align="left">Last Name</TableCell>
                        <TableCell align="left">Test</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.id} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

