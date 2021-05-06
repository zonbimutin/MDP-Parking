import React from 'react';
import { useParams } from 'react-router-dom';

import ParkiDetail from '../../components/Parki/ParkiDetail'

import './Parki.scss';

const Parki = () => {
    const params = useParams();
    console.log(params);
    return (
        <div className="parki container">
            <h1>Parki</h1>
            <h1>{params.idParki}</h1>
            <ParkiDetail/>
        </div>
    )
}

export default Parki;
