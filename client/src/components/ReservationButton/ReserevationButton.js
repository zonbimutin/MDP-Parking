import React from 'react'

import useAuth from '../../hooks/useAuth'

import AuthModal from '../modals/AuthModal'
import ReserevationModal from '../modals/ReservationModal'

const ReserevationButton = ({parki}) => {

    const { auth } = useAuth()

    return (
        <>
            { auth ? (
                <ReserevationModal parki={parki} trigger={<button className="parki btn btn-gradient-primary btn-lg">Reserver</button>} />
            ) : (
                <AuthModal trigger={<button className="parki btn btn-gradient-primary btn-lg">Reserver</button>} />
            )}
        </>
    )
}

export default ReserevationButton
