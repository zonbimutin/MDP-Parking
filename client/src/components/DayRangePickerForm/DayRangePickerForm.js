import React from 'react'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './DayRangePickerForm.scss'

const DayRangePickerForm = ({selectedDays, handleDayClick, disabledDays}) => {


    const { from, to } = selectedDays;
    const modifiers = { start: from, end: to};
    const today = new Date();
    // const modifiers = { disabled: { daysOfWeek: [0] }, };
    
    return (


        <div className={'DayRangePickerForm'}>
            <DayPicker
                selectedDays={[from, { from, to }]}
                modifiers={modifiers}
                onDayClick={handleDayClick}
                // disabledDays={disabledDays ? disabledDays : []}
                disabledDays={{ before: today }}
            />
        </div>
    )
}

export default DayRangePickerForm
