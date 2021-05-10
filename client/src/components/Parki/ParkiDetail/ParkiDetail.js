import React, {useEffect, useState} from 'react'
import { DateUtils } from 'react-day-picker';
import {Grid, Image} from 'semantic-ui-react'


import DayRangePickerForm from '../../DayRangePickerForm'
import ReserevationButton from '../../ReservationButton'

import './ParkiDetail.scss'

const ParkiDetail = () => {

    const [selectedDays, setSelectedDays] = useState({
        from: undefined,
        to: undefined,
    });


    const [image, setImage] = useState('/assets/images/bg/paralax/bg-image-2.jpg')

    useEffect(() => {
        fetch('https://picsum.photos/1990/900')
            .then(data => setImage(data.url))
    }, [])

    const handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, selectedDays);
        setSelectedDays(range);
    }
    

    return (
        <div className="ParkiDetail">
            <div className="ParkiDetail__image">
                <Image src={image} size='medium' />
            </div>
            <div className="ParkiDetail__booking">
                <div className="parki card">
                    <DayRangePickerForm handleDayClick={handleDayClick} selectedDays={selectedDays}/>
                </div>
                <div>
                    <ReserevationButton selectedDays={selectedDays}/>
                </div>

            </div>
            <div className="ParkiDetail__booking">
            </div>
            <div className="ParkiDetail__host">
            </div>
            <div className="ParkiDetail__info">
                <div className="ParkiDetail__description">
                </div>
                <div className="ParkiDetail__facilities">
                </div>
                <div className="ParkiDetail__type">
                </div>
                <div className="ParkiDetail__acces">
                </div>
            </div>
        </div>
    )
}

export default ParkiDetail
