import React, {useEffect, useState} from 'react'
import { DateUtils } from 'react-day-picker';

import useSearch from '../../../hooks/useSearch'

import {Dimmer, Image, Loader, Popup} from 'semantic-ui-react'
import Slider from "react-slick";



import DayRangePickerForm from '../../DayRangePickerForm'
import ReserevationButton from '../../ReservationButton'
import ParkiMap from '../../Maps/ParkiMap'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './ParkiDetail.scss'

const ParkiDetail = ({parki}) => {

    const [selectedDays, setSelectedDays] = useState({
        from: undefined,
        to: undefined,
    });

    const [disabledDays, setDisabledDays] = useState([])

    const {search, setSearch} = useSearch() 


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
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

    useEffect(() => {
        if(search){
            const {selectedDays} = search
            setSelectedDays(selectedDays)
        }
    }, [search])

    useEffect(() => {
        console.log('heyyy')
        if(parki && parki.bookings){

            let newDisabled = []

            parki.bookings.forEach(booking => {
                const {startDate, endDate} = booking
                let daysRange = {
                    after: new Date(parseInt(startDate) - (24*60*60*1000)),
                    before: new Date(parseInt(endDate) + (24*60*60*1000)),
                }
                newDisabled.push(daysRange)
            });
            console.log(newDisabled)
            setDisabledDays(newDisabled)
        }
    }, [parki])

    const handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, selectedDays);
        let newSearch = {
            ...search,
            selectedDays: range
        }
        setSearch(newSearch)
    }

    const getTotalPrice = (selectedDays) => {

        const {from, to} = selectedDays
        let totalPrice = 0

        let days = parseInt((to.getTime()- from.getTime())/(24*3600*1000) + 1);

        if( days > 0 && days <= 3) totalPrice = parki.prices.single * days
        if( days > 3 ) totalPrice = parki.prices.multiple * days
        if( days >= 29 ) totalPrice = parki.prices.subscription * days
   

        

        return totalPrice
    }

    const getTotalDays = (selectedDays) => {
        const {from, to} = selectedDays
        let days = parseInt((to.getTime()- from.getTime())/(24*3600*1000) + 1);
        return days
    }
    

    return (
        <>
            {parki ? (
                <div className="ParkiDetail parki container">
                    <div className="ParkiDetail__content">
                        <div className="ParkiDetail__header">
                            <div className="ParkiDetail__images">
                                <Slider {...settings}>
                                    {images.map((image, index) => (
                                        <div key={index}>
                                            <Image src={image} alt="parking image" />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                            <div className="ParkiDetail__map">
                                <ParkiMap coordinates={parki.coordinates} />
                            </div>
                        </div>
                        <div className="ParkiDetail__host">
							<div className="ParkiDetail__host__image">
								<img src="https://picsum.photos/900/900"/>
							</div>
							<div className="ParkiDetail__host__name">{`${parki.user.lastname.toUpperCase()} ${parki.user.firstname.charAt(0).toUpperCase() + parki.user.firstname.slice(1)}`}</div>
                        </div>
                        <div className="ParkiDetail__info">
                            <div className="ParkiDetail__info__section">
                                <div className="ParkiDetail__info__section__title">Description:</div>
                                <div className="ParkiDetail__info__section__description">{parki.description}</div>
                            </div>
                            <div className="ParkiDetail__info__section">
                                <div className="ParkiDetail__info__section__title">Type de place:</div>
                                <div className="ParkiDetail__info__section__description">
                                    <div className="btn-group">
                                    {parki.parkingType.map((type, index) => (
                                        <Popup key={index} content={`${type.label}`} trigger={<div className={"ui icon button"}><img src={`/assets/images/parki/types/${type.img}.svg`}></img></div>} />
                                        
                                    ))}
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="ParkiDetail__info__section">
                                <div className="ParkiDetail__info__section__title">Disponibilité:</div>
                                <div className="ParkiDetail__info__section__description">
                                    {parki.disponibility == 24 ? (
                                        <span>24 heures</span>
                                    ) : (
                                        <span>de 8h à 22h</span>
                                    )}
                                </div>
                            </div>
                            <div className="ParkiDetail__info__section">
                                <div className="ParkiDetail__info__section__title">Moyen d'accèss:</div>
                                <div className="ParkiDetail__info__section__description">{parki.access}</div>
                            </div>
                        </div>
                    </div>
                    <div className="ParkiDetail__booking">
                        <div className="ParkiDetail__sticky">
                            <div className="parki card">
                                <DayRangePickerForm handleDayClick={handleDayClick} selectedDays={selectedDays} disabledDays={disabledDays}/>
                                {selectedDays.from && selectedDays.to &&
                                    <div className="ParkiDetail__booking__price">
                                        <div>{`Total(${getTotalDays(selectedDays)} jours)`}</div>
                                        <div>{`${getTotalPrice(selectedDays)}€`}</div>
                                    </div>
                                }
                            </div>

                            {selectedDays.from && selectedDays.to ? (
                                <div className="ParkiDetail__booking__button">
                                    <ReserevationButton parki={parki} selectedDays={selectedDays}/>
                                </div>
                            ) : (
                                <div className="info">
                                    <span>Sélectionnez les jours que vous souhaitez réserver</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                
            ):(
                <Dimmer active inverted>
                    <Loader inverted>Loading</Loader>
                </Dimmer>
            )}
        </>
    )
}

export default ParkiDetail
