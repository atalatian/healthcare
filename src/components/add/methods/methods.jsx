import React from "react";
import Grid from "@material-ui/core/Grid";
import SelectMethod from "./selectMethod";




export default function Methods(props){
    return(
        <Grid container spacing={10}>
            <Grid item xs={12} xl={6} sm={6} md={3} lg={3}>
                <SelectMethod control={props.control}/>
            </Grid>
        </Grid>
    );
}
