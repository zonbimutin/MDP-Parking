import React from 'react'

// Components SemanticUI
import { Container, Image } from 'semantic-ui-react';
//Backgound
import Background from '../../assets/images/bg-home.jpg';

// Sections
import LandigSection from '../../components/Sections/LandingSection'
import VideoSection from '../../components/Sections/VideoSection'
import ServiceSection from '../../components/Sections/ServiceSection'
import NewsSection from '../../components/Sections/NewsSection'
import Footer from '../../components/Footer'

//Style
import './Home.scss';

const Home = () => {
    return (
        <div className="Home">
            <LandigSection/>
            <VideoSection/>
            <ServiceSection/>
            <NewsSection/>
            <Footer/>
            
        </div>

    )
}

export default Home

