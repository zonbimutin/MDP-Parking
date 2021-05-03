import React from 'react';
import { useParams } from 'react-router-dom';

import ParkiRegister from '../../components/Parki/ParkiRegister'

import './Parki.scss';

const Parki = () => {
    const params = useParams();
    console.log(params);
    return (
        <div className="parki container">
            <h1>Parki</h1>
            <h1>{params.idParki}</h1>
            <ParkiRegister/>
        </div>
    )
}

export default Parki;
