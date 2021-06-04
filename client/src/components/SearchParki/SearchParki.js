import React, {useState, useEffect} from 'react';
import { useHistory} from 'react-router-dom';

//hooks
import useSearch from '../../hooks/useSearch'
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


const SearchParki = () => {

    const {search, setSearch} = useSearch()
    const history = useHistory();

    const [selectedDays, setSelectedDays] = useState(getInitialSelectedDaysState());
    const [address, setAddress] = useState('');
    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    })

    const searchOptions = {
        location: new window.google.maps.LatLng(45.899780, 6.128350),
        radius: 2000,
        types: ['address']
    }



    const handleSubmit = () => {
        
        let newSearch = {
            address: address,
            coordinates: coordinates,
            selectedDays: selectedDays,
            city: 'annecy'
        }
        setSearch(newSearch)
        history.push('/search')
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
        if(search){
            setSelectedDays(search.selectedDays)
            setAddress(search.address)
            setCoordinates(search.coordinates)
        }
    }, [search])

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
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    }
                </PlacesAutocomplete>
                <DayRangePickerForm handleDayClick={handleDayClick} selectedDays={selectedDays}/>
                <div className="SearchParki__typeFilter parki form-group">
                    <label>Type de place :</label>
                    <div className="btn-group">
                        <button className="ui icon button"><i aria-hidden="true" className="world icon"></i></button>
                        <button className="ui icon button"><i aria-hidden="true" className="world icon"></i></button>
                        <button className="ui icon button"><i aria-hidden="true" className="world icon"></i></button>
                        <button className="ui icon button"><i aria-hidden="true" className="world icon"></i></button>
                        <button className="ui icon button"><i aria-hidden="true" className="world icon"></i></button>
                    </div>
                </div>
                <button type='submit' className='SearchParki__submitButton parki btn btn-gradient-primary btn-lg btn-full'>Rechercher</button>
            </Form>
        </div>
    )
}

export default SearchParki
