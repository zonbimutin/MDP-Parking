import React, {useEffect, useState} from 'react'

import { Header, Image } from 'semantic-ui-react';

// GraphQL
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../gql/user";

const UserAvatar = ({userId}) => {

    const [user, setUser] = useState(null)

    const { data, error, refetch} = useQuery(GET_USER, {
        variables: {
            id: userId
        }
    });

    useEffect(() => {
        if (data) {
        console.log(data)
        setUser(data.getUser)
        } 
    }, [data]);

    useEffect(() => {
        if(error) console.log(error.message)
    }, [error])

    useEffect(() => {
        refetch({})
    }, [])



    if(!user) return null

    return (
        <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
            <Header.Content>
                {user.firstname} {user.lastname}
                <Header.Subheader>{user.email}</Header.Subheader>
            </Header.Content>
        </Header>
    )
}

export default UserAvatar
