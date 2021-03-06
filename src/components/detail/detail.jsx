import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import OverviewVertical from "./overview/overviewVertical";
import OverviewHorizontal from "./overview/overviewHorizontal";
import SingleValueVertical from "./singleValue/singleValueVertical";
import HourlyAveragesVertical from "./hourlyAverages/hourlyAveragesVertical";
import HistogramVertical from "./histogram/histogramVertical";
import PieGraphicsVertical from "./pieGraphic/pieGraphicVertical";
import Correlation from "./correlation/correlation";
import Findings from "./findings/findings";
import Bar from "./bar";
import useMedia from "../useMedia";
import SingleValueHorizontal from "./singleValue/singleValueHorizontal";
import HourlyAveragesHorizontal from "./hourlyAverages/hourlyAveragesHorizontal";
import HistogramHorizontal from "./histogram/histogramHorizontal";
import PieGraphicsHorizontal from "./pieGraphic/pieGraphicHorizontal";



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

function Detail(props) {
    const [value, setValue] = React.useState(0);
    const outerPanelPadding = 10;
    let aspect;
    let pieGraphicsAspect;
    let width;
    let correlationAspect;
    let fontWidth;
    let borderRadius;
    let histogramWidth;
    let breakPoint = useMedia();

    if (breakPoint.name === "xs"){
        aspect = 1;
        width = 100;
        pieGraphicsAspect = 1.5;
        correlationAspect = 1;
        fontWidth = false;
        borderRadius = 0;
        histogramWidth = "95%"
    }else if (breakPoint.name === "sm"){
        aspect = 1;
        width = 100;
        pieGraphicsAspect = 1.5;
        correlationAspect = 1.8;
        fontWidth = true;
        borderRadius = 4;
        histogramWidth = "95%"
    }else if (breakPoint.name === "md"){
        aspect = 2;
        width = 49;
        correlationAspect = 2;
        pieGraphicsAspect = 2;
        fontWidth = true;
        borderRadius = 4;
        histogramWidth = "100%"
    }else if (breakPoint.name === "lg"){
        aspect = 3;
        width = 49;
        correlationAspect = 2;
        pieGraphicsAspect = 2.5;
        fontWidth = true;
        borderRadius = 4;
        histogramWidth = "100%"
    }else if (breakPoint.name === "xl"){
        aspect = 5;
        width = 32;
        pieGraphicsAspect = 2.5;
        correlationAspect = 2.5;
        fontWidth = true;
        borderRadius = 4;
        histogramWidth = "100%"
    }


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        panel: {
            "& > div": {
                padding: "0 !important",
                paddingTop: outerPanelPadding + "px !important",
            }
        }
    }));


    const classes = useStyles();

    return (
        <React.Fragment>
            <Bar/>
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="primary"
                        aria-label="scrollable force tabs example"
                    >
                        <Tab label="Overview" {...a11yProps(0)} />
                        <Tab label="Single Values" {...a11yProps(1)} />
                        <Tab label="Hourly Averages" {...a11yProps(2)} />
                        <Tab label="Histogram" {...a11yProps(3)} />
                        <Tab label="Pie Graphic" {...a11yProps(4)} />
                        <Tab label="Correlation" {...a11yProps(5)} />
                        <Tab label="Findings" {...a11yProps(6)} />
                    </Tabs>
                </AppBar>
                <TabPanel className={classes.panel} value={value} index={0}>
                    {(breakPoint.value >= 1 ?
                        <OverviewHorizontal fontWidth={fontWidth} borderRadius={borderRadius}/>
                        : <OverviewVertical fontWidth={fontWidth} borderRadius={borderRadius}/>)}
                </TabPanel>
                <TabPanel className={classes.panel} value={value} index={1}>
                    {(breakPoint.value >= 1 ?
                        <SingleValueHorizontal fontWidth={fontWidth}
                                               aspect={aspect}
                                               borderRadius={borderRadius}
                                               outerPanelPadding={outerPanelPadding}/>
                        : <SingleValueVertical fontWidth={fontWidth}
                                               borderRadius={borderRadius}
                                               aspect={aspect}
                                               outerPanelPadding={outerPanelPadding}/>)}
                </TabPanel>
                <TabPanel className={classes.panel} value={value} index={2}>
                    {(breakPoint.value >= 1 ?
                        <HourlyAveragesHorizontal fontWidth={fontWidth}
                                                  aspect={aspect}
                                                  borderRadius={borderRadius}
                                                  outerPanelPadding={outerPanelPadding}/>
                        : <HourlyAveragesVertical fontWidth={fontWidth}
                                                  aspect={aspect}
                                                  borderRadius={borderRadius}
                                                  outerPanelPadding={outerPanelPadding}/>)}
                </TabPanel>
                <TabPanel className={classes.panel} value={value} index={3}>
                    {(breakPoint.value >= 1 ?
                        <HistogramHorizontal fontWidth={fontWidth}
                                           aspect={aspect}
                                           borderRadius={borderRadius}
                                           histogramWidth={histogramWidth}/>
                        :<HistogramVertical fontWidth={fontWidth}
                                              aspect={aspect}
                                              borderRadius={borderRadius}
                                              histogramWidth={histogramWidth}/>)}
                </TabPanel>
                <TabPanel className={classes.panel} value={value} index={4}>
                    {(breakPoint.value >= 1 ?
                        <PieGraphicsHorizontal fontWidth={fontWidth}
                                                width={width}
                                               aspect={pieGraphicsAspect}
                                               borderRadius={borderRadius}/>
                        : <PieGraphicsVertical fontWidth={fontWidth}
                                                 width={width}
                                               borderRadius={borderRadius}
                                               aspect={pieGraphicsAspect}/>)}
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <Correlation fontWidth={fontWidth}
                                 borderRadius={borderRadius}
                                 aspect={correlationAspect}/>
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <Findings borderRadius={borderRadius}
                              fontWidth={fontWidth}/>
                </TabPanel>
            </div>
        </React.Fragment>

    );
}


export default Detail;