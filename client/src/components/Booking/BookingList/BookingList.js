import React from 'react'
import BookingItem from '../BookingItem/BookingItem'

import { Loader, Dimmer, List } from 'semantic-ui-react'

const BookingList = ({bookings, loading}) => {
    return (
        <div className="BookingList">
            {loading ? (
                <Dimmer active inverted>
                    <Loader />
                </Dimmer>
            ) : (
                <>
                    {( bookings.length > 0) ? (
                        <List divided relaxed>
                            {bookings.map((booking, index) => {
                                return (
                                    <List.Item key={index} >
                                        <BookingItem booking={booking}/>
                                    </List.Item>
                                )
                            })}
                        </List>
                    ):(
                        <div>Vous n'avez pas encore enregistré des réservationes</div>
                    )}
                </>
            )}
            
        </div>
    )
}

export default BookingList
