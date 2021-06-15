import React, {} from 'react'
import {List, Dimmer, Loader } from 'semantic-ui-react'

import useAuth from '../../hooks/useAuth'

import ParkiItem from '../Parki/ParkiItem'

import './ParkisList.scss'

const ParkisList = ({parkis, selectedParki, loading, handleSelection}) => {

    const { auth } = useAuth()

    return (
        <div className={'ParkisList'}>
            {loading && 
                <Dimmer active >
                    <Loader />
                </Dimmer>
            }
            <List divided relaxed>
                {parkis.map((parki, index) => {
                    let selected = selectedParki == parki ? true : false

                    return (
                        <List.Item key={index}  onClick={() => handleSelection(parki)}>
                            <ParkiItem auth={auth} parki={parki} selected={selected}/>
                        </List.Item>
                    )
                    

                })}
            </List>
        </div>
    )
}


export default ParkisList
