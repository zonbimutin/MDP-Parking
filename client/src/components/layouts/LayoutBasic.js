import React from 'react';

import Header from '../Header';
import { Container } from 'semantic-ui-react';

const LayoutBasic = (props) => {

    const { children } = props;

    return (
        <>
            <Header/>
            <div className="LayoutBasic">
                {children}
            </div>
            
        </>
    )
}

export default LayoutBasic
