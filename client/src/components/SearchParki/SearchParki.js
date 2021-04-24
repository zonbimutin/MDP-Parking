import React, {useState, useEffect} from 'react';
import { useHistory} from 'react-router-dom';
import PlacesAutocomplete,{ geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import DayRangePickerForm from '../DayRangePickerForm';
import DayRangePickerInput from '../DayRangePickerInput';
import { DateUtils } from 'react-day-picker';
import { Form , Icon} from 'semantic-ui-react';

//icons
import CalendarIcon from '../../assets/icons/calendar.svg';


import './SearchParki.scss'


const getInitialSelectedDaysState = () => {
    return {
      from: undefined,
      to: undefined,
    };
}


const SearchParki = ({handleSearchSubmit, searchData}) => {

    const [selectedDays, setSelectedDays] = useState(getInitialSelectedDaysState());
    const [address, setAddress] = useState('');
    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    })

    const cityOptions = [
        { key: 'an', value: '74', text: 'Annecy' },
    ]

    const searchOptions = {
        location: new window.google.maps.LatLng(45.899780, 6.128350),
        radius: 2000,
        types: ['address']
    }


    const handleSubmit = () => {
        
        let search = {
            address: address,
            coordinates: coordinates,
            selectedDays: selectedDays,
            city: 'annecy'
        }

        handleSearchSubmit(search)
    }

    const handleSelect = async value => {
        const result = await geocodeByAddress(value);
        const latlng = await getLatLng(result[0]);

        setAddress(value);
        setCoordinates(latlng);
    };

    const handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, selectedDays);
        setSelectedDays(range);
    }
    
    const handleResetClick = () => {
        setSelectedDays(getInitialSelectedDaysState())
    }

    useEffect(() => {
        if(searchData){
            console.log(searchData)
            const {selectedDays, address} = searchData
            setSelectedDays(selectedDays)
            setAddress(address)
        }
    }, [])

    return (
        <div className={'SearchParki'}>
            <Form onSubmit={handleSubmit}>
                <PlacesAutocomplete
                    value={address}
                    onChange={setAddress}
                    onSelect={handleSelect}
                    searchOptions={searchOptions}
                >
                    { ({ getInputProps, getSuggestionItemProps, suggestions, loading }) => (
                            <div className="ui simple active fluid dropdown">
                                <div className="parki form-group">
                                    <div className="input-icon">
                                        <input type="text" className="form-control" {...getInputProps({placeholder: 'Où allez vous ?'})}/>
                                        <span>
                                            <Icon disabled name='marker' />
                                        </span>
                                    </div>
                                </div>

                                {/* <m.Input icon='users' iconPosition='left' {...getInputProps({placeholder: 'Type your address'})}/> */}
                                <div className="SearchParki__menu menu">
                                    {loading && 
                                        <div className='SearchParki__item item'>
                                            ...loading
                                        </div>
                                    }
                                    {!loading && suggestions.map((suggestion) => {
                                        const style = {
                                            backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                                        }
                                        return ( 
                                            <div key={suggestion.index} {...getSuggestionItemProps(suggestion, {className: `SearchParki__item item ${suggestion.active ? 'active' : ''}` })}>
                                                {suggestion.description}
                                            </div>)
                                    })}
                                </div>
                            </div>
                        )
                    }
                </PlacesAutocomplete>

                <DayRangePickerInput
                    selectedDays={selectedDays}
                    handleDayClick={handleDayClick}
                    handleResetClick={handleResetClick}
                />
                <div className="SearchParki__typeFilter parki form-group">
                    <label>Type de place :</label>
                    <div className="btn-group">
                        <button class="ui icon button"><i aria-hidden="true" class="world icon"></i></button>
                        <button class="ui icon button"><i aria-hidden="true" class="world icon"></i></button>
                        <button class="ui icon button"><i aria-hidden="true" class="world icon"></i></button>
                        <button class="ui icon button"><i aria-hidden="true" class="world icon"></i></button>
                        <button class="ui icon button"><i aria-hidden="true" class="world icon"></i></button>
                    </div>
                </div>
                <button type='submit' className='parki btn btn-gradient-primary btn-lg btn-full'>Rechercher</button>
            </Form>
        </div>
    )
}

export default SearchParki
