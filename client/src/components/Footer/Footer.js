import React from 'react'
import { Link } from 'react-router-dom';

import {Input, Icon, Button} from 'semantic-ui-react'


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
                    <div class="ui icon input"><input type="text" placeholder="Votre e-mail..."/><Button>OK</Button></div>
                </div>
                <div className="Footer__socialMedia">
                    <a href="https://es-la.facebook.com/"><Icon  link size='large' name='instagram' /></a>
                    <a href="#"><Icon  link size='large' name='snapchat ghost' /></a>
                    <a href="#"><Icon link size='large' name='twitter' /></a>
                    <a href="#"><Icon link size='large' name='facebook f' /></a>
                </div>
                    
            </div>
            <div>
                <div className="Footer__header">
                    <div>Infos Utile</div>
                </div>
                <div className="Footer__linksList">
                    <Link>Mention légal</Link>
                    <Link>FAQ</Link>
                    <Link>Contact</Link>
                    <Link>Comment ça marche ?</Link>
                    <Link>Témoignages</Link>
                    <Link>Actualité</Link>
                </div>
            </div>
            <div>
                <div className="Footer__header">
                    <div>Parki</div>
                </div>
                <div className="Footer__linksList">
                    <Link>Annecy</Link>
                    <Link>Qui somme nous ?</Link>

                </div>
            </div>
            <div>
                <div className="Footer__header">
                    <div>Espaces utilisateur</div>
                </div>
                <div className="Footer__linksList">
                    <Link>Devenir Annonceur</Link>
                    <Link>S’inscrire</Link>
                    <Link>Connexion</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
