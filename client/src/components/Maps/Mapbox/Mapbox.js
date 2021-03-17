import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import * as Data from './parki.json'
import {Button} from 'semantic-ui-react'

import './Mapbox.scss'


const Mapbox = () => {

    const [viewport, setViewport] = useState({
        latitude: 45.899780,
        longitude: 6.128350,
        width: '100vw',
        height: '100vh',
        zoom: 13
    })

    return (
        <div className={"Mapbox"}>
            <ReactMapGL 
                {...viewport} 
                mapboxApiAccessToken={ process.env.REACT_APP_MAP_KEY}
                onViewportChange={viewport => {
                    setViewport(viewport)
                }}
            >
                { Data.parkis.map(parki => (
                    <Marker 
                        key={parki.id} 
                        longitude={parki.lon} 
                        latitude={parki.lat}
                    >
                        <div className={"Mapbox__marker"}>
                            <Button>{parki.id}</Button>
                        </div>
                    </Marker>
                ))}
                
            </ReactMapGL>
        </div>
    )
}

export default Mapbox
