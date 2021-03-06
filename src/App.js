import './App.css';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from "./components/main/main";
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
                        <Main/>
                    </Route>
                    <Route exact path="/detail/">
                        <Detail/>
                    </Route>
                </React.Fragment>
            </Switch>
        </HashRouter>
    );
}

export default App;
