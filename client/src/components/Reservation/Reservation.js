import React,{useState, useEffect} from 'react'

// GraphQL 
import { useMutation } from "@apollo/client";
import { ADD_BOOKING } from "../../gql/booking";

import useSearch from '../../hooks/useSearch'
// Toast
import { toast } from "react-toastify";

import './Reservation.scss'

const Reservation = ({parki}) => {

    const [addBooking] = useMutation(ADD_BOOKING)

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
            console.log(newBooking)

            await addBooking({
                variables: {
                  input: newBooking,
                },
            });

            toast.success("Votre place a été publiée ");
            
            
        } catch (error) {

            toast.error(error.message);
            console.log(error);
        }
    }


    return (
        <div className="Reservation">
            <button className="parki btn btn-gradient-primary btn-lg" onClick={handleClick}>Reserver</button>
        </div>
    )
}

export default Reservation
