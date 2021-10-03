import './App.css';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Switch, Route, HashRouter } from "react-router-dom";
import "./components/styles.css";
import Detail from "./components/detail/detail";


function App() {
    return (
        <HashRouter>
            <Switch>
                <React.Fragment>
                    <CssBaseline />
                    <Route exact path="/">
                        <Detail/>
                    </Route>
                </React.Fragment>
            </Switch>
        </HashRouter>
    );
}

export default App;
