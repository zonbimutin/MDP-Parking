import React from 'react'

import { Embed } from 'semantic-ui-react'

import './VideoSection.scss'

const VideoSection = () => {

    const infos = [
        {
            title: 'Cherche une place',
            description: 'Avec vos dates et la localisation souhaité'
        },
        {
            title: 'Reserve ta place',
            description: `À la semaine, au mois ou par jour à des horaires pré-déterminer par l'annonceur`
        },
        {
            title: 'Gare toi !',
            description: 'Avec vos dates et la localisation souhaité'
        },
    ]

    return (
        <div className="VideoSection section parki container">
            <h1 className='section__title' >Comment ça marche ?</h1>
            <div className="section__container">
                <div className="VideoSection__info">
                    {infos.map((info, index) => {
                        let number = index + 1
                        return (
                            <div key={index} className="VideoSection__info__item">
                                <div className="VideoSection__info__item__icon">
                                    <span>{number}</span>
                                </div>
                                <div className="VideoSection__info__item__label">
                                    <div className="title">{info.title}</div>
                                    <div className="description">{info.description}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="VideoSection__video">
                    <Embed
                        id='125292332'
                        placeholder='/images/vimeo-example.jpg'
                        source='vimeo'
                    />
                </div>
            </div>
        </div>
    )
}

export default VideoSection
