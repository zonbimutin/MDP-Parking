import React, {useState, useEffect} from 'react'
import { useHistory} from 'react-router-dom';

import {Card, Image} from 'semantic-ui-react'
import SearchParki from '../../SearchParki'

import './LandingSection.scss'

const LandigSection = () => {

    const [bgImage, setBgImage] = useState('/assets/images/bg/paralax/bg-image-2.jpg')

    const history = useHistory();

    const handleSearchSubmit = (search) => {
        
        let location = {
            pathname: '/search',
            state: search
        }
        history.push(location)
    }

    useEffect(() => {

        fetch('https://picsum.photos/1990/900')
            .then(data => setBgImage(data.url))
      
    }, [])

    return (
        <div className='LandingSection section'>
            <div className='LandingSection__bgImage'>
                <Image src={bgImage}/>
            </div>
            <div className='LandingSection__searchForm parki container'>
                <Card className='parki'>
                    <h3 className='card-title'>Rechercher une place</h3>
                    <SearchParki handleSearchSubmit={handleSearchSubmit}/>
                </Card>
            </div>
        </div>
    )
}

export default LandigSection
