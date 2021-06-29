import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router';

import { Image, Icon, Popup, Label} from 'semantic-ui-react';

import './BookingItem.scss'

const BookingItem = ({booking}) => {

    const history = useHistory();
    const [image, setImage] = useState('/assets/images/bg/paralax/bg-image-2.jpg')

    useEffect(() => {
        fetch('https://picsum.photos/1990/900')
            .then(data => setImage(data.url))
    }, [])

    const handleParkiDetail = () => {
        let location = {
            pathname: `/parki/${booking.parkingId.id}`,
            state: {}
        }
        history.push(location)
    }

    console.log(booking)

    
    const created = new Date(parseInt(booking.createAt)).toDateString()
    const start = new Date(parseInt(booking.startDate)).toDateString()
    const end = new Date(parseInt(booking.endDate)).toDateString()

    return (
        <div className="BookingItem ParkiItemHost">
            <div className="ParkiItemHost__item">
                <div className='ParkiItemHost__image'>
                    <div>
                        <Image  rounded src={image} />
                    </div>
                </div>
                <div className="BookingItem__info">
                    <div className="Reservation__parkiId">
                        <span>Reservation id: {booking.id}</span>
                        <span>Créé le: {created}</span>
                    </div> 
                    <div className="dates label">Date de reservation de {start} au {end}</div>
                    <div>
                        <Label color={booking.bookingStatus == 'active' ? 'green' : 'red'} horizontal>{booking.bookingStatus}</Label>
                    </div>
                    <div className="description label">{booking.parkingId.address}</div>
                    <div className="description">{booking.parkingId.city}, {booking.parkingId.country} {booking.parkingId.zipCode}</div>
                    <div className="Reservation__parkiId">
                        <span>Parking id: {booking.parkingId.id}</span>
                    </div> 
                </div>
                <div className="ParkiItemHost__actions">
                    <div className="btn-group">
                        <button className="parki btn btn-gradient-primary">Desactiver</button>
                        <button className={'parki btn btn-gradient-primary icon'} onClick={handleParkiDetail}><Icon name='plus' /></button>
                    </div>
                </div>     
            </div>
        </div>
    )
}

export default BookingItem
