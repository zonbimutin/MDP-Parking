import React, {useState} from 'react';
import { useLocation, useParams } from 'react-router-dom'
import * as Data from './parki.json'
import Mapbox from '../../components/Maps/Mapbox'
import ParkisList from '../../components/ParkisList'


import './Search.scss'


const Search = () => {
    
    const [parkis, setParkis] = useState(Data.parkis)
    const [selectedParki, setselectedParki] = useState(null)

    const handleSelection = parki => {
        setselectedParki(parki)
    }
   
    const { cityName } = useParams()
    let location = useLocation()
    console.log('location', location)
    console.log('city', cityName)

    return (
        <div className={'SearchPage'}>
            <ParkisList parkis={parkis} selectedParki={selectedParki} handleSelection={parki => handleSelection(parki)}/>
            <Mapbox parkis={parkis} selectedParki={selectedParki} handleSelection={parki => handleSelection(parki)}/>
        </div>
    )
}

export default Search;
