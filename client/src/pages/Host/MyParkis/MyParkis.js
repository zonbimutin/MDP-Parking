import React, {useEffect, useState} from 'react'

// GraphQL
import { useQuery } from "@apollo/client";
import { GET_PARKINGS } from "../../../gql/host";

import ParkiRegisterModal from '../../../components/modals/ParkiRegisterModal/ParkiRegisterModal';
import ParkiListHost from '../../../components/Host/ParkiListHost/ParkiListHost';
import Footer from '../../../components/Footer';

import './MyParkis.scss'

const MyParkis = () => {

    const [parkis, setParkis] = useState([])

    const { data, loading, refetch} = useQuery(GET_PARKINGS, {});

    useEffect(() => {
        if(data){
            console.log(data)
            setParkis(data.getPakingsByHost)
        }
        
    }, [data])

    useEffect(() => {
        refetch({})
    }, [])


    return (
        <>
            <div className="MyParkis parki container">
                <div className="MyParkis__title">
                    <div className="parki page-title">Mes Parkis</div>
                    <div className="MyParkis__create">
                        <ParkiRegisterModal trigger={<button className="parki btn btn-gradient-primary btn-lg">Louer ma place</button>} />
                    </div>
                </div>
                { parkis && 
                    <ParkiListHost parkis={parkis} loading={loading}/>
                }

            </div>
            <Footer/>
        </>
    )
}

export default MyParkis
