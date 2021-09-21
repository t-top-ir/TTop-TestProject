import React from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import TestTwo from '../../components/TestTwo';

const Two = () => {
    return (
        <header className="App-header">
            <Container>
                <Row>
                    <Col md={{span: 6, offset: 3}}>
                        <p>
                            Look at <code>src/assets/scss/App.scss</code> and
                            find <small className="opacity-50">secondary</small> class
                            for <small className="opacity-50">App-header</small> and replace it with the toggle button.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="my-5">
                        {'>>>>   '}
                        <Button
                            size="lg"
                            variant="outline-warning"
                            onClick={() => alert('Add Action')}
                        >Your Toggle Btn</Button>
                        {'   <<<<'}
                    </Col>
                </Row>
                <TestTwo />
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

export default Two;
