import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import {Button} from 'semantic-ui-react'

import './Mapbox.scss'


const Mapbox = ({parkis, handleSelection}) => {

    const [viewport, setViewport] = useState({
        latitude: 45.899780,
        longitude: 6.128350,
        width: '100%',
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
                { parkis.map(parki => (
                    <Marker 
                        key={parki.id} 
                        longitude={parki.lon} 
                        latitude={parki.lat}
                    >
                        <div className={"Mapbox__marker"}>
                            <Button onClick={() => handleSelection(parki)}>{parki.id}</Button>
                        </div>
                    </Marker>
                ))}
                
            </ReactMapGL>
        </div>
    )
}

export default Mapbox
