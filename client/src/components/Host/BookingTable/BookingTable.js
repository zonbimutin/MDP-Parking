import React from 'react'
import { Link } from 'react-router-dom';

import { Table, Image, Header } from 'semantic-ui-react'

import UserAvatar from '../../UserAvatar/UserAvatar';

import './BookingTable.scss'


const BookingTable = ({bookings}) => {

    return (
        <Table className="BookingTable" basic='very' celled collapsing>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Nº Reservation</Table.HeaderCell>
                    <Table.HeaderCell>Loueur</Table.HeaderCell>
                    <Table.HeaderCell>Date debut</Table.HeaderCell>
                    <Table.HeaderCell>Date fin</Table.HeaderCell>
                    <Table.HeaderCell>Créé</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                    <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
    
            <Table.Body>
                {bookings.map(booking => {

                    let start = new Date(parseInt(booking.startDate)).toDateString()
                    let end = new Date(parseInt(booking.endDate)).toDateString()
                    let create = new Date(parseInt(booking.createAt)).toDateString()

                    return (
                        <Table.Row>
                            <Table.Cell><Link to={`/bookings/${booking.id}`}>{booking.id}</Link></Table.Cell>
                            <Table.Cell>
                                <UserAvatar userId={booking.userId}/>
                            </Table.Cell>
                            <Table.Cell>{start}</Table.Cell>
                            <Table.Cell>{end}</Table.Cell>
                            <Table.Cell>{create}</Table.Cell>
                            <Table.Cell>{booking.bookingStatus}</Table.Cell>
                            <Table.Cell><button className="parki btn btn-gradient-primary">Annuler</button></Table.Cell>
                        </Table.Row>
                    )
                })}

            </Table.Body>
        </Table>
    )
}

export default BookingTable
