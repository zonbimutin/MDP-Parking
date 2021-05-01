import React, {useState} from 'react'
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './DayRangePickerForm.scss'

const DayRangePickerForm = ({selectedDays, handleDayClick, handleResetClick}) => {


    const { from, to } = selectedDays;
    const modifiers = { start: from, end: to };
    
    return (


        <div className={'DayRangePickerForm'}>
            <DayPicker
                className="Selectable"
                selectedDays={[from, { from, to }]}
                modifiers={modifiers}
                onDayClick={handleDayClick}
            />
        </div>
    )
}

export default DayRangePickerForm
