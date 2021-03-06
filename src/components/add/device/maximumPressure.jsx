import React from "react";
import {Controller} from "react-hook-form";
import TextField from "@material-ui/core/TextField";

export default function MaximumPressure(props){
    return(
        <Controller
            control={props.control}
            name="maximumPressure"
            defaultValue=""
            as={
                <TextField
                    id="standard-number"
                    label="Maximum Pressure"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            }
        />
    );
}