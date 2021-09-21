import React, {useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import TestOne from '../../components/TestOne';
import {testOneData} from '../../constants/defaultValues';

const One = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        setData(testOneData);
    }, []);
    // >>>>>>> Start Test Area >>>>>>>
    useEffect(() => {
        console.log({data});
    }, [data]);


    // >>>>>>>> End Test Area >>>>>>>>
    return (
        <header className="App-header">
            <Container>
                <p>
                    Edit <code>src/test/one.js</code> create a function get <b>Data</b> and return <b>Result</b>.
                </p>
                <TestOne />
                <p className="mb-0 mt-5">
                    <Link
                        to="/"
                        className="App-link"
                    >Back to Home</Link>
                </p>
            </Container>
        </header>
    );
};

export default One;
