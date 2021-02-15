import React from 'react';
import './SearchHome.scss';
import { Placeholder, Form, Card, Button } from 'semantic-ui-react';

const SearchHome = () => {
    return (
        <Card>
            <Card.Content>
                <Form>
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-first-name'
                        label='First name'
                        placeholder='First name'
                    />
                    <Button>Search</Button>
                </Form>
            </Card.Content>
        </Card>
    )
}

export default SearchHome;
