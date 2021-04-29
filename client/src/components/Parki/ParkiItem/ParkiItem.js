import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {Image, Button, Rating, Icon} from 'semantic-ui-react'
import ReservationModal from '../../modals/ReservationModal'
import AuthModal from '../../modals/AuthModal'
import './ParkiItem.scss'

const ParkiItem = ({parki, auth}) => {

    const [image, setImage] = useState('/assets/images/bg/paralax/bg-image-2.jpg')

    useEffect(() => {
        console.log(auth)
        fetch('https://picsum.photos/1990/900')
            .then(data => setImage(data.url))
    }, [])
    
    return (
        <div className="ParkiItem">
            <div className='ParkiItem__image'>
                <Image size='medium' rounded src={image} />
            </div>
            <div className="ParkiItem__info">
                <div className="ParkiItem__host">
                    <div>
                        <Image src={image} avatar />
                        <span>{parki.host.name}</span>
                    </div>
                </div>
                <div className="rating">
                    <Rating maxRating={5} defaultRating={3} icon='star' />
                </div>
                <div className="detail">
                    <p className="description">{parki.description}</p>
                    <div className="price">{`${parki.price} €`}</div>
                </div>
                <div className="actions">
                    <div className="btn-group">
                        { auth ? (
                            <>
                                <ReservationModal trigger={<button className="parki btn btn-gradient-primary">Reserver</button>} />
                                <Link className={'parki btn btn-gradient-primary icon'} to={`/parki/${parki.id}`}><Icon name='chat' /></Link>
                            </>
                        ) : (
                            <AuthModal trigger={<button className="parki btn btn-gradient-primary">Reserver</button>} />
                        )}

                        <Link className={'parki btn btn-gradient-primary icon'} to={`/parki/${parki.id}`}><Icon name='plus' /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParkiItem
