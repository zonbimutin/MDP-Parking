import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import {Button, Image} from 'semantic-ui-react'

import marker from '../../../assets/images/markerSelected.png'


import './ParkiMap.scss'

const ParkiMap = ({coordinates}) => {

    const [lonlat, setLonlat] = useState({
        latitude: 45.899780,
        longitude: 6.128350
    })
    const [viewport, setViewport] = useState({
        latitude: 45.899780,
        longitude: 6.128350,
        width: '100%',
        height: '100%',
        zoom: 13
    })

    useEffect(() => {

        let newView = {
            ...viewport,
            latitude: coordinates.latitud,
            longitude: coordinates.longitud
        }

        setViewport(newView)

    }, [])


    return (
        <div className="ParkiMap Mapbox">
            <ReactMapGL 
                {...viewport} 
                mapboxApiAccessToken={ process.env.REACT_APP_MAP_KEY}
                onViewportChange={viewport => {
                    setViewport(viewport)
                }}
            >
                <Marker 
                    longitude={coordinates.longitud} 
                    latitude={coordinates.latitud}
                >
                    <div className={"Mapbox__marker"}>
                        <Image  src={marker} />
                    </div>
                </Marker>
           
            </ReactMapGL>
            
        </div>
    )
}

export default ParkiMap
