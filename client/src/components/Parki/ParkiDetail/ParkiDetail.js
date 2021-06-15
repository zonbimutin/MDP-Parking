import React, {useEffect, useState, createRef} from 'react'
import { DateUtils } from 'react-day-picker';

import useSearch from '../../../hooks/useSearch'

import {Dimmer, Image, Loader, Rail, Ref} from 'semantic-ui-react'
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

    const handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, selectedDays);
        let newSearch = {
            ...search,
            selectedDays: range
        }
        setSearch(newSearch)
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
                                            <Image src={image} />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                            <div className="ParkiDetail__images">
                                <ParkiMap coordinates={parki.coordinates} />
                            </div>
                        </div>
                        <div className="ParkiDetail__host">
							<div className="ParkiDetail__host__image">
								<img src="https://picsum.photos/900/900"/>
							</div>
							<div className="ParkiDetail__host__name">HUOT Alexandre</div>
                        </div>
                        <div className="ParkiDetail__info">
                            <div className="ParkiDetail__info__section">
                                <div className="ParkiDetail__info__section__title">Description:</div>
                                <div className="ParkiDetail__info__section__description">Je loue ma place de parking à la semaine, idéal si vous travailler ou étudierSitué à Annecy centre, facile d’accès, à 3 minutes à pied de la gare, lac et proche de toutes commodités et transports public. À l’abri dans un parking fermer.</div>
                            </div>
                            <div className="ParkiDetail__info__section">
                                <div className="ParkiDetail__info__section__title">Type de place:</div>
                                <div className="ParkiDetail__info__section__description">
                                    <div className="btn-group">
                                        <button className={"ui icon button"}><img src={"/assets/images/parki/types/electric.svg"}></img></button>
                                        <button className={"ui icon button"}><img src={"/assets/images/parki/types/large.svg"}></img></button>
                                    </div>
                                </div>
                            </div>
                            <div className="ParkiDetail__info__section">
                                <div className="ParkiDetail__info__section__title">Type de voiture:</div>
                                <div className="ParkiDetail__info__section__description">
                                    <div className="btn-group">
                                        <button className={"ui icon button"}><img src={"/assets/images/parki/types/electric.svg"}></img></button>
                                        <button className={"ui icon button"}><img src={"/assets/images/parki/types/large.svg"}></img></button>
                                    </div>
                                </div>
                            </div>
                            <div className="ParkiDetail__info__section">
                                <div className="ParkiDetail__info__section__title">Moyen d'accèss:</div>
                                <div className="ParkiDetail__info__section__description">Un badge vous sera prêté à l’aide d’un code.</div>
                            </div>
                        </div>
                    </div>
                    <div className="ParkiDetail__booking">
                        <div className="ParkiDetail__sticky">
                            <div className="parki card">
                                <DayRangePickerForm handleDayClick={handleDayClick} selectedDays={selectedDays}/>
                                <div className="ParkiDetail__booking__price">
                                    <div>Total</div>
                                    <div>10€</div>
                                </div>
                            </div>
                            <div className="ParkiDetail__booking__button">
                                <ReserevationButton parki={parki} selectedDays={selectedDays}/>
                            </div>
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
