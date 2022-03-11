import React, { useState } from 'react';
//REACT-CALENDAR
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
//SCSS
import './index.scss';


function DatePicker() {
    const [ date, setDate ] = useState(new Date());


    return (
        <Calendar
            value={date}
            onChange={(e) => setDate(e)}
            defaultView="month"     /* to diable month button */
            minDetail="month"       /* to diable month button */
        />
    )
}

export default DatePicker;