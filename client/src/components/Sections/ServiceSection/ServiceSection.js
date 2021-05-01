import React, {useEffect, useState} from 'react'

import { Placeholder, Grid, Image } from 'semantic-ui-react'


import data from './placeholder.json'
import './ServiceSection.scss'

const ServiceSection = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        setServices(data.data)
    }, [])


    return (
        <div className='ServiceSection section parki container'>
            <h1 className='section__title' >Ce qui va vous plaire !</h1>
            <div className='ServiceSection__serviceContainer'>
                {services.map((service, index) => (
                    <div className='Service'>
                        <div className='Service__image'>
                        <Placeholder>
                            <Placeholder.Image square />
                        </Placeholder>
                        </div>
                        <div className='Service__description'>
                            <Placeholder>
                                <Placeholder.Paragraph>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Paragraph>
                            </Placeholder>
                        </div>
                    </div>
                ))}
               
            </div>
        </div>
    )
}

export default ServiceSection
