import React from 'react';
import { map } from 'lodash';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import routes from './routes';

const Navigation = () => {
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
