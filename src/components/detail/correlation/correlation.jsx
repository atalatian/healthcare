import React from "react";
import Chart from "./chart";
import {Grid} from "@material-ui/core";

export default function Correlation(props){

    return(
        <React.Fragment>
            <Grid container spacing={1}>
                <Chart fontWidth={props.fontWidth}
                       borderRadius={props.borderRadius}
                       aspect={props.aspect}/>
            </Grid>
        </React.Fragment>
    );
}