import React, {useEffect, useState} from 'react'

import { Placeholder, Grid, Image } from 'semantic-ui-react'


import data from './placeholder.json'
import './ServiceSection.scss'

const Service = ({service, index}) => {

    const [icon, setIcon] = useState('')
    
    useEffect(() => {
        fetch(service.icon).then(data => setIcon(data.url))
    }, [])

    return  (
        <div key={index} className='Service'>
            <div className='Service__image'>
                <Image src={icon}/>
            </div>
            <div className='Service__description'>
                <div className='Service__description__title'>{service.title}</div>
                <div className='Service__description__description'>{service.description}</div>
            </div>
        </div>
    )
}

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
                  <Service service={service} index={index} />
                ))}
               
            </div>
        </div>
    )
}

export default ServiceSection
