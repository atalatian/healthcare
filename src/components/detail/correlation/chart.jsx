import React from 'react';
import {
    ComposedChart, Line, XAxis, YAxis, CartesianGrid,
    Legend, Scatter, ResponsiveContainer, Tooltip,
} from 'recharts';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const data = [
    { index: 10000, red: 1643, blue: 790 },
    { index: 1666, red: 182, blue: 42 },
    { index: 625, red: 56, blue: 11 },
    // Calculation of line of best fit is not included in this demo
    { index: 300, redLine: 0 },
    { index: 10000, redLine: 1522 },
    { index: 600, blueLine: 0 },
    { index: 10000, blueLine: 678 },
];

export default function Chart(props){
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


    return (
        <React.Fragment>
            <Grid xs={12}>
                <Paper className={classes.title} elevation={3}>
                    {(props.fontWidth ? <h1 className={classes.h1Style}>Correlation</h1>
                        :<h2 className={classes.h1Style}>Correlation</h2>)}
                </Paper>
                <React.Fragment>
                    <ResponsiveContainer width="100%" aspect={props.aspect}>
                        <ComposedChart
                            data={data}
                            margin={{
                                top: 20, right: 80, bottom: 20, left: 20,
                            }}
                        >
                            <CartesianGrid stroke="gray" strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Legend />
                            <XAxis unit="mmHg" dataKey="index" type="number" label={{ value: 'Systole', position: 'insideBottomRight', offset: 0 }} />
                            <YAxis tickCount="10" type="number" label={{ value: 'Diastole', angle: -90, position: 'insideLeft' }} />
                            <Scatter name="Night Phase" dataKey="red" fill="#009933" />
                            <Scatter name="Day Phase" dataKey="blue" fill="#990033" />
                            <Line name="Day Phase" dataKey="blueLine" stroke="#990033" dot={false} activeDot={false} legendType="none" />
                            <Line dataKey="redLine" stroke="#009933" dot={false} activeDot={false} legendType="none" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </React.Fragment>
            </Grid>

        </React.Fragment>
    );
}