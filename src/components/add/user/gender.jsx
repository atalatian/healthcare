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

export default function Gender(props){
    const classes = useStyles();
    const [gender, setGender] = React.useState("");

    const handleChange = (event) => {
        setGender(event.target.value);
    };


    return(
        <FormControl className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">Gender</InputLabel>
            <Controller
                control={props.control}
                name="gender"
                as={
                    <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        value={gender}
                        displayEmpty
                        onChange={handleChange}
                        className={classes.selectEmpty}
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                    </Select>
                }
            />
        </FormControl>
    );
}