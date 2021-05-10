
import LayoutBasic from '../components/layouts/LayoutBasic';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Error404 from '../pages/Error404';
import Profile from '../pages/Profile';
import Parki from '../pages/Parki';
import Register from '../pages/Host/Parkis/Register'


const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
        layout: LayoutBasic
    },
    {
        path: '/search',
        component: Search,
        exact: true,
        layout: LayoutBasic
    },
    {
        path: '/profile/:idUser',
        component: Profile,
        exact: true,
        layout: LayoutBasic
    },
    {
        path: '/parki/:idParki',
        component: Parki,
        exact: true,
        layout: LayoutBasic
    },
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

export default routes;
