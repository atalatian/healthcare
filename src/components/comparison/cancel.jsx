import React from 'react';
import Button from '@material-ui/core/Button';

const STYLE = {
    borderRadius: 0,
}


export default function Cancel(props) {

    const handleClick = () => {
        props.render(false);
    }

    return (
        <Button style={STYLE} onClick={handleClick} variant="contained" fullWidth color="primary" disableElevation>
            Cancel
        </Button>
    );
}