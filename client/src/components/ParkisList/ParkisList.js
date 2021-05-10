import React, {} from 'react'
import {List, Dimmer, Loader } from 'semantic-ui-react'

import useAuth from '../../hooks/useAuth'

import ParkiItem from '../Parki/ParkiItem'

import './ParkisList.scss'

const ParkisList = ({parkis, selectedParki, loading}) => {

    const { auth } = useAuth()

    return (
        <div className={'ParkisList'}>
            {loading && 
                <Dimmer active >
                    <Loader />
                </Dimmer>
            }
            <List divided relaxed>
                {parkis.map((parki, index) => (
                    <List.Item key={index} >
                        <ParkiItem auth={auth} parki={parki}/>
                    </List.Item>
                ))}
            </List>
        </div>
    )
}


export default ParkisList
