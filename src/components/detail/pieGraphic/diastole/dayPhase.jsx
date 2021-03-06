import React from 'react';
import {
    PieChart, Pie, Cell, Text, ResponsiveContainer,
} from 'recharts';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

const data = [
    { name: 'Normal', value: 480 },
    { name: 'Acceptable', value: 480 },
    { name: 'Critical', value: 40 },
];

const COLORS = ["gray", "#009933", "#990033",];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
                                   cx, cy, midAngle, innerRadius, outerRadius, percent,
                               }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <Text x={x} y={y} fill="white" textAnchor="middle" verticalAnchor="middle">
            {`${(percent * 100).toFixed(0)}%`}
        </Text>
    );
};

export default function DayPhase(props){

    const useStyles = makeStyles({
        subTitle: {
            backgroundColor: "white !important",
            color: "#ec6602 !important",
            borderRadius: props.borderRadius,
        },
        h2Style: {
            margin: "0",
            padding: "10px",
        },
        wrapper: {
            width: props.width + "%",
        }
    });

    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.wrapper}>
                <Paper className={classes.subTitle} elevation={3}>
                    {(props.fontWidth ?
                        <h2 className={classes.h2Style}>Day Phase (06:00 - 12:59) - Limit Values 140/90 mmHg</h2>
                        :<h3 className={classes.h2Style}>Day Phase (06:00 - 12:59) - Limit Values 140/90 mmHg</h3>)}
                </Paper>
                <ResponsiveContainer width="100%" aspect={props.aspect || 1.5}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx={props.cx || "50%"}
                            cy="50%"
                            isAnimationActive={props.isAnimationActive}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            innerRadius="45%"
                            outerRadius="65%"
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {
                                data.map((entry, index) =>
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                            }
                        </Pie>
                        <Pie data={data} dataKey="value"
                             cx={props.cx || "50%"}
                             cy="50%"
                             innerRadius="65%"
                             outerRadius="65%"
                             isAnimationActive={props.isAnimationActive}
                             fill="#8884d8"
                             labelLine={true}
                             label={(entry) => entry.name}
                        >
                            {
                                data.map((entry, index) =>
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                            }
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </React.Fragment>
    );
}