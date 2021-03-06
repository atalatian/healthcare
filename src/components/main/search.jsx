import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';





export default function Search(props){
    const [propertyValue, setPropertyValue] = React.useState("")

    const useStyles = makeStyles({
        wrapper: {
            display: "flex",
        },
        searchBar: {
            width: "95%",
            "& > div": {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
            },
            "& > div fieldset": {
                borderRight: 0,
                borderColor: propertyValue,
            },
        },
        searchButton: {
            width: "5%",
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            backgroundColor: "#ec6602",
            color: "white",
            "&:hover": {
                backgroundColor: "#ec6602",
            }
        },
    });

    const handleOnFocus = () => {
        setPropertyValue("#ec6602 !important");
    }

    const handleOnBlur = () => {
        setPropertyValue("");
    }

    const classes = useStyles();

    const [searchValue, setSearchValue] = React.useState("")

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleClick = () => {
        props.setSearchValue(searchValue);
    }

    return(
        <React.Fragment>
            <div className={classes.wrapper}>
                <TextField onFocus={handleOnFocus}
                           onChange={handleChange}
                           onBlur={handleOnBlur}
                           className={clsx(classes.searchBar)}
                           id="outlined-basic"
                           label="Search Here!" variant="outlined"/>
               <Button onClick={handleClick} className={clsx(classes.searchButton)}
                       variant="contained">
                   <SearchIcon/>
               </Button>
            </div>
        </React.Fragment>
    );
}