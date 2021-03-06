import React from "react";
import Grid from "@material-ui/core/Grid";
import Start from "./start";
import End from "./end";


export default function Day(props){
    return(
        <Grid container spacing={5}>
            <Grid item xs={12}>
                <Start control={props.control}/>
            </Grid>
            <Grid item xs={12}>
                <End control={props.control}/>
            </Grid>
        </Grid>
    );
}