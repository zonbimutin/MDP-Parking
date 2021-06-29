import React from 'react'
import { Link } from 'react-router-dom';

import {Icon, Button} from 'semantic-ui-react'


import './Footer.scss'

const Footer = () => {
    return (
        <div className="Footer">
            <div>
                <div className="Footer__header">
                    <div>Nous Suivre</div>
                    <span>Pour ne rien rater !</span>
                </div>
                <div className="Footer__subscribe">
                    <div className="ui icon input"><input type="text" placeholder="Votre e-mail..."/><Button>OK</Button></div>
                </div>
                <div className="Footer__socialMedia">
                    <a href="https://es-la.facebook.com/"><Icon  link size='large' name='instagram' /></a>
                    <a href="https://es-la.facebook.com/"><Icon  link size='large' name='snapchat ghost' /></a>
                    <a href="https://es-la.facebook.com/"><Icon link size='large' name='twitter' /></a>
                    <a href="https://es-la.facebook.com/"><Icon link size='large' name='facebook f' /></a>
                </div>
                    
            </div>
            <div>
                <div className="Footer__header">
                    <div>Infos Utile</div>
                </div>
                <div className="Footer__linksList">
                    <Link to="/">Mention légal</Link>
                    <Link to="/">FAQ</Link>
                    <Link to="/">Contact</Link>
                    <Link to="/">Comment ça marche ?</Link>
                    <Link to="/">Témoignages</Link>
                    <Link to="/">Actualité</Link>
                </div>
            </div>
            <div>
                <div className="Footer__header">
                    <div>Parki</div>
                </div>
                <div className="Footer__linksList">
                    <Link to="/">Annecy</Link>
                    <Link to="/">Qui somme nous ?</Link>

                </div>
            </div>
            <div>
                <div className="Footer__header">
                    <div>Espaces utilisateur</div>
                </div>
                <div className="Footer__linksList">
                    <Link to="/">Devenir Annonceur</Link>
                    <Link to="/">S’inscrire</Link>
                    <Link to="/">Connexion</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
