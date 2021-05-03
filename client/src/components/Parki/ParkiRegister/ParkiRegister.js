import React, {useState} from 'react'

// GraphQL 
import { useMutation } from "@apollo/client";
import { REGISTER } from "../../../gql/parking";
// Form validation
import { useFormik } from "formik";
import * as Yup from "yup";
// UI Components
import { Form, Icon, Button } from "semantic-ui-react";
import PlacesAutocomplete,{ geocodeByAddress, getLatLng } from 'react-places-autocomplete';
// Toast
import { toast } from "react-toastify";

import './ParkiRegister'

const ParkiRegister = () => {

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    })

    const [registerParking] = useMutation(REGISTER);

    const searchOptions = {
        location: new window.google.maps.LatLng(45.899780, 6.128350),
        radius: 2000,
        types: ['address']
    }


    const handleSelect = async value => {
        const result = await geocodeByAddress(value);
        const latlng = await getLatLng(result[0]);

        let addressCom = result[0].address_components

        console.log(result[0].address_components[0].long_name)

        setAddress(`${addressCom[0].long_name} ${addressCom[1].long_name}`);
        setCity(`${addressCom[2].long_name}`);
        setCountry(`${addressCom[5].long_name}`);
        setZipCode(`${addressCom[6].long_name}`);
        setCoordinates(latlng);
    };

    const hadleOnSubmit = async event => {
        event.preventDefault()
        let form = event.target
        let newParking = {
            address: form['address'].value,
            city: form['city'].value.toLowerCase(),
            country: form['country'].value.toLowerCase(),
            zipCode: parseInt(form['zipcode'].value),
            parkingNumber: parseInt(form['parkingNumber'].value) ,
            coordinates: {
                longitud: coordinates.lng,
                latitud: coordinates.lat
            }
        }

        try {

            await registerParking({
                variables: {
                  input: newParking,
                },
            });

            toast.success("Usuario registrado correctamente");
            
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }

    }


    // Hook Formik
    const formik = useFormik({
        validationSchema: Yup.object({
            address: Yup.string()
                .required("First Name required")
                .max(20, "20 characters limite"),
            city: Yup.string()
                .required("Last Name required")
                .max(20, "20 characters limite"),
            country: Yup.string()
                .email("El email no es valido")
                .required("El email es obligatorio"),
            zipcode: Yup.string()
                .required("La contraseña es obligatoria")
                .oneOf([Yup.ref("repeatPassword")], "Las contraseñas no son iguales"),
            parkingNumber: Yup.string()
          }),
        onSubmit: async (formData) => {
            try {

                const newParking = formData;

                console.log(newParking)
                

                // await register({
                //     variables: {
                //       input: newParking,
                //     },
                // });

                toast.success("Usuario registrado correctamente");
                
            } catch (error) {
                toast.error(error.message);
                console.log(error);
            }
        },

    });

    return (
        <div className="ParkiRegister">

            <Form onSubmit={hadleOnSubmit}>
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
                                            <input type="text" name="address" className="form-control" {...getInputProps({placeholder: 'Où allez vous ?'})}/>
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


                    <Form.Group widths='equal'>
                        <Form.Input name="city" fluid label='Ville' placeholder='Ville' readOnly value={city} />
                        <Form.Input name="country" fluid label='Pays' placeholder='Pays' readOnly value={country} />
                        <Form.Input name="zipcode" type="number" fluid label='Zip code' placeholder='Zip code' readOnly value={zipCode} />
                        <Form.Input name="parkingNumber" type="number" fluid label='Parking number' placeholder='Parking Number' />
                    </Form.Group>
 
                    <Form.TextArea label='About' placeholder='Tell us more about you...' />
                    <input type='file' />
                    <Form.Checkbox label='I agree to the Terms and Conditions' />
                    <Button type="submit" >Submit</Button>
                </Form>
            
        </div>
    )
}

export default ParkiRegister
