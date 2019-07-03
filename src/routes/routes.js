import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Intro from '../components/Intro';
import Main from '../components/Main';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Intro}/>
            <Route path='/main' component={Main}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;