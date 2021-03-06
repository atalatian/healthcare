import React from "react";
import {Controller} from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(0),
    },
    textField: {
        width: '25ch',
    },
}));

export default function Weight(props){
    const classes = useStyles();


    return(
        <Controller
            control={props.control}
            name="weight"
            defaultValue=""
            as={
                <TextField
                    label="Weight"
                    id="standard-start-adornment"
                    className={clsx(classes.margin, classes.textField)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                    }}
                />
            }
        />
    );
}