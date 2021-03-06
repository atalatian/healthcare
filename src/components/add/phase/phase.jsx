import React from "react";
import Grid from "@material-ui/core/Grid";
import Day from "./day/day";
import Night from "./night/night";

export default function Phase(props){
    return(
        <Grid container spacing={10}>
            <Grid item xs={12} xl={6} sm={6} md={3} lg={3}>
                <Day control={props.control}/>
            </Grid>
            <Grid item xs={12} xl={6} sm={6} md={3} lg={3}>
                <Night control={props.control}/>
            </Grid>
        </Grid>
    );
}
