import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';
import PageId from '../PageId/PageId';
import NotFound from './NotFound';


export const Main = () => {

    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/:id' component={PageId} />
                <Route component={NotFound} />
            </Switch>
        </main>
    )
}
