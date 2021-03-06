import React from "react";
import Grid from "@material-ui/core/Grid";
import MaximumPressure from "./maximumPressure";
import Interval from "./interval";

export default function Device(props){
    return(
        <Grid container spacing={10}>
            <Grid item xs={12} xl={6} sm={6} md={3} lg={3}>
                <MaximumPressure control={props.control}/>
            </Grid>
            <Grid item xs={12} xl={6} sm={6} md={3} lg={3}>
                <Interval control={props.control}/>
            </Grid>
        </Grid>
    );
}