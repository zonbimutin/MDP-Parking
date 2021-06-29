
import LayoutBasic from '../components/layouts/LayoutBasic';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Error404 from '../pages/Error404';
import Profile from '../pages/Profile';
import Parki from '../pages/Parki';
import Register from '../pages/Host/Parkis/Register';
import MyParkis from '../pages/Host/MyParkis';
import Favorites from '../pages/Favorites';
import Bookings from '../pages/Bookings';
import ReservationDetail from '../pages/ReservationDetail';
import HostRegister from '../pages/Host/HostRegister';


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
        path: '/host/register',
        component: HostRegister,
        exact: true,
        layout: LayoutBasic
    },
    {
        path: '/favorites',
        component: Favorites,
        exact: true,
        layout: LayoutBasic
    },
    {
        path: '/bookings',
        component: Bookings,
        exact: true,
        layout: LayoutBasic
    },
    {
        path: '/bookings/:idBooking',
        component: ReservationDetail,
        exact: true,
        layout: LayoutBasic
    },
    {
        path: '/host/parkis',
        component: MyParkis,
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
