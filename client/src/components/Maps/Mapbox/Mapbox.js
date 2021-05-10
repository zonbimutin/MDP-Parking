import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import {Button, Image} from 'semantic-ui-react'

import useAuth from '../../../hooks/useAuth'

import marker from '../../../assets/images/marker.png'
import markerSelected from '../../../assets/images/markerSelected.png'

import ParkiItem from '../../Parki/ParkiItem'

import './Mapbox.scss'


const Mapbox = ({parkis, selectedParki , handleSelection, currentLocation}) => {

    const { auth } = useAuth()

    const [viewport, setViewport] = useState({
        latitude: 45.899780,
        longitude: 6.128350,
        width: '100%',
        height: '100%',
        zoom: 13
    })

    const [location, setLocation] = useState(null)

    useEffect(() => {
        if(currentLocation){
            if (currentLocation.lat && currentLocation.lng) {
                let newView = {
                    ...viewport,
                    latitude: currentLocation.lat,
                    longitude: currentLocation.lng
                }
                setLocation(currentLocation)
                setViewport(newView)
            }
        }
    }, [currentLocation])

    return (
        <div className={"Mapbox"}>
            <ReactMapGL 
                {...viewport} 
                mapboxApiAccessToken={ process.env.REACT_APP_MAP_KEY}
                onViewportChange={viewport => {
                    setViewport(viewport)
                }}
            >
                {location && 
                    <Marker 
                        longitude={location.lng} 
                        latitude={location.lat}
                    >
                        <div className={"Mapbox__marker"}>
                            <Image src={marker} size='small' />
                        </div>
                    </Marker>
                }
                { parkis.map(parki => (
                    <Marker 
                        key={parki.id} 
                        longitude={parki.coordinates.longitud} 
                        latitude={parki.coordinates.latitud}
                    >
                        {parki == selectedParki && 
                            <div className="Mapbox__cardDeatail parki ui card">
                                <ParkiItem auth={auth} parki={parki}/>
                            </div>
                        }
                        <div className={"Mapbox__marker"}>
                            <Image onClick={() => handleSelection(parki)} src={parki == selectedParki ? markerSelected : marker} size='small' />
                        </div>
                    </Marker>
                ))}
                
            </ReactMapGL>
        </div>
    )
}

export default Mapbox
