import React from "react";
import {Controller} from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(0),
    },
    textField: {
        maxWidth: '25ch',
    },
}));

export default function Diastole(props){
    const classes = useStyles();

    return(
        <Controller
            control={props.control}
            name="acceptableDiastole"
            defaultValue=""
            as={
                <TextField
                    label="Acceptable Diastole"
                    id="standard-start-adornment"
                    type="number"
                    className={clsx(classes.margin, classes.textField)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">&#x0003C;&#x0003D;</InputAdornment>,
                    }}
                />
            }
        />
    );
}