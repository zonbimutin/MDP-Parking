import React,{useEffect, useState} from 'react'
import { useHistory } from 'react-router';

import ParkiBookingAccordion from '../ParkiBookingAccordion/ParkiBookingAccordion';

import { Image, Icon, Popup, Label} from 'semantic-ui-react';

import './ParkiItemHost.scss'
const ParkiItemHost = ({parki}) => {

    const history = useHistory();
    const [image, setImage] = useState('/assets/images/bg/paralax/bg-image-2.jpg')

    useEffect(() => {
        fetch('https://picsum.photos/1990/900')
            .then(data => setImage(data.url))
    }, [])

    const handleParkiDetail = () => {
        let location = {
            pathname: `/parki/${parki.id}`,
            state: {}
        }
        history.push(location)
    }

    useEffect(() => {

    }, [])

    const created = new Date(parseInt(parki.createAt)).toDateString()

    return (
        <div className="ParkiItemHost">
            <div className="ParkiItemHost__item">
                <div className='ParkiItemHost__image'>
                    <div>
                        <Image  rounded src={image} />
                    </div>
                </div>
                <div className="ParkiItemHost__info">
                    <div className="description label">{parki.address} <Label color={parki.isActive ? 'green' : 'red'} horizontal>{parki.isActive ? 'Activé' : 'Desactivé'}</Label></div>
                    <div className="description">{parki.city}, {parki.country} {parki.zipCode}</div>
                    <div className="Reservation__parkiId">
                        <span>Parking id: {parki.id}</span>
                        <span>Créé le: {created}</span>
                    </div> 
                    <div className="ParkiItemHost__type">
                        <div className="btn-group">
                        {parki.parkingType.map((type, index) => (
                            <Popup key={index} content={`${type.label}`} trigger={<div className={"ui icon button"}><img src={`/assets/images/parki/types/${type.img}.svg`}></img></div>} />
                            
                        ))}
                            
                        </div>
                    </div>
                </div>
                <div className="ParkiItemHost__actions">
                    <div className="btn-group">
                        <button className="parki btn btn-gradient-primary">Desactiver</button>
                        <button className={'parki btn btn-gradient-primary icon'} onClick={handleParkiDetail}><Icon name='plus' /></button>
                    </div>
                </div>     
            </div>
            { parki.bookings && parki.bookings.length > 0 &&
                <div className="ParkiItemHost__bookings">
                    <ParkiBookingAccordion bookings={parki.bookings}/>
                </div>
            }
        </div>
    )
}

export default ParkiItemHost
