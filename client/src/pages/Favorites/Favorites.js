import React, {useEffect, useState} from 'react'
import useAuth from '../../hooks/useAuth'

// GraphQL
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_WISHLIST } from "../../gql/user";

import {List, Dimmer, Loader } from 'semantic-ui-react'
import ParkiItem from '../../components/Parki/ParkiItem'
import './Favorites.scss'

const Favorites = () => {

    const { auth } = useAuth()
    const [parkis, setParkis] = useState([])
    const { data, loading } = useQuery(GET_WISHLIST, {});


    useEffect(() => {
        if(data) console.log(data)

    }, [data])


    return (
        <div className="Favorites parki container">
            <h1>Mes Favorites</h1>
            <div className="Favorites__container">
                <List divided relaxed>
                    {parkis.map((parki, index) => (
                        <List.Item key={index} >
                            <ParkiItem auth={auth} parki={parki}/>
                        </List.Item>
                    ))}
                </List>
            </div>
        </div>
    )
}

export default Favorites
