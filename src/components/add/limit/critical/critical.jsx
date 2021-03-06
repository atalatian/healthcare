import React from "react";
import Systole from "./systole";
import Diastole from "./diastole";
import Grid from "@material-ui/core/Grid";


export default function Critical(props){
    return(
        <Grid container direction="column" spacing={5}>
            <Grid item xs={12}>
                <Systole control={props.control}/>
            </Grid>
            <Grid item xs={12}>
                <Diastole control={props.control}/>
            </Grid>
        </Grid>
    );
}