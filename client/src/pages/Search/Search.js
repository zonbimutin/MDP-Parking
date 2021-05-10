import React, {useState,useEffect} from 'react';
//hooks
import useSearch from '../../hooks/useSearch'
// GraphQL
import { useLazyQuery, useQuery } from "@apollo/client";
import { SEARCH } from "../../gql/parking";

import * as Data from './parki.json'
import Mapbox from '../../components/Maps/Mapbox'
import ParkisList from '../../components/ParkisList'
import SearchParki from '../../components/SearchParki'
import { Card, Accordion, Icon, Dimmer, Loader } from 'semantic-ui-react'


import './Search.scss'


const Search = () => {

    //hooks
    const {search, setSearch} = useSearch()

    //Apollo
    const [getParkings, { loading, data }] = useLazyQuery(SEARCH);
  

    const [parkis, setParkis] = useState([])
    const [selectedParki, setselectedParki] = useState(null)
    const [currentLocation, setCurrentLocation] = useState(null)
    const [showSearch, setShowSearch] = useState(false)

    const handleSelection = parki => {
        setselectedParki(parki)
    }

    useEffect(() => {
        if(search) {
            setCurrentLocation(search.coordinates)
            getParkings({
                variables: { search: {dates: search.selectedDays} },
            })
        }
    }, [search])


    useEffect(() => {
        if (data) {
            setParkis(data.searchParkings)
            console.log(data.searchParkings)
        } else {
          setParkis([]);
        }
      }, [data]);

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
                                    <SearchParki/>
                                </Accordion.Content>
                            </Accordion>
                        </div>
                        <div className={'SearchPage_list'}>
                            <ParkisList parkis={parkis} loading={loading}  selectedParki={selectedParki} handleSelection={parki => handleSelection(parki)}/>
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
