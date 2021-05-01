import React from 'react'
import { useLoadScript , GoogleMap } from '@react-google-maps/api'


const libraries = ["places"]
const mapContainerStyle = {
    width: '100vw',
    height: '100vh'
}

const centerMap = {
    lat: 45.899780,
    lng: 6.128350
}


const GoogleMap = () => {

     // Google Map init
     const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.MAPS_API_KEY,
        libraries
    })


    return (
        <div>
             <GoogleMap mapContainerStyle={ mapContainerStyle } zoom={14} center={centerMap} ></GoogleMap>
        </div>
    )
}

export default GoogleMap
