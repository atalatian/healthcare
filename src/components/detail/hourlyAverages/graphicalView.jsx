import React from "react";
import {
    LineChart,
    Line,
    ResponsiveContainer,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from 'recharts';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";



const data = [
    {
        "name": "00:00",
        "Systole": 10,
        "MAP": 20,
        "Diastole": 30,
        "Average1": 40,
        "Average2": 50,
        "HR":60,
    },
    {
        "name": "02:00",
        "Systole": 20,
        "MAP": 30,
        "Diastole": 40,
        "Average1": 50,
        "Average2": 60,
        "HR":70,
    },
    {
        "name": "04:00",
        "Systole": 15,
        "MAP": 25,
        "Diastole": 35,
        "Average1": 45,
        "Average2": 55,
        "HR":65,
    },
    {
        "name": "06:00",
        "Systole": 25,
        "MAP": 35,
        "Diastole": 45,
        "Average1": 55,
        "Average2": 65,
        "HR":75,
    },
    {
        "name": "08:00",
        "Systole": 35,
        "MAP": 45,
        "Diastole": 55,
        "Average1": 65,
        "Average2": 75,
        "HR":85,
    },
    {
        "name": "10:00",
        "Systole": 30,
        "MAP": 40,
        "Diastole": 50,
        "Average1": 60,
        "Average2": 70,
        "HR":80,
    },
    {
        "name": "12:00",
        "Systole": 40,
        "MAP": 50,
        "Diastole": 60,
        "Average1": 70,
        "Average2": 80,
        "HR":90,
    },
    {
        "name": "14:00",
        "Systole": 50,
        "MAP": 60,
        "Diastole": 70,
        "Average1": 80,
        "Average2": 90,
        "HR":100,
    },
    {
        "name": "16:00",
        "Systole": 45,
        "MAP": 55,
        "Diastole": 65,
        "Average1": 75,
        "Average2": 85,
        "HR":95,
    },
    {
        "name": "18:00",
        "Systole": 55,
        "MAP": 65,
        "Diastole": 75,
        "Average1": 85,
        "Average2": 95,
        "HR":105,
    },
    {
        "name": "20:00",
        "Systole": 65,
        "MAP": 75,
        "Diastole": 85,
        "Average1": 95,
        "Average2": 105,
        "HR":110,
    },
    {
        "name": "22:00",
        "Systole": 60,
        "MAP": 70,
        "Diastole": 80,
        "Average1": 90,
        "Average2": 100,
        "HR":105,
    },
    {
        "name": "24:00",
        "Systole": 70,
        "MAP": 80,
        "Diastole": 90,
        "Average1": 100,
        "Average2": 110,
        "HR":120,
    },
]

function GraphicalView(props){
    const useStyles = makeStyles({
        wrapper: {
            width: "100%",
            textAlign: "center",
        }
    });

    const classes = useStyles();

    return(
        <React.Fragment>
            <Grid xs={12}>
                <Paper style={{backgroundColor: "white",
                    color: "#009999", borderRadius: props.borderRadius }} elevation={3}>
                    {(props.fontWidth ? <h1 className="h1_style">Hourly Averages/Graphical View</h1>
                        :<h2 className="h1_style">Hourly Averages/Graphical View</h2>)}
                </Paper>
            </Grid>
            <React.Fragment>
                <div className="chart">
                    <ResponsiveContainer width="100%" aspect={props.aspect}>
                        <LineChart data={data}
                                   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid stroke="gray" strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis tickCount="10"/>
                            <Tooltip/>
                            <Legend />
                            <Line type="monotone"
                                  strokeWidth="1.5"
                                  dataKey="Systole" stroke="#003399" />
                            <Line type="monotone"
                                  strokeWidth="0.4"
                                  dataKey="MAP" stroke="#990033" />
                            <Line type="monotone"
                                  strokeWidth="1.5"
                                  dataKey="Diastole" stroke="#009933" />
                            <Line type="monotone"
                                  strokeWidth="1.5"
                                  dataKey="Average1" stroke="#990033" />
                            <Line type="monotone"
                                  strokeWidth="1.5"
                                  dataKey="Average2" stroke="#990033" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="chart">
                    <ResponsiveContainer width="100%" aspect={props.aspect}>
                        <LineChart data={data}
                                   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid stroke="gray" strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis tickCount="10" />
                            <Tooltip/>
                            <Legend />
                            <Line type="monotone"
                                  strokeWidth="0.4"
                                  dataKey="HR" stroke="#990033" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </React.Fragment>
        </React.Fragment>
    );
}


export default GraphicalView;