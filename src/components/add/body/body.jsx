import React from "react";
import Grid from "@material-ui/core/Grid";
import Height from "./height";
import Weight from "./weight";



export default function Body(props){
    return(
        <Grid container spacing={10}>
            <Grid item xs={12} xl={6} sm={6} md={3} lg={3}>
                <Height control={props.control}/>
            </Grid>
            <Grid item xs={12} xl={6} sm={6} md={3} lg={3}>
                <Weight control={props.control}/>
            </Grid>
        </Grid>
    );
}