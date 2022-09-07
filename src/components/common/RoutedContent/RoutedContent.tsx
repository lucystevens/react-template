import React from 'react'
import { flattenRoute, Routing } from 'utils/Routing';
import { Redirect, Route, Switch } from 'react-router-dom';
import './RoutedContent.scss';

interface RoutedContentProps {
    authPage?: string
    notFoundPage?: string
    routing: Routing
}

export const RoutedContent: React.FC<RoutedContentProps> = ({ authPage, notFoundPage, routing }) => {

    let routes = flattenRoute(routing)
    let notFoundLink = notFoundPage ?? "/"
    let authLink = authPage ?? notFoundLink

    return (
        <div className="RoutedContent">
            <Switch>
                { routes.map( r => 
                    <Route key={r.path} path={r.path} render={({ location }) => 
                        r.protectedBy(location)? r.component : <Redirect to={authLink} from={location.pathname}/>
                    }/>
                ) }
                <Route path="*">
                    <Redirect to={notFoundLink}/>
                </Route>
            </Switch>
        </div>
    )

}