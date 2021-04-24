import React, { useEffect, useState } from 'react'
import {Image, Button, Rating, Icon} from 'semantic-ui-react'
import './ParkiItem.scss'

const ParkiItem = ({parki}) => {

    const [image, setImage] = useState('/assets/images/bg/paralax/bg-image-2.jpg')

    useEffect(() => {
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
                        <button className="parki btn btn-gradient-primary">Reserver</button>
                        <button className="parki btn btn-gradient-primary icon"><Icon name='chat' /></button>
                        <button className="parki btn btn-gradient-primary icon"><Icon name='plus' /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParkiItem
