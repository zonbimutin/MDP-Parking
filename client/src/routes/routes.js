
import LayoutBasic from '../layouts/LayoutBasic';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Resume from '../pages/Resume';
import Error404 from '../pages/Error404';


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
        path: '/resume',
        component: Resume,
        exact: true,
        layout: LayoutBasic
    },
    {   
        layout: LayoutBasic,
        component: Error404,
    },
];

export default routes;
