import React from 'react'

// Components
import SearchSlider from '../../components/SearchSlider';
import { Container, Image } from 'semantic-ui-react';
//Backgound
import Background from '../../assets/images/bg-home.jpg';

//Style
import './Home.scss';

const Home = () => {
    return (
        <Container fluid className='home' >
            <SearchSlider/>
        </Container>
    )
}

export default Home

