import React from "react";
import {Controller} from "react-hook-form";
import TextField from "@material-ui/core/TextField";

export default function Diastole(props){
    return(
        <Controller
            control={props.control}
            name="dayPhaseDiastole"
            defaultValue=""
            as={
                <TextField
                    id="standard-number"
                    label="Day Phase Diastole"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            }
        />
    );
}