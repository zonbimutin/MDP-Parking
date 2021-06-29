import LayoutBasic from '../components/layouts/LayoutBasic';
import Error404 from '../pages/Error404';

import Register from '../pages/Host/Parkis/Register';

const routesHost = [
    {
        path: '/host/parkis/register',
        component: Register,
        exact: true,
        layout: LayoutBasic
    },
    {   
        layout: LayoutBasic,
        component: Error404,
    },
];

export default routesHost;