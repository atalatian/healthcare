import React from "react";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from '@material-ui/core/styles';
import PrintIcon from '@material-ui/icons/Print';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));


export default function Print(props){
    const classes = useStyles();

    return(
        <Fab color="primary" onClick={props.printButton}
             aria-label="add" className={classes.margin}>
            <PrintIcon />
        </Fab>
    );
}