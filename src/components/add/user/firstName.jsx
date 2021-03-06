import React from "react";
import {Controller} from "react-hook-form";
import TextField from "@material-ui/core/TextField";


export default function FirstName(props){
    return(
        <Controller
            control={props.control}
            name="firstName"
            defaultValue=""
            as={
                <TextField
                    id="standard-basic"
                    label="First Name"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            }
        />
    );
}