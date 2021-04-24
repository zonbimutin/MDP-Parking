import React, { useState, useEffect } from 'react'
import { useHistory} from 'react-router-dom';
import { Image, Container, Card } from 'semantic-ui-react'
import SearchParki from '../SearchParki';

import './SearchSlider.scss'

//Backgound
import Background from '../../assets/images/bg-home.png';


const SearchSlider = () => {

    const history = useHistory();

    const handleSearchSubmit = (search) => {
        
        let location = {
            pathname: '/search',
            state: search
        }
        history.push(location)
    }



    return (
        <div className="SearchSlider">
        
            <div className="SearchSlider__background">
                <Image src={ Background }/>
            </div>
            <Container className="SearchSlider__Container">
                <Card>
                    <Card.Content>
                        <SearchParki handleSearchSubmit={handleSearchSubmit}/>
                    </Card.Content>
                </Card>
            </Container>
        </div>

  
    
    )
}

export default SearchSlider
