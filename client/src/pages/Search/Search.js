import React, {useState, useEffect, useRef} from 'react';
//hooks
import useSearch from '../../hooks/useSearch'
// GraphQL
import { useLazyQuery } from "@apollo/client";
import { SEARCH } from "../../gql/parking";

// Scroll
import PerfectScrollbar from 'perfect-scrollbar'
// toast 
import { toast } from 'react-toastify'

import Mapbox from '../../components/Maps/Mapbox'
import ParkisList from '../../components/ParkisList'
import SearchParki from '../../components/SearchParki'
import { Card, Accordion, Icon } from 'semantic-ui-react'


import './Search.scss'

const getTotalPrice = (selectedDays, parki) => {

    const {from, to} = selectedDays
    let totalPrice = 0

    let days = parseInt((to.getTime()- from.getTime())/(24*3600*1000) + 1);

    if( days > 0 && days <= 3) totalPrice = parki.prices.single * days
    if( days > 3 ) totalPrice = parki.prices.multiple * days
    if( days >= 29 ) totalPrice = parki.prices.subscription * days


    

    return totalPrice
}

const getTotalDays = (selectedDays, parki) => {
    const {from, to} = selectedDays
    let days = parseInt((to.getTime()- from.getTime())/(24*3600*1000) + 1);
    return days
}


const Search = () => {

    //scroll
    const scrollRef = useRef(null)
    const ps = useRef(null)

    //hooks
    const {search, setSearch} = useSearch()

    //Apollo
    const [getParkings, { loading, data, error}] = useLazyQuery(SEARCH);
  

    const [parkis, setParkis] = useState([])
    const [selectedParki, setselectedParki] = useState(null)
    const [currentLocation, setCurrentLocation] = useState(null)
    const [showSearch, setShowSearch] = useState(true)
    const [daysPrice, setDaysPrice] = useState({
        days: 0,
        price: 0
    })


    const handleSelection = parki => {
        setselectedParki(parki)
    }

    useEffect(() => {
        if(search) {
            setselectedParki(null)
            setCurrentLocation(search.coordinates)
            let typesIds = search.selectedTypes.map(type => type.id)
            getParkings({
                variables: { search: {
                    dates: search.selectedDays,
                    types: typesIds
                } },
            })
        }
    }, [search])

    useEffect(() => {
        if(error){
            toast.error(error.message);
            console.log(error);
        }
    }, [error])


    useEffect(() => {
        if (data) {
            setParkis(data.searchParkings)
        } else {
          setParkis([]);
        }
      }, [data]);

    useEffect(() => {
        ps.current = new PerfectScrollbar(scrollRef.current);
    }, [])


    useEffect(() => {
        if(selectedParki){
            // let parkiItem = document.querySelector('.SearchPage__list .ParkiItem--selected')
            // parkiItem && parkiItem.scrollIntoView()

            setDaysPrice({
                days: getTotalDays(search.selectedDays, selectedParki),
                price: getTotalPrice(search.selectedDays, selectedParki)
            })
        }
    }, [selectedParki])


    useEffect(() => {
        ps.current.update()

        if(parkis.length > 0){
            setShowSearch(false)
        }

    }, [parkis])

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
                        <div className={'SearchPage__list'} ref={scrollRef}>
                            <ParkisList parkis={parkis} loading={loading}   selectedParki={selectedParki} handleSelection={parki => handleSelection(parki)}/>
                        </div>
                    </Card>
                </div>
                <div className={'SearchPage__map'}>
                    <Mapbox parkis={parkis} currentLocation={currentLocation} daysPrice={daysPrice} selectedParki={selectedParki} handleSelection={parki => handleSelection(parki)}/>
                </div>
            </div>
        </div>
    )
}

export default Search;
