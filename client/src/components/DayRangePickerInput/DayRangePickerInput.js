import React, {useRef} from 'react'

import {Icon} from 'semantic-ui-react';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import {formatDate, parseDate, } from 'react-day-picker/moment';
  
import 'moment/locale/it';



import './DayRangePickerInput.scss'

const DayRangePickerInput = ({selectedDays, handleDayClick}) => {

    const toRef = useRef(null)

    let { from, to } = selectedDays;
    const modifiers = { start: from, end: to };

    return (
        <div className='DayRangePickerInput'>
            <div className="parki form-group">
                <div className="input-icon">
                    <DayPickerInput
                        component={props => <input type="text" className="form-control" {...props}/>}
                        value={from}
                        placeholder="Début"
                        formatDate={formatDate}
                        parseDate={parseDate}
                        format="LL"
                        dayPickerProps={{
                            selectedDays: [from, { from, to }],
                            disabledDays: { after: to },
                            toMonth: to,
                            modifiers,
                            numberOfMonths: 2,
                            onDayClick: () => toRef.current.focus(),
                        }}
                        onDayChange={handleDayClick}
                    />
                    <span>
                        <Icon disabled name='marker' />
                    </span>
                </div>
            </div>

            <div className="parki form-group">
                <div className="input-icon">
                    <DayPickerInput
                        ref={toRef}
                        component={props => <input ref={toRef} type="text" className="form-control" {...props}/>}
                        value={to}
                        placeholder="Fin"
                        formatDate={formatDate}
                        parseDate={parseDate}
                        format="LL"
                        dayPickerProps={{
                            selectedDays: [from, { from, to }],
                            disabledDays: { before: from },
                            modifiers,
                            month: from,
                            fromMonth: from,
                            numberOfMonths: 2,
                        }}
                        onDayChange={handleDayClick}
                    />
                    <span>
                        <Icon disabled name='marker' />
                    </span>
                </div>
            </div>
            
            
        </div>
    )
}

export default DayRangePickerInput
