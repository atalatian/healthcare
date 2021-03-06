import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import OverallStatistics from "./overallStatistics";
import DayPhaseStatistics from "./dayPhaseStatistics";
import NightPhaseStatistics from "./nightPhaseStatistics";
import DayNightAnalysis from "./dayNightAnalysis";
import GraphicalView from "../singleValue/graphicalView";


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


function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}



function OverviewVertical(props){
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const innerPanelPadding = 24;

    const all = innerPanelPadding*2;

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        tabs: {
            borderRight: `1px solid ${theme.palette.divider}`,
        },
        panel: {
            margin: "auto",
            "& > div": {
                padding: "0 !important",
                paddingTop: innerPanelPadding + "px !important",
            },
            width: "100%",
        }
    }));
    const classes = useStyles();

    return(
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
                    <Tab label="Overall Statistics" {...a11yProps(0)} />
                    <Tab label="Day Phase Statistics" {...a11yProps(1)} />
                    <Tab label="Night Phase Statistics" {...a11yProps(2)} />
                    <Tab label="Day and Night Analysis" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel className={classes.panel} value={value} index={0}>
                <OverallStatistics borderRadius={props.borderRadius}
                                   fontWidth={props.fontWidth}/>
            </TabPanel>
            <TabPanel className={classes.panel} value={value} index={1}>
                <DayPhaseStatistics borderRadius={props.borderRadius}
                                    fontWidth={props.fontWidth}/>
            </TabPanel>
            <TabPanel className={classes.panel} value={value} index={2}>
                <NightPhaseStatistics borderRadius={props.borderRadius}
                                      fontWidth={props.fontWidth}/>
            </TabPanel>
            <TabPanel className={classes.panel} value={value} index={3}>
                <DayNightAnalysis borderRadius={props.borderRadius}
                                  fontWidth={props.fontWidth}/>
            </TabPanel>
        </div>
    );
}




export default OverviewVertical;