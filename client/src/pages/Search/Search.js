import React from 'react';
import { useLocation, useParams } from 'react-router-dom'
import { useLoadScript , GoogleMap } from '@react-google-maps/api'

import './Search.scss'

const libraries = ["places"]
const mapContainerStyle = {
    width: '100vw',
    height: '100vh'
}

const centerMap = {
    lat: 45.899780,
    lng: 6.128350
}

const Search = () => {
    
    // Google Map init
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.MAPS_API_KEY,
        libraries
    })

    if (isLoaded) {
        console.log(process.env.MAPS_API_KEY)
    }

    const { cityName } = useParams()
    let location = useLocation()
    console.log('location', location)
    console.log('city', cityName)

    return (
        <div className={'SearchPage'}>
            <GoogleMap mapContainerStyle={ mapContainerStyle } zoom={14} center={centerMap} ></GoogleMap>
        </div>
    )
}

export default Search;
