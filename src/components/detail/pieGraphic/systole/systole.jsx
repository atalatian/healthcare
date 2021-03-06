import React from "react";
import TotalTime from "./totalTime";
import DayPhase from "./dayPhase";
import NightPhase from "./nightPhase";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Systole(props){

    const useStyles = makeStyles({
        title: {
            backgroundColor: "white !important",
            color: "#009999 !important",
            borderRadius: props.borderRadius,
        },
        h1Style: {
            marginTop: "0",
            padding: "10px",
        },
        wrapper: {
            width: "100%",
            textAlign: "center",
        },
    });

    const classes = useStyles();

    return(
        <React.Fragment>
            <Grid xs={12}>
                <Paper className={classes.title} elevation={3}>
                    {(props.fontWidth ? <h1 className={classes.h1Style}>Pie Graphic/Systole</h1>
                        :<h2 className={classes.h1Style}>Pie Graphic/Systole</h2>)}
                </Paper>
            </Grid>
            <Grid container justify="space-between">
                <React.Fragment>
                    <TotalTime borderRadius={props.borderRadius}
                               cx={props.cx}
                               isAnimationActive={props.isAnimationActive}
                               aspect={props.aspect}
                               fontWidth={props.fontWidth} width={props.width} />
                    <DayPhase aspect={props.aspect}
                              cx={props.cx}
                              isAnimationActive={props.isAnimationActive}
                              borderRadius={props.borderRadius}
                              fontWidth={props.fontWidth} width={props.width}/>
                    <NightPhase aspect={props.aspect}
                                cx={props.cx}
                                isAnimationActive={props.isAnimationActive}
                                borderRadius={props.borderRadius}
                                fontWidth={props.fontWidth} width={props.width}/>
                </React.Fragment>
            </Grid>
        </React.Fragment>
    );
}