import React, {useEffect, useState} from 'react'
import { useHistory} from 'react-router-dom';


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

import './ParkiRegister.scss'

const ParkiRegister = () => {  

    const history = useHistory()

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    })
    const [parkingTypes, setParkingTypes] = useState(getParkingTypes())
    const [selectedTypes, setSelectedTypes] = useState([])

    const [parkingTime, setParkingTime] = useState(getParkiTime())
    const [selectedTime, setSelectedTime] = useState({
        label: "",
        value: ""
    })

    const [terms, setTerms] = useState(false)

    const [registerParking] = useMutation(REGISTER);

    const searchOptions = {
        location: new window.google.maps.LatLng(45.899780, 6.128350),
        radius: 2000,
        types: ['address']
    }


    const handleSelectedTime = (time) => {
        setSelectedTime(time)
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

        try {
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
                },
                description: form['description'].value,
                access: form['access'].value,
            }

            if(!address) throw new Error('Vous devez sélectionner une adresse')
            if(selectedTypes.length < 1) throw new Error('Vous devez sélectionner au moins un type de place')
            if(!selectedTime.value) throw new Error('Vous devez sélectionner une disponibilité')

            newParking.disponibility = selectedTime.value
            newParking.parkingType = selectedTypes.map(type => type.id)
            
            const res = await registerParking({
                    variables: {
                    input: newParking,
                    },
            });

            toast.success("Bravo !! Votre place a été publiée");
            
            const {id} = res.data.registerParking
            
            let location = {
                pathname: `/parki/${id}`,
                state: {}
            }

            history.push(location)
            
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }

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

    const handleTerms = (e, data) => {
        setTerms(data.checked)
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

            <div className="parki page-title">Louer ma place !</div>

            <Form className="ParkiRegister__form" onSubmit={hadleOnSubmit}>
                <div className="ParkiRegister__basicInfo" >
                    <PlacesAutocomplete
                            value={address}
                            onChange={setAddress}
                            onSelect={handleSelect}
                            searchOptions={searchOptions}
                        >
                            { ({ getInputProps, getSuggestionItemProps, suggestions, loading }) => (
                                    <div className="ui simple active fluid dropdown">
                                        <div className="parki form-group field">
                                            <label>Adress:</label>
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
                        <Form.Input className="parki form-group" name="city" fluid label='Ville' placeholder='Ville' readOnly value={city} />
                        <Form.Input className="parki form-group" name="country" fluid label='Pays' placeholder='Pays' readOnly value={country} />
                        <Form.Input className="parki form-group" name="zipcode" type="number" fluid label='Zip code' placeholder='Zip code' readOnly value={zipCode} />
                        <Form.Input className="parki form-group" name="parkingNumber" type="number" fluid label='Parking number' placeholder='Parking Number' />
                    </Form.Group>

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

                    {parkingTime && 
                        <div className="parki form-group field">
                            <label>Disponibilité :</label>
                            <Form.Group >
                                {parkingTime.map((time, index) => (
                                    <Form.Radio
                                        key={index}
                                        label={time.label}
                                        value={time.value}
                                        checked={time.value === selectedTime.value}
                                        onChange={() => handleSelectedTime(time)}
                                    />
                                ))}
                            </Form.Group>
                        </div>
                    }
                    

                    <Form.TextArea name="description" className="parki form-group" label='Description de votre place de parking :' />
                    <Form.TextArea name="access" className="parki form-group" label='Moyen d’accès :' />

                </div>

                <div className="">
                    <Form.Checkbox name="terms" onChange={handleTerms} label='Accepter les conditions' />
                </div>

                {terms && 
                    <button className="parki btn btn-gradient-primary btn-lg" type="submit" >Publier</button>
                }

            </Form>
            
        </div>
    )
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

const getParkiTime = () => {
    return [
        {
            label: "24h",
            value: 24
        },
        {
            label: "7h - 20h",
            value: 12
        }
    ]
}

export default ParkiRegister
