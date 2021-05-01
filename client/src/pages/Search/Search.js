import React, {useState,useEffect} from 'react';
import { useLocation, useParams } from 'react-router-dom'
import * as Data from './parki.json'
import Mapbox from '../../components/Maps/Mapbox'
import ParkisList from '../../components/ParkisList'
import SearchParki from '../../components/SearchParki'
import { Card, Accordion, Icon } from 'semantic-ui-react'


import './Search.scss'


const Search = () => {
    
    const [parkis, setParkis] = useState(Data.parkis)
    const [selectedParki, setselectedParki] = useState(null)
    const [currentLocation, setCurrentLocation] = useState(null)
    const [showSearch, setShowSearch] = useState(false)
    const searchParams = useParams()
    const location = useLocation()

    const handleSelection = parki => {
        setselectedParki(parki)
    }

    const handleSearchSubmit = (data) => {
        console.log(data)
        let coordinates = {...data.coordinates}
        setCurrentLocation(coordinates)
    }

    const handleAccordionClick = () => {

    }

    useEffect(() => {
        if (location.state.coordinates) {
            const {coordinates} = location.state
            setCurrentLocation(coordinates)
        }

    }, [])

    return (
        <div className={'SearchPage'}>
            <div className={'SearchPage__container'}>
                <div className={'SearchPage__content'}>
                    <Card className="parki">
                        <div className={'SearchPage__search'}>
                            <Accordion>
                                <Accordion.Title
                                    active={showSearch}
                                    onClick={() => setShowSearch(!showSearch)}
                                    >
                                    <Icon name='dropdown' />
                                    Recherche
                                </Accordion.Title>
                                <Accordion.Content active={showSearch}>
                                    <SearchParki handleSearchSubmit={handleSearchSubmit} searchData={location.state}/>
                                </Accordion.Content>
                            </Accordion>
                        </div>
                        <div className={'SearchPage_list'}>
                            <ParkisList parkis={parkis}  selectedParki={selectedParki} handleSelection={parki => handleSelection(parki)}/>
                        </div>
                    </Card>
                </div>
                <div className={'SearchPage__map'}>
                    <Mapbox parkis={parkis} currentLocation={currentLocation} selectedParki={selectedParki} handleSelection={parki => handleSelection(parki)}/>
                </div>
            </div>
        </div>
    )
}

export default Search;
