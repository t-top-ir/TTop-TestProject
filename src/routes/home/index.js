import React from 'react';
import logo from '../../assets/img/logo.svg';
import {Link} from 'react-router-dom';

const Index = () => (
    <header className="App-header">
        <img
            src={logo}
            className="App-logo"
            alt="logo"
        />
        <p>
            Choose your test.
        </p>
        <Link
            className="App-link mb-3"
            to="/test/1"
        >
            Test 1
        </Link>
        <Link
            className="App-link mb-3"
            to="/test/2"
        >
            Test 2
        </Link>
        <Link
            className="App-link"
            to="/test/3"
        >
            Test 3
        </Link>
    </header>
);

export default Index;
