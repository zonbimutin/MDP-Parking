import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const params = useParams();
    console.log(params);
    return (
        <div>
            <h1>Profile</h1>
            <h2>{params.idUser}</h2>
        </div>
    )
}

export default Profile;
