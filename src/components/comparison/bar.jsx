import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { mdiArrowLeftCircle } from '@mdi/js';
import Icon from '@mdi/react'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Bar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton href="#/dashboard"
                                edge="start"
                                className={classes.menuButton}
                                color="inherit" aria-label="menu">
                        <Icon path={mdiArrowLeftCircle}
                              title="Back"
                              size={1}
                              color="white"
                        />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}