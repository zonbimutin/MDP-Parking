import React, {useState, useEffect} from 'react'

import {Card, Image} from 'semantic-ui-react'
import SearchParki from '../../SearchParki'

import './LandingSection.scss'

const LandigSection = () => {


    const [bgImage, setBgImage] = useState('/assets/images/bg/paralax/bg-image-2.jpg')


    useEffect(() => {

        fetch('/assets/images/parki/landing.png')
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
                    <SearchParki />
                </Card>
            </div>
        </div>
    )
}

export default LandigSection
