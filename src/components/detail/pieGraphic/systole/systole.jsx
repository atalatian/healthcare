import React from "react";
import TotalTime from "./totalTime";
import DayPhase from "./dayPhase";
import NightPhase from "./nightPhase";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import useReRender from "../../../useReRender";

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

    const reRender = useReRender()

    const [trigger, setTrigger] = React.useState(true);

    const update = (resizeTimer) => {
        setTrigger(false)
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            setTrigger(true)
        }, 250);
    }

    let resizeTimer;

    React.useEffect(()=>{
        update(resizeTimer)
    }, [reRender]);


    const classes = useStyles();

    const renderChart = () => {
        if (trigger){
            return (
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
            );
        }else {
            return(
                <div className={classes.wrapper}>
                    <CircularProgress/>
                </div>
            );
        }
    }

    return(
        <React.Fragment>
            <Grid xs={12}>
                <Paper className={classes.title} elevation={3}>
                    {(props.fontWidth ? <h1 className={classes.h1Style}>Pie Graphic/Systole</h1>
                        :<h2 className={classes.h1Style}>Pie Graphic/Systole</h2>)}
                </Paper>
            </Grid>
            <Grid container justify="space-between">
                {renderChart()}
            </Grid>
        </React.Fragment>
    );
}