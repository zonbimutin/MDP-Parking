import React, { useState, useEffect } from 'react'
import { Image, Container} from 'semantic-ui-react'
import './SearchSlider.scss'
import Search from '../Search';

//Backgound
import Background from '../../assets/images/bg-home.png';


const SearchSlider = () => {



    return (

        <div className="searchSlider">
            <Container>
                <Search/>
            </Container>
            <div className='searchSlider__background'>
                <Image src={Background}/>
            </div>
        </div>
    )
}

export default SearchSlider
