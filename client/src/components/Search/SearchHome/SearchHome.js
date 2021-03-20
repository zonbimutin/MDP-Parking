import React, {useState} from 'react';
import PlaceAutocomplite,{ geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { useHistory} from 'react-router-dom'
import './SearchHome.scss';
import { Placeholder, Form, Card, Button, Select} from 'semantic-ui-react';
import PlacesAutocomplete from 'react-places-autocomplete';




const renderAutocompliteInput = ({ getInputProps, getSuggestionItemProps, suggestions, loading }) => {

    return (
        <div>
            <Form.Input {...getInputProps({placeholder: 'Type your address'})}/>
            <div>
                {loading ? <div>...loading</div> : null}
                {suggestions.map((suggestion) => {
                    const style = {
                        backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                    }
                    console.log(suggestion)
                    return (<div {...getSuggestionItemProps(suggestion,{ style })}>{suggestion.description}</div>)
                })}
            </div>
        </div>
    )
  };


const SearchHome = () => {

    const [address, setAddress] = useState('');
    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    })

    const handleSelect = async value => {
        const result = await geocodeByAddress(value);
        const latlng = await getLatLng(result[0]);

        setAddress(value);
        setCoordinates(latlng);
    };

    let history = useHistory();

    const cityOptions = [
        { key: 'an', value: '74', text: 'Annecy' },
    ]
    

    let handleSubmit = () => {
        let location = {
            pathname: '/search/annecy',
            state: {
                lat: 32.8,
                lon: 45.99,
                ville:'Annecy',
                address: '33 rue de la minoterie'
            }
        }
        history.push(location)
    }

    return (
        <Card>
            <Card.Content>
                <Form onSubmit={handleSubmit}>

                    <PlacesAutocomplete
                        value={address}
                        onChange={setAddress}
                        onSelect={handleSelect}
                    >
                        { ({ getInputProps, getSuggestionItemProps, suggestions, loading }) => (
                                <div>
                                    <p>Latitude: {coordinates.lat}</p>
                                    <p>Longitude: {coordinates.lng}</p>
                                    <Form.Input {...getInputProps({placeholder: 'Type your address'})}/>
                                    <div>
                                        {loading ? <div>...loading</div> : null}
                                        {suggestions.map((suggestion) => {
                                            const style = {
                                                backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                                            }
                                            return ( 
                                                <div key={suggestion.index} {...getSuggestionItemProps(suggestion,{ style })}>
                                                    {suggestion.description}
                                                </div>)
                                        })}
                                    </div>
                                </div>
                            )
                        }
                    </PlacesAutocomplete>

                    <Form.Select placeholder='Select your city' options={cityOptions} />

                    <Form.Button content='Submit' />

                </Form>
            </Card.Content>
        </Card>
    )
}

export default SearchHome;
