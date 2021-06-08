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

    useEffect(() => {
        if(selectedParki){
            let newView = {
                ...viewport,
                latitude: selectedParki.coordinates.latitud,
                longitude: selectedParki.coordinates.longitud
            }
            setViewport(newView)
        }
    }, [selectedParki])


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

                { parkis.map(parki => {
                    if(parki != selectedParki){
                        return (
                            <Marker 
                                key={parki.id} 
                                longitude={parki.coordinates.longitud} 
                                latitude={parki.coordinates.latitud}
                            >
                                <div className={"Mapbox__marker"}>
                                    <Image onClick={() => handleSelection(parki)} src={parki == selectedParki ? markerSelected : marker} />
                                </div>
                            </Marker>
                        )
                    }
                }
                )}

                {selectedParki && 
                    <Marker 
                        key={selectedParki.id} 
                        longitude={selectedParki.coordinates.longitud} 
                        latitude={selectedParki.coordinates.latitud}
                    >
                 
                        <div className="Mapbox__cardDeatail">
                            <div className="Mapbox__cardDeatail__price"><span>€</span><span>35</span></div>
                        </div>
                        <div className={"Mapbox__marker Mapbox__marker--selected"}>
                            <Image onClick={() => handleSelection(selectedParki)} src={markerSelected} />
                        </div>
                    </Marker>
                }

                
            </ReactMapGL>
        </div>
    )
}

export default Mapbox
