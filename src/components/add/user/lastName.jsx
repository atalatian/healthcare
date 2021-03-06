import React from "react";
import {Controller} from "react-hook-form";
import TextField from "@material-ui/core/TextField";


export default function LastName(props){
    return(
        <Controller
            control={props.control}
            name="lastName"
            defaultValue=""
            as={
                <TextField
                    id="standard-basic"
                    label="Last Name"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            }
        />
    );
}