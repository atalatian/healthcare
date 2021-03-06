import React from "react";
import {Controller} from "react-hook-form";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
} from '@material-ui/pickers';


export default function End(props){

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Controller
                control={props.control}
                name="nighttimeEnd"
                as={
                    <KeyboardTimePicker
                        id="time-picker"
                        label="Night Phase Ends at:"
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