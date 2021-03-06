import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import OverallStatistics from "./overallStatistics";
import DayPhaseStatistics from "./dayPhaseStatistics";
import NightPhaseStatistics from "./nightPhaseStatistics";
import DayNightAnalysis from "./dayNightAnalysis";
import useWindowSize from "../../useWindowSize";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


export default function OverviewHorizontal(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const innerPanelPadding = 24;
    const verticalTabsWidth = "160px";

    const all = innerPanelPadding*2;

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
            display: 'flex',
            height: 224,
        },
        tabs: {
            borderRight: `1px solid ${theme.palette.divider}`,
            maxWidth: verticalTabsWidth + "%",
        },
        panel: {
            margin: "auto",
            "& > div": {
                padding: innerPanelPadding,
            },
            width: `calc(100% - ${all}px - ${verticalTabsWidth} )`,
        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="PieGraphicsVertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Overall Statistics" {...a11yProps(0)} />
                <Tab label="Day Phase Statistics" {...a11yProps(1)} />
                <Tab label="Night Phase Statistics" {...a11yProps(2)} />
                <Tab label="Day and Night Analysis" {...a11yProps(3)} />
            </Tabs>
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