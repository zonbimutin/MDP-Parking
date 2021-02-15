import React, { useState, useEffect } from 'react'
import { Image, Container, Placeholder} from 'semantic-ui-react'
import './SearchSlider.scss'
import SearchHome from '../Search/SearchHome';
import Slider from '../Slider';

//Backgound
import Background from '../../assets/images/bg-home.png';


const SearchSlider = () => {



    return (
        <div className="SearchSlider">
            <div className="SearchSlider__background">
                <Image src={ Background }/>
            </div>
            <Container className="SearchSlider__Container">
                <SearchHome/>
            </Container>
        </div>

  
    
    )
}

export default SearchSlider
