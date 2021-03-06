import React from "react";
import TextField from '@material-ui/core/TextField';
import {Controller} from "react-hook-form";


export default function Special(props){
    return(
        <Controller
            control={props.control}
            name="specialDisease"
            defaultValue=""
            as={
                <TextField
                    id="standard-multiline-static"
                    label="Special Disease"
                    multiline
                    rows={4}
                    defaultValue=""
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            }
        />
    );
}