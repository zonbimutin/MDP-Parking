import React,{useState, useEffect} from 'react';
//hooks
import useAuth from '../hooks/useAuth'
import { map } from 'lodash';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import routes from './routes';
import routesHost from './routesHost';

const Navigation = () => {

    const {auth} = useAuth()

    const [hostRoutes, setHostRoutes] = useState([])

    useEffect(() => {
        if(auth && !!auth.host){
            console.log("heyyy")
            setHostRoutes(routesHost)
        }
    }, [auth])


    return (
        <BrowserRouter>
            <Switch>
                { map(routes, (route , index) => (
                    <Route 
                        key={ index }
                        path={ route.path }
                        exact={ route.exact }
                        render={ (props) => (
                            <route.layout>
                                <route.component {...props} />
                            </route.layout>
                        )}
                    />
                )) }

            </Switch>

        </BrowserRouter>

    )
}

export default Navigation;
