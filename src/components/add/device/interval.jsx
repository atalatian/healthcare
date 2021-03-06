import React from "react";
import {Controller} from "react-hook-form";
import TextField from "@material-ui/core/TextField";

export default function Interval(props){
    return(
        <Controller
            control={props.control}
            name="interval"
            defaultValue=""
            as={
                <TextField
                    id="standard-number"
                    label="Interval"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            }
        />
    );
}