import React, {useState, useEffect} from 'react'

import { Accordion, Icon} from 'semantic-ui-react'

import BookingTable from '../BookingTable/BookingTable'

import './ParkiBookingAccordion.scss'
const ParkiBookingAccordion = ({bookings}) => {

    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
    }

    console.log(bookings)

    return (
        <Accordion className="ParkiBookingAccordion" styled>
            <Accordion.Title
                active={active}
                index={0}
                onClick={handleClick}
            >
                <Icon name='dropdown' />
                Réservationes ({`${bookings.length}`})
            </Accordion.Title>
            <Accordion.Content active={active}>
                <BookingTable bookings={bookings}/>
            </Accordion.Content>
        </Accordion>
    )
}

export default ParkiBookingAccordion
