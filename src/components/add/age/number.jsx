import React from "react";
import {Controller} from "react-hook-form";
import TextField from "@material-ui/core/TextField";

export default function Number(props){
    return(
        <Controller
            control={props.control}
            name="age_number"
            defaultValue=""
            as={
                <TextField
                    id="standard-number"
                    label="Age"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            }
        />
    );
}