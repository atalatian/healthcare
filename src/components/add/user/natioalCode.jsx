import React from "react";
import {Controller} from "react-hook-form";
import TextField from "@material-ui/core/TextField";


export default function NationalCode(props){
    return(
        <Controller
            control={props.control}
            name="nationalCode"
            defaultValue=""
            as={
                <TextField
                    id="standard-number"
                    label="National Code"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            }
        />
    );
}