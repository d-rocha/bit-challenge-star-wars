import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Intro from '../components/pages/intro';
import Main from '../components/pages/main';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Intro}/>
            <Route exact path='/main' component={Main}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;