import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TestOne from './test/one';
import TestThree from './test/three';
import TestTwo from './test/two';
import Home from './home/index';
import './../assets/scss/App.scss';

const Index = () => (
    <Router>
        <div className="App">
            <Switch>
                <Route
                    exact
                    path={'/'}
                    component={Home}
                    key={1}
                />
                <Route
                    path={'/test/1'}
                    component={TestOne}
                    key={2}
                />
                <Route
                    path={'/test/2'}
                    component={TestTwo}
                    key={3}
                />
                <Route
                    path={'/test/3'}
                    component={TestThree}
                    key={4}
                />
            </Switch>
        </div>
    </Router>
);

export default Index;
