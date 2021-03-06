import React from "react";
import {Controller} from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SelectMethod(props){
    const classes = useStyles();
    const [method, setMethod] = React.useState("");

    const handleChange = (event) => {
        setMethod(event.target.value);
    };


    return(
        <FormControl className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">Method</InputLabel>
            <Controller
                control={props.control}
                name="method"
                as={
                    <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        value={method}
                        onChange={handleChange}
                    >
                        <MenuItem value={0}>Each 24 Hours</MenuItem>
                        <MenuItem value={1}>Night & Day Phase</MenuItem>
                        <MenuItem value={2}>Each 8 Hours</MenuItem>
                        <MenuItem value={3}>Each 6 Hours</MenuItem>
                    </Select>
                }
            />
        </FormControl>
    );
}