import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));


export default function Start(props){
    const classes = useStyles();

    return(
        <Fab color="primary" onClick={props.onClick}
             aria-label="add" className={classes.margin}>
            <AddIcon />
        </Fab>
    );
}