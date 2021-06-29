import React,{useState, useEffect} from 'react'
import { useHistory} from 'react-router-dom';

// GraphQL 
import { useMutation } from "@apollo/client";
import { ADD_BOOKING } from "../../gql/booking";

import useSearch from '../../hooks/useSearch'
// Toast
import { toast } from "react-toastify";

import {Image, Button, Rating, Icon} from 'semantic-ui-react'

import './Reservation.scss'

const Reservation = ({parki}) => {

    const [dates, setDates] = useState({
        from: "",
        to: ""
    })

    const history = useHistory();

    const [addBooking] = useMutation(ADD_BOOKING)

    const [image, setImage] = useState('/assets/images/bg/paralax/bg-image-2.jpg')

    const {search} = useSearch()

    const handleClick = async () => {

        const {selectedDays} = search
        const {id} = parki

        try {
            const newBooking = {
                parkingId: id,
                dates: {
                    from: selectedDays.from,
                    to: selectedDays.to
                }
            }        

            const res = await addBooking({
                variables: {
                  input: newBooking,
                },
            });


            toast.success("La réservation a bien été enregistrée");

            history.push('/bookings')

            // let bookingId = res.data.addBooking.id

            // let location = {
            //     pathname: `/bookings/${bookingId}`,
            //     state: {}
            // }
            
            // history.push(location)
            
        } catch (error) {

            toast.error(error.message);
            console.log(error);
        }
    }

    useEffect(() => {
        fetch('https://picsum.photos/1990/900')
            .then(data => setImage(data.url))
    }, [])

    useEffect(() => {

        const {selectedDays} = search
        let dates = {
            from: selectedDays.from.toDateString(),
            to: selectedDays.to.toDateString(),
        }

        setDates(dates)

    }, [])

    return (
        <div className="Reservation">
            <h1>Detail de la Reservation</h1>
            <div className="ParkiFavorites">
                <div className='ParkiFavorites__image'>
                    <div>
                        <Image  rounded src={image} />
                    </div>
                </div>
                <div className="Reservation__info">

                    <div className="Reservation__address">
                        <span>{parki.address}</span>
                    </div> 
                    <div className="Reservation__parkiId">
                        <span>Parking id: {parki.id}</span>
                    </div> 
                    <div className="Reservation__host">
                        <label>Host:</label>
                        <div>
                            <Image src={image} avatar />
                            <span>{`${parki.user.firstname} ${parki.user.lastname}`}</span>
                        </div>
                    </div>
                    <div className="Reservation__dates">
                        <label>Date:</label>
                        <span>{dates.from} au {dates.to}</span>
                    </div> 
                    <div className="Reservation__dates">
                        <label>Prix:</label>
                        <span>{"25"}€</span>
                    </div> 
                </div>
            </div>

            <button className="parki btn btn-gradient-primary btn-lg" onClick={handleClick}>Reserver</button>
        </div>
    )
}

export default Reservation
