import React, { useEffect, useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Image, Button, Rating, Icon} from 'semantic-ui-react'
import ReservationModal from '../../modals/ReservationModal'
import AuthModal from '../../modals/AuthModal'

import './ParkiFavorites.scss'

const ParkiFavorites = ({parki, handleUnlike}) => {

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
        <div className="ParkiFavorites">
            <div className='ParkiFavorites__image'>
                <div>
                    <Image  rounded src={image} />
                </div>
            </div>
            <div className="ParkiFavorites__info">
                <div className="ParkiFavorites__host">
                
                    <div>
                        <Image src={image} avatar />
                        <span>{`${parki.user.firstname} ${parki.user.lastname}`}</span>
                    </div>
                </div>
                <div className="rating">
                    <Rating maxRating={5} defaultRating={3} icon='star' />
                </div>  
                <div className="description">
                    Place de parking  de 8h à 17h. Située à Annecy centre, facile d’accès, à 3 minutes à pied de la gare. À l’abri dans un garage fermé, accès avec un code qui vous sera communiqué dès la confirmation de votre réservation.
                </div>
            </div>
            <div className="ParkiFavorites__actions">
                <div onClick={() => handleUnlike(parki)} className={ "LikedParki large"}><img src={"/assets/images/parki/like.svg"}></img></div>
                <div className="btn-group">
                    <Link className={'parki btn btn-gradient-primary icon'} to={`/parki/${parki.id}`}><Icon name='chat' /></Link>
                    <button className={'parki btn btn-gradient-primary icon'} onClick={handleParkiDetail}><Icon name='plus' /></button>
                </div>
            </div>
        </div>
    )
}

export default ParkiFavorites
