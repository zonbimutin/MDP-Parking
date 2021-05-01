import React, {useState} from 'react';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import './DayPickerForm.scss';


const DayPickerForm = ({selectedDays, handleDayClick}) => {
    return (
        <>
            <DayPicker
                selectedDays={selectedDays}
                onDayClick={handleDayClick}
            />
        </>
    )
}

export default DayPickerForm
