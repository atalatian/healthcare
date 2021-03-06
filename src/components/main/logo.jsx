import React from "react"
import Image from "../test/logo-placeholder.png";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    wrapper: {
        width: "100%",
        textAlign: "center",
    },
});

export default function Logo(){
    const classes = useStyles();

    return(
        <React.Fragment>
            <div className={classes.wrapper}>
                <img width="100%" src={Image} alt="logo"/>
            </div>
        </React.Fragment>
    );
}