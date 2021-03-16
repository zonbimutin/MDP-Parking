import React from 'react';
import { useHistory} from 'react-router-dom'
import './SearchHome.scss';
import { Placeholder, Form, Card, Button, Select} from 'semantic-ui-react';

const SearchHome = () => {

    let history = useHistory();

    const cityOptions = [
        { key: 'an', value: '74', text: 'Annecy' },
    ]
    

    let handleSearchSubmit = () => {
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
                <Form>
                    <Form.Input
                        fluid
                        id='addrese'
                        placeholder='Address'
                    />
                    <Form.Select placeholder='Select your city' options={cityOptions} />

                    <Form.Button content='Submit' />
                </Form>
            </Card.Content>
        </Card>
    )
}

export default SearchHome;
