import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import Bar from "../detail/bar";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import OverviewVertical from "../detail/overview/overviewVertical";
import SingleValueVertical from "../detail/singleValue/singleValueVertical";
import HourlyAveragesVertical from "../detail/hourlyAverages/hourlyAveragesVertical";
import HistogramVertical from "../detail/histogram/histogramVertical";
import PieGraphicsVertical from "../detail/pieGraphic/pieGraphicsVertical";
import Correlation from "../detail/correlation/correlation";
import Findings from "../detail/findings/findings";

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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

function Record() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <React.Fragment>
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
                        <Tab label="OverviewVertical" {...a11yProps(0)} />
                        <Tab label="Single Values" {...a11yProps(1)} />
                        <Tab label="Hourly Averages" {...a11yProps(2)} />
                        <Tab label="HistogramVertical" {...a11yProps(3)} />
                        <Tab label="Pie Graphic" {...a11yProps(4)} />
                        <Tab label="Correlation" {...a11yProps(5)} />
                        <Tab label="Findings" {...a11yProps(6)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <OverviewVertical comparison={true}/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <SingleValueVertical comparison={true}/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <HourlyAveragesVertical comparison={true}/>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <HistogramVertical comparison={true}/>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <PieGraphicsVertical comparison={true}/>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <Correlation comarison={true}/>
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <Findings comparison={true}/>
                </TabPanel>
            </div>
        </React.Fragment>

    );
}


export default Record;