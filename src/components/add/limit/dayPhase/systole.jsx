import React from "react";
import {Controller} from "react-hook-form";
import TextField from "@material-ui/core/TextField";

export default function Systole(props){
    return(
        <Controller
            control={props.control}
            name="dayPhaseSystole"
            defaultValue=""
            as={
                <TextField
                    id="standard-number"
                    label="Day Phase Systole"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            }
        />
    );
}