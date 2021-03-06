import React from "react";
import Grid from "@material-ui/core/Grid";
import Number from "./number";
import DatePicker from "./datePicker";



export default function Age(props){
    return(
        <Grid container spacing={10}>
            <Grid item xs={12} xl={6} sm={6} md={3} lg={3}>
                <Number control={props.control}/>
            </Grid>
            <Grid item xs={12} xl={6} sm={6} md={3} lg={3}>
                <DatePicker control={props.control}/>
            </Grid>
        </Grid>
    )
}