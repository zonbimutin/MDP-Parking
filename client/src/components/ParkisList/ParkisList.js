import React, {} from 'react'
import {List} from 'semantic-ui-react'

import useAuth from '../../hooks/useAuth'

import ParkiItem from '../Parki/ParkiItem'

import './ParkisList.scss'

const ParkisList = ({parkis, selectedParki}) => {

    const { auth } = useAuth()

    return (
        <div className={'ParkisList'}>
            <List divided relaxed>
                {parkis.map((parki, index) => (
                    <List.Item>
                        <ParkiItem auth={auth} key={index} parki={parki}/>
                    </List.Item>
                ))}
            </List>
        </div>
    )
}


export default ParkisList
