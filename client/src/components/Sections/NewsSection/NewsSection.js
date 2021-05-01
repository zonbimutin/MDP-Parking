import React, {useState} from 'react'
import Slider from "react-slick";

import {Button, Card, Placeholder} from 'semantic-ui-react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './NewsSection.scss'

const NewsSection = () => {

    const [news, setNews] = useState([1,2,3,4,2,3,4])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]

      };

    return (
        <div className='NewsSection section parki container'>
            <h1 className='section__title'>Les Actualités</h1>
            <div className='NewsSection__container'>
                <Slider {...settings}>
                    {news.map((news, index) => (
                        <div key={index} className='NewsSection__newsItem'>
                            <Card className='NewsItem parki'>
                                <div className='NewsItem__image'>

                                </div>
                                <div className='NewsItem__infoBox'>
                                    <div>
                                        <div className='infobox__info'>
                                            <div className='title'>Un bon plan  pour arrondir les fin du mois</div>
                                            <div className='detail'>Vous habitez en ville et disposez d'un parking libre de temps en temps ? Louez-le</div>
                                        </div>
                                        <div className='infobox_actions'>
                                            <Button icon><i className="fas fa-plus"></i></Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
             
                </Slider>
            </div>
        </div>
    )
}

export default NewsSection
