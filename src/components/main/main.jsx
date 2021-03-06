import React from "react";
import Bar from "./bar";
import Search from "./search";
import Logo from "./logo";
import {makeStyles} from "@material-ui/core/styles";
import useMedia from "../useMedia";
import {Button} from "@material-ui/core";



export default function Main() {
    const [searchValue, setSearchValue] = React.useState("");
    let width;

    const breakpoint = useMedia();

    if (breakpoint.name === "xs"){
        width = 95;
    }else{
        width = 60;
    }

    const useStyles = makeStyles({
        wrapper: {
            display: "flex",
            flexDirection: "column",
            width: width + "%",
            marginTop: "24px",
            margin: "auto",
        },
        button:{
            marginTop: "10px"
        }
    });

    const classes = useStyles();

    return (
        <React.Fragment>
            <Bar/>
            <div className={classes.wrapper}>
                <Logo/>
                <Search setSearchValue={setSearchValue}/>
                <Button className={classes.button} color='primary' variant='contained' href="#/detail">
                    Detail
                </Button>
            </div>

        </React.Fragment>
    );
}