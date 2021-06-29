import React, { useEffect, useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Image, Icon, Popup} from 'semantic-ui-react'
import ReservationModal from '../../modals/ReservationModal'
import AuthModal from '../../modals/AuthModal'
import './ParkiItem.scss'

const ParkiItem = ({parki, auth, selected}) => {

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

    console.log(parki)
    
    return (
        <div className={selected ? "ParkiItem ParkiItem--selected" : "ParkiItem"}>
            <div className='ParkiItem__image'>
                <div>
                    <Image  rounded src={image} />
                </div>
            </div>
            <div className="ParkiItem__container">
                <div className="ParkiItem__info">
                    <div className="ParkiItem__host">
                        <Image src={image} avatar />
                        <span>{`${parki.user.firstname} ${parki.user.lastname}`}</span>
                    </div>

                    {selected && 
                        <>
                            <div className="description">{parki.description}</div>
                            <div className="ParkiDetail__info__section__description">
                                <div className="btn-group">
                                {parki.parkingType.map((type, index) => (
                                    <Popup key={index} content={`${type.label}`} trigger={<div className={"ui icon button"}><img src={`/assets/images/parki/types/${type.img}.svg`}></img></div>} />
                                    
                                ))}
                                    
                                </div>
                            </div>

                        </>
                    
                    }
                    <div className="detail">
                        <div className="address">{parki.address}</div>
                        <div className="address"><span>Disponibilité:</span>{parki.disponibility >= 24 ? '24h' : 'de 7h00 à 22h00'}</div>
                    </div>
                </div>
                <div className="ParkiItem__actions actions">
                    <div className="btn-group">
                        { auth ? (
                            <>
                                <ReservationModal parki={parki} trigger={<button className="parki btn btn-gradient-primary">Reserver</button>} />
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
