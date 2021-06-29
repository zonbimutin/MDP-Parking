import React, { useEffect } from 'react';
import Header from '../Header';

// Token manager
import { getToken } from "../../utils/token";

import useAuth from '../../hooks/useAuth';

// GraphQL
import { useLazyQuery } from "@apollo/client";
import { VALIDATE_TOKEN } from "../../gql/user";

import './LayoutBasic.scss';

const LayoutBasic = (props) => {

    const { children } = props;

    //Apollo
    const [validateToken, { loading, data, error }] = useLazyQuery(VALIDATE_TOKEN);

    const {logout} = useAuth()

    useEffect(() => {

        const token = getToken();
        validateToken({
            variables: { token: {token} },
        })

    }, [])

    useEffect(() => {
        if(error) {
            logout()
        }
    }, [error])

    

    return (
        <div className="LayoutBasic">
            <Header/>
            {children}
        </div>
     
    )
}

export default LayoutBasic
