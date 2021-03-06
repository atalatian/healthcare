import React from "react";
import Grid from "@material-ui/core/Grid";
import FirstName from "./firstName";
import LastName from "./lastName";
import Gender from "./gender";
import NationalCode from "./natioalCode";


export default function User(props){
    return(
        <Grid container spacing={10}>
            <Grid item xs={12} xl={6} sm={6} md={3} lg={3}>
                <FirstName control={props.control}/>
            </Grid>
            <Grid item xs={12} xl={6} sm={6} md={3} lg={3}>
                <LastName control={props.control}/>
            </Grid>
            <Grid item xs={12} xl={6} sm={6} md={3} lg={3}>
                <NationalCode control={props.control}/>
            </Grid>
            <Grid item xs={12} xl={6} sm={6} md={3} lg={3}>
                <Gender control={props.control}/>
            </Grid>
        </Grid>
    );
}