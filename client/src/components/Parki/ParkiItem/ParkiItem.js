import React, { useEffect, useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Image, Button, Rating, Icon} from 'semantic-ui-react'
import ReservationModal from '../../modals/ReservationModal'
import AuthModal from '../../modals/AuthModal'
import './ParkiItem.scss'

const ParkiItem = ({parki, auth}) => {

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
    
    return (
        <div className="ParkiItem">
            <div className='ParkiItem__image'>
                <Image size='medium' rounded src={image} />
            </div>
            <div className="ParkiItem__info">
                <div className="ParkiItem__host">
                    <div>
                        <Image src={image} avatar />
                        <span>{`${parki.user.firstname} ${parki.user.lastname}`}</span>
                    </div>
                </div>
                <div className="rating">
                    <Rating maxRating={5} defaultRating={3} icon='star' />
                </div>
                <div className="detail">
                    <p className="description">{parki.address}</p>
                    <div className="price">{`${35} €`}</div>
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

                    <button className={'parki btn btn-gradient-primary icon'} onClick={handleParkiDetail}><Icon name='plus' /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParkiItem
