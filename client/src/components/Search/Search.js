import React from 'react';
import PlaceAutocomplite,{ geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { Card, Input, Form, Button } from 'semantic-ui-react';

const Search = () => {
    return (
        <Card>
            <Card.Content>
                <h2 className="login-form-title">
                Log in!
                </h2>
                <Form className="search-form" >
                    <Form.Input
                        type="text"
                        placeholder="First Name"
                        name="firstname"

                    />
                    <Form.Input
                        type="text"
                        placeholder="Last Name"
                        name="lastname"
            
                    />
                    <Form.Input
                        type="text"
                        placeholder="Email"
                        name="email"
           
                    />
                    <Form.Input
                        type="password"
                        placeholder="Password"
                        name="password"
                 
                    />
                    <Form.Input
                        type="password"
                        placeholder="Repeat Password"
                        name="repeatPassword"
         
                    />
                    <Button type="submit" className="btn-submit">
                        Registrarse
                    </Button>   
                </Form>
            </Card.Content>
        </Card>
    )
}

export default Search
