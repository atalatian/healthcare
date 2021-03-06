import React from "react";
import {Controller} from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(0),
    },
    textField: {
        maxWidth: '25ch',
    },
}));


export default function Systole(props){
    const classes = useStyles();

    return(
        <Controller
            control={props.control}
            name="criticalSystole"
            defaultValue=""
            as={
                <TextField
                    label="Critical Systole"
                    id="standard-start-adornment"
                    type="number"
                    className={clsx(classes.margin, classes.textField)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">&#x0003E;</InputAdornment>,
                    }}
                />
            }
        />
    );
}