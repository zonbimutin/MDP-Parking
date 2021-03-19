import React, {} from 'react'
import PropTypes from 'prop-types'

import {Card, CardContent} from 'semantic-ui-react'

import './ParkisList.scss'

const ParkisList = ({parkis, selectedParki}) => {

    return (
        <div className={'ParkisList'}>
            <Card className={'ParkisList__card'} fluid raised>
                <CardContent>
                    {selectedParki ? (selectedParki.id):('')}
                </CardContent>
            </Card>
        </div>
    )
}

ParkisList.propTypes = {

}

export default ParkisList
