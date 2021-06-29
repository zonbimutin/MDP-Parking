import React, {useEffect, useState} from 'react'
import useAuth from '../../hooks/useAuth'

// GraphQL
// GraphQL 
import { useMutation } from "@apollo/client";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_WISHLIST, REMOVE_WISHLIST_ITEM } from "../../gql/user";

import {List, Dimmer, Loader } from 'semantic-ui-react'
import ParkiFavorites from '../../components/Parki/ParkiFavorites'
import './Favorites.scss'

const Favorites = () => {

    const { auth } = useAuth()
    const [parkis, setParkis] = useState([])
    const { data, loading, refetch } = useQuery(GET_WISHLIST, {});

    const [removeFromWishlist] = useMutation(REMOVE_WISHLIST_ITEM)

    


    const handleUnlike = async (parki) => {
        console.log(parki.id)
        try {
            const message = await removeFromWishlist({
                variables: {
                    id: parki.id
                }
            })

            let index = parkis.indexOf(parki)
            if(index < 0) throw new Error('Un probleme est survenu')
            let newParkis = [...parkis] 
            newParkis.splice(index,1)
            setParkis(newParkis)

        } catch (error) {
            console.log(error.message)
        }
    }


    useEffect(() => {
        if(data) {
            console.log(data.getWishlist)
            setParkis(data.getWishlist)
        }
            
    }, [data])

    if (loading) return null; 

    return (
        <div className="Favorites parki container">
            <h1>Mes Favorites</h1>
            <div className="Favorites__container">
                <List divided relaxed>
                    {parkis.map((parki, index) => (
                        <List.Item key={index} >
                            <ParkiFavorites handleUnlike={(parki) => handleUnlike(parki)} auth={auth} parki={parki}/>
                        </List.Item>
                    ))}
                </List>
            </div>
            
        </div>
    )
}

export default Favorites
