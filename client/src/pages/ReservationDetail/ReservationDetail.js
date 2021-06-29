import React, {useState, useEffect} from 'react';
// Router
import { useParams } from 'react-router-dom';
// GraphQL
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_BOOKING } from "../../gql/booking";
//SemanticUi
import {Dimmer, Loader} from 'semantic-ui-react'

import ParkiDetail from '../../components/Parki/ParkiDetail'


import './ReservationDetail.scss'

const ReservationDetail = () => {

    const params = useParams();
    const [id, setId] = useState(null);
    const [booking, setBooking] = useState(null)

    const { data, loading } = useQuery(GET_BOOKING, {
      variables: { id },
    });

    useEffect(() => {
        console.log(params.idBooking)
        setId(params.idBooking)
    }, [])

    useEffect(() => {
        if (data) {
          console.log(data)
          setBooking(data.getBooking)
        } else {
          // setResults([]);
        }
      }, [data]);

    return (
        <div className="ReservationDetail parki container">
            {booking ? (
                <div className="ReservationDetail__content">
                    <div className="ReservationDetail__title">Détail de la réservation</div>
                    <ParkiDetail parki={booking.parkingId}/>
                </div>
            ) : (
                <Dimmer active inverted>
					<Loader inverted>Loading</Loader>
				</Dimmer>
            )}
        </div>
    )
}

export default ReservationDetail
