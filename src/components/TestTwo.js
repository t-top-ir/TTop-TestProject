import React, {useState} from 'react';
import {Button, Col, Row} from 'react-bootstrap';

const TestTwo = () => {
    const [isSecondary, setIsSecondary] = useState(true);
    return (
        <Row className="mt-5">
            <Col md={{span: 6, offset: 3}}>
                <h6 className="text-start">Example:</h6>
                <div className={['sample-box rounded shadow', isSecondary ? 'secondary-background' : ''].join(' ')}>
                    <Button
                        variant={isSecondary ? 'outline-light' : 'light'}
                        onClick={() => setIsSecondary(!isSecondary)}
                    >My Toggle Btn</Button>
                </div>
            </Col>
        </Row>
    );
};

export default TestTwo;
