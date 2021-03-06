import React from "react";
import Grid from "@material-ui/core/Grid";
import Special from "./special";
import Smoking from "./smoking";


export default function Additional(props){
    return(
        <Grid alignItems="flex-end" container spacing={10}>
            <Grid item xs={12} xl={6} sm={6} md={3} lg={3}>
                <Special control={props.control}/>
            </Grid>
            <Grid item xs={12} xl={6} sm={6} md={3} lg={3}>
                <Smoking register={props.register} control={props.control}/>
            </Grid>
        </Grid>
    );
}