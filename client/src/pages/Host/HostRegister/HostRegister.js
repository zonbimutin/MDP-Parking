import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router';
//hooks
import useAuth from '../../../hooks/useAuth'
// GraphQL
import { useMutation } from "@apollo/client";
import {REGISTER_HOST} from '../../../gql/host'
//token
import { setToken } from '../../../utils/token';
// Toast 
import { toast } from "react-toastify";


import { Image, Dimmer, Loader } from 'semantic-ui-react'

import Footer from '../../../components/Footer'

import data from './placeholder.json'

import './HostRegister.scss'

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

const HostRegister = () => {

    // GraphQL mutation
    const [registerHost] = useMutation(REGISTER_HOST);
    // Hook useAuth
    const { auth, setUser } = useAuth();
    const history = useHistory();


    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)


    const handleRegisterHost = async () => {
        setLoading(true)
        try {
            const { data } = await registerHost({});
            // Get Token
            const { token } = data.registerHost;

            console.log(token)
            // Save Token in localStorage
            setToken(token);
            // Set User in AuthContext
            setUser(token);
            // Toast Success message
            toast.success(`vous êtes inscrit en tant qu'annonceur !`);
        } catch (error) {
            // Toast Error message
            toast.error(error.message);
            console.log(error)
        }
        setLoading(false)
        history.push('/host/parkis')
    }

    useEffect(() => {
        setServices(data.data)
        setLoading(false)
    }, [])




    return (
        <>
            {loading ? (
                <Dimmer active inverted>
                    <Loader inverted>Loading</Loader>
                </Dimmer>
            ) : (
                <>
                    <div className="HostRegister parki container">
                        <div className="HostRegister__title parki page-title">Devenir Annonceur</div>
                        <div className="HostRegister__container">
                            <div className="HostRegister__detail">
                                <div className="HostRegister__detail__item">
                                    <div className="HostRegister__detail__title parki page-subtitle">1. Déposer son annonce facilement !</div>
                                    <div className="HostRegister__detail__detail parki text">
                                        <div>
                                            Vous disposez d’une ou plusieurs places de parking libres (garage,  place extérieure,…) ? Publiez sans frais votre annonce en quelques clics sur Parki !
                                        </div>
                                    </div>
                                </div>
                                <div className="HostRegister__detail__item">
                                    <div className="HostRegister__detail__title parki page-subtitle">2. Pourquoi choisir Parki ?</div>
                                    <div className="HostRegister__detail__detail parki text">
                                        <div>
                                            Profitez d'une importante communauté et optimisez la communication de votre parking. 
                                        </div>
                                        <div>
                                            Grâce à un système simple et intuitif, vous aurez la possibilité de gérer librement vos locations. 
                                        </div>
                                        <div>
                                            En 2 clics, accueillez ou non des automobilistes avant un paiement automatisé.
                                        </div>
                                    </div>
                                </div>
                                <div className="HostRegister__detail__item">
                                    <div className="HostRegister__detail__title parki page-subtitle">3. Un service gagnant gagnant !</div>
                                    <div className="HostRegister__detail__detail parki text">
                                        <div>
                                            Rendez service tout en gagnant de l’argent facilement !
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="HostRegister__info">
                                {services.map((service, index) => (
                                    <Service key={index} service={service} index={index} />
                                ))}
                            </div>
                        </div>
                        <button onClick={() => handleRegisterHost()} className="parki btn btn-gradient-primary btn-lg">Devenir Annonceur!</button>
                    </div>
                    <Footer/>
                </>
            )}
        </>

    )
}

export default HostRegister
