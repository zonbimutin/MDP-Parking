import React, {} from 'react'
import {List} from 'semantic-ui-react'

import ParkiItem from '../Parki/ParkiItem'

import './ParkisList.scss'

const ParkisList = ({parkis, selectedParki}) => {

    return (
        <div className={'ParkisList'}>
            <List divided relaxed>
                {parkis.map((parki, index) => (
                    <List.Item>
                        <ParkiItem key={index} parki={parki}/>
                    </List.Item>
                ))}
            </List>
        </div>
    )
}


export default ParkisList
