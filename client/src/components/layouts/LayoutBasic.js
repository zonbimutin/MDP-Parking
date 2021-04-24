import React, { useRef, useEffect, useState} from 'react';
import PerfectScrollbar from 'perfect-scrollbar';

import { Container } from 'semantic-ui-react';
import Header from '../Header';

import './LayoutBasic.scss';

const LayoutBasic = (props) => {

    const { children } = props;

    return (
        <div className="LayoutBasic">
            <Header/>
            {children}
        </div>
     
    )
}

export default LayoutBasic
