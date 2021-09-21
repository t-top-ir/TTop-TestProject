import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AppContainer from '../containers/App';

const Index = () => (
    <Router>
        <Switch>
            <Route
                path="/"
                component={AppContainer}
            />
        </Switch>
    </Router>
);

export default Index;
