import React from "react";
import Grid from "@material-ui/core/Grid";
import DayPhase from "./dayPhase/dayPhase";
import NightPhase from "./nightPhase/nightPhase";
import Critical from "./critical/critical";
import Acceptable from "./acceptable/acceptable";

export default function LimitValues(props){
    return(
        <Grid container spacing={10}>
            <Grid item xs={12} xl={6} sm={6} md={3} lg={3}>
                <DayPhase control={props.control}/>
            </Grid>
            <Grid item xs={12} xl={6} sm={6} md={3} lg={3}>
                <NightPhase control={props.control}/>
            </Grid>
            <Grid item xs={12} xl={6} sm={6} md={3} lg={3}>
                <Critical control={props.control}/>
            </Grid>
            <Grid item xs={12} xl={6} sm={6} md={3} lg={3}>
                <Acceptable control={props.control}/>
            </Grid>
        </Grid>
    );
}