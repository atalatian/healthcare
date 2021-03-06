import React from "react";
import {Controller} from "react-hook-form";
import TextField from "@material-ui/core/TextField";

export default function Systole(props){
    return(
        <Controller
            control={props.control}
            name="nightPhaseSystole"
            defaultValue=""
            as={
                <TextField
                    id="standard-number"
                    label="Night Phase Systole"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            }
        />
    );
}