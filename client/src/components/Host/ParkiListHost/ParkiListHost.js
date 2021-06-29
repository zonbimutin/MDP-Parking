import React from 'react'

import ParkiItemHost from '../ParkiItemHost/ParkiItemHost'
import { Dimmer, Loader, List } from 'semantic-ui-react'

import './ParkiListHost.scss'
const ParkiListHost = ({parkis, loading}) => {


    return (

        <div className="ParkiListHost">
            
            {loading ? (
                <Dimmer active inverted>
                    <Loader />
                </Dimmer>
            ) : (
                <>
                    {( parkis.length > 0) ? (
                        <List divided relaxed>
                            {parkis.map((parki, index) => {
                                return (
                                    <List.Item key={index} >
                                        <ParkiItemHost parki={parki}/>
                                    </List.Item>
                                )
                            })}
                        </List>
                    ):(
                        <div>Vous n'avez pas encore enregistré de parking</div>
                    )}
                </>
            )}
            
            
        </div>
    )
}

export default ParkiListHost
