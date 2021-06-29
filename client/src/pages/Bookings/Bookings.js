import React, {useEffect, useState} from 'react'

// GraphQL
import { useQuery } from "@apollo/client";
import { GET_USER_BOOKINGS } from "../../gql/booking";
//SemanticUi
import {Dimmer, Loader} from 'semantic-ui-react'

import BookingList from '../../components/Booking/BookingList/BookingList';
import Footer from '../../components/Footer'

//Hooks
import useAuth from '../../hooks/useAuth'

import './Bookings.scss'
const Bookings = () => {

    const [bookings, setBookings] = useState([])

    const { data, loading, error, refetch} = useQuery(GET_USER_BOOKINGS, {});
  
        useEffect(() => {
            if (data) {
            console.log(data)
            setBookings(data.getUserBookings)
            } 
        }, [data]);

        useEffect(() => {
            if(error) console.log(error.message)
        }, [error])

        useEffect(() => {
            refetch({})
        }, [])


    return (
        <>
            <div className="Bookings parki container">
                <div className="parki page-title">Mes Reservations</div> 
                {bookings && 
                    <BookingList bookings={bookings} loading={loading}/>
                } 
            </div>
            <Footer/>

        </>
    )
}

export default Bookings
