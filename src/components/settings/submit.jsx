import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(0),
    },
}));

export default function Submit(){
    const classes = useStyles();

    return(
        <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            className={classes.button}
            startIcon={<SaveIcon />}
        >
            Save
        </Button>
    );
}