import React from 'react';
import { useLocation, useParams } from 'react-router-dom'

import Mapbox from '../../components/Maps/Mapbox'


import './Search.scss'


const Search = () => {
    
   
    const { cityName } = useParams()
    let location = useLocation()
    console.log('location', location)
    console.log('city', cityName)

    return (
        <div className={'SearchPage'}>
           <Mapbox/>
        </div>
    )
}

export default Search;
