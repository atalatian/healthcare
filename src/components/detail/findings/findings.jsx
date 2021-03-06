import React from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Saved from "./saved";




export default function Findings(props){

    const useStyles = makeStyles({
        field: {
            width: "90%",
        },
        title: {
            backgroundColor: "white !important",
            color: "#009999 !important",
            margin: "0",
            textAlign: "left",
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
        grid: {
            textAlign: "center",
        }
    });


    const classes = useStyles();

    return(
        <Grid container spacing={1}>
            <div className={classes.wrapper}>
                <Paper className={classes.title} elevation={3}>
                    {(props.fontWidth ? <h1 className={classes.h1Style}>Findings</h1>
                        :<h2 className={classes.h1Style}>Findings</h2>)}
                </Paper>
                <TextField
                    className={classes.field}
                    id="standard-textarea"
                    label="Findings"
                    placeholder=""
                    multiline
                />
            </div>
            <Grid className={classes.grid} item xs={12}>
                <Saved/>
            </Grid>
        </Grid>

    );
}