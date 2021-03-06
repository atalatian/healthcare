import React from "react";
import {Controller} from "react-hook-form";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
} from '@material-ui/pickers';


export default function Start(props){

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Controller
                control={props.control}
                name="daytimeStart"
                as={
                    <KeyboardTimePicker
                        id="time-picker"
                        label="Day Phase Starts at:"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                }
            />
        </MuiPickersUtilsProvider>
    );
}