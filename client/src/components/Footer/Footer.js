import React from 'react'
import {Input} from 'semantic-ui-react'


import './Footer.scss'

const Footer = () => {
    return (
        <div className="Footer">
           <div>
                <div className="Footer__title">Nous Suivre</div>
                <span>Pour ne rien rater !</span>
                <Input action={{ icon: 'search' }} placeholder='Search...' />
           </div>
           <div>
               <div className="Footer__title">Nous Suivre</div>
           </div>
           <div>
               <div className="Footer__title">Nous Suivre</div>
           </div>
           <div>
               <div className="Footer__title">Nous Suivre</div>
           </div>
        </div>
    )
}

export default Footer
