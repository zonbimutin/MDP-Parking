import React from 'react';
import { useParams } from 'react-router-dom';

import './Parki.scss';

const Parki = () => {
    const params = useParams();
    console.log(params);
    return (
        <div>
            <h1>Parki</h1>
            <h1>{params.idParki}</h1>
        </div>
    )
}

export default Parki;
