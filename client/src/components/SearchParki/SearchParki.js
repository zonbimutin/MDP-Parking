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

const getParkingTypes = () => {
    return [
        {
            'id': '60bb174a6dc41f7a0a54862b',
            label: 'Couvert',
            img: 'interior',
        },
        {
            'id': '60bb175d6dc41f7a0a54862c',
            label: 'No Couvert',
            img: 'exterior'
        },
        {
            'id': '60bb17156dc41f7a0a54862a',
            label: 'Handicape',
            img: 'handicape'
        },
        {
            'id': '60bb176f6dc41f7a0a54862d',
            label: 'Electrique',
            img: 'electric'
        },
        {
            'id': '608d126d585e840bc84b170b',
            label: 'Grand place',
            img: 'large'
        },
    ]
}


const SearchParki = () => {

    const {search, setSearch} = useSearch()
    const history = useHistory();

    const [parkingTypes, setParkingTypes] = useState(getParkingTypes())

    const [selectedDays, setSelectedDays] = useState(getInitialSelectedDaysState());
    const [selectedTypes, setSelectedTypes] = useState([])

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
            city: 'annecy',
            selectedTypes: selectedTypes
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

    const handleSelectType = (e, type) => {
        e.stopPropagation()
        e.preventDefault()
        
        let index = selectedTypes.findIndex(find => find.id == type.id)
        let newSelected = [...selectedTypes]

        if(index > -1){
            newSelected.splice(index,1)
            setSelectedTypes(newSelected)

        } else {
            newSelected.push(type)
            setSelectedTypes(newSelected)
        }
    }

    useEffect(() => {
        if(search){
            setSelectedDays(search.selectedDays)
            setAddress(search.address)
            setCoordinates(search.coordinates)

            let newSelectedTypes = []
            search.selectedTypes.forEach(type => {
                let index = parkingTypes.findIndex(find => find.id == type.id)
                if(index > -1) {
                    newSelectedTypes.push(parkingTypes[index])
                }
            });

            setSelectedTypes(newSelectedTypes)
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
                        {parkingTypes.map((type, index) => {
                            let selected = selectedTypes.indexOf(type) > -1
                            return (
                                <button key={index} className={ selected ? "ui icon button selected" : "ui icon button"} onClick={((e) => handleSelectType(e,type))}><img src={"/assets/images/parki/types/" + type.img + ".svg"}></img></button>
                            )
                        })}
                    </div>
                </div>
                <button type='submit' className='SearchParki__submitButton parki btn btn-gradient-primary btn-lg btn-full'>Rechercher</button>
            </Form>
        </div>
    )
}

export default SearchParki
