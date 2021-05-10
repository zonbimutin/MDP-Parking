import React from 'react'

import useAuth from '../../hooks/useAuth'
import AuthModal from '../modals/AuthModal'

const ReserevationButton = () => {

    const { auth } = useAuth()

    return (
        <>
            { auth ? (
                <button className="parki btn btn-gradient-primary btn-lg">Reserver</button>
            ) : (
                <AuthModal trigger={<button className="parki btn btn-gradient-primary btn-lg">Reserver</button>} />
            )}
        </>
    )
}

export default ReserevationButton
