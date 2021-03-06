import React from "react";
import Grid from '@material-ui/core/Grid';
import Bar from "./bar";
import SimpleSelect from "./select";
import Detail from "../detail/detail";
import Cancel from "./cancel";
import WarningIcon from '@material-ui/icons/Warning';


const GRID_RIGHT_STYLE = {
    borderLeft: "1px solid #009999",
    position: "absolute",
    left: "50%",
    right: 0,
    top: "64px",
}

const GRID_LEFT_STYLE = {
    borderRight: "1px solid #009999"
}

const ALERT_STYLE = {
    width: "100%",
    minHeight: "inherit",
    backgroundColor: "#009999",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const ALERT_PARAGRAPH_STYLE = {
    margin: "auto",
    padding: 0,
}

const ALERT_ICON_STYLE = {
    margin: "auto",
}

const ALERT_WRAPPER_STYLE = {
    display: "flex",
    flexDirection: "column",
    width: "fit-content",
    height: "fit-content",
}


export default function Comparison(){
    const [renderLeftDetail, setRenderLeftDetail] = React.useState(false);
    const [renderRightDetail, setRenderRightDetail] = React.useState(false);
    const [renderComparison, setRenderComparison] = React.useState(false);

    React.useEffect(()=>{
        if (window.innerWidth <= 600){
            setRenderComparison(false);
        }else {
            setRenderComparison(true);
        }

        window.addEventListener("resize", function (){
            if (window.innerWidth <= 600){
                setRenderComparison(false);
            }else {
                setRenderComparison(true);
            }
        })
    })

    const handleRender = (render,setRender) =>{
        if (render){
            return (
                <React.Fragment>
                    <Cancel render={setRender}/>
                    <Detail responsive={800} renderBar={false} renderAction={false}/>
                </React.Fragment>
            );
        }else{
            return (
                <SimpleSelect render={setRender}/>
            );
        }
    }



    const handleComparisonRender = () =>{
        if (renderComparison){
            return (
                <React.Fragment>
                    <Bar/>
                    <Grid container justify="center" style={ GRID_LEFT_STYLE } item xs={6}>
                        { handleRender(renderLeftDetail, setRenderLeftDetail) }
                    </Grid>
                    <Grid container justify="center" style={ GRID_RIGHT_STYLE } item xs={6}>
                        { handleRender(renderRightDetail, setRenderRightDetail) }
                    </Grid>
                </React.Fragment>
            );
        }else {
            return(
                <React.Fragment>
                    <Bar/>
                    <div style={ALERT_STYLE}>
                        <div style={ALERT_WRAPPER_STYLE}>
                            <div style={ALERT_ICON_STYLE}>
                                <WarningIcon style={{ fontSize: "100px" }}/>
                            </div>
                            <p style={ALERT_PARAGRAPH_STYLE}>
                                Window size is too small for comparison.
                            </p>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
    }

    return(
        <React.Fragment>
            {handleComparisonRender()}
        </React.Fragment>
    );
}