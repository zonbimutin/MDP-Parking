import React, {useEffect, useState, createRef} from 'react'
import { DateUtils } from 'react-day-picker';
import {Grid, Image, Sticky, Rail, Ref} from 'semantic-ui-react'
import Slider from "react-slick";


import DayRangePickerForm from '../../DayRangePickerForm'
import ReserevationButton from '../../ReservationButton'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './ParkiDetail.scss'

const ParkiDetail = () => {

    const [selectedDays, setSelectedDays] = useState({
        from: undefined,
        to: undefined,
    });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const [images, setImages] = useState(['/assets/images/bg/paralax/bg-image-2.jpg'])

    useEffect(() => {
        fetch('https://picsum.photos/1990/900')
            .then(data => {
                let newimages = [...images]
                newimages.push(data.url)
                setImages(newimages)
            })
    }, [])

    const handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, selectedDays);
        setSelectedDays(range);
    }
    

    return (
        <div className="ParkiDetail">
            <div className="ParkiDetail__content">
                <div className="ParkiDetail__images">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <Image src={image} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="ParkiDetail__booking">
                <div className="ParkiDetail__sticky">
                    <div className="parki card">
                        <DayRangePickerForm handleDayClick={handleDayClick} selectedDays={selectedDays}/>
                    </div>
                    <div>
                        <ReserevationButton selectedDays={selectedDays}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParkiDetail
