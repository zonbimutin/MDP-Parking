import React from 'react';

import Header from '../components/Headers/Header';
import { Container } from 'semantic-ui-react';

const LayoutBasic = (props) => {

    const { children } = props;

    return (
        <>
            <Header/>
            <Container fluid className="layout-basic">{children}</Container>
        </>
    )
}

export default LayoutBasic
