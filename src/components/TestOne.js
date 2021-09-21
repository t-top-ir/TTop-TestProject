import React, {useCallback, useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {testOneData} from '../constants/defaultValues';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism';

function TestOne() {
    const [data, setData] = useState('');
    const [result, setResult] = useState('');

    const transformValue = useCallback((val) => {
        if (typeof val === 'string') {
            return `${val} AE`;
        }
        if (typeof val === 'number') {
            return val + 1;
        }
        if (Array.isArray(val)) {
            return val.map(num => (num + 1));
        }
        return val;
    }, []);

    const transformObject = useCallback((obj) => {
        const transformedObject = {};
        Object.entries(obj).forEach(([key, val]) => {
            transformedObject[key] = transformValue(val);
        });
        return transformedObject;
    }, [transformValue]);

    useEffect(() => {
        const res = transformObject(testOneData);
        setResult(JSON.stringify(res, undefined, 4));
        setData(JSON.stringify(testOneData, undefined, 4));
    }, [transformObject]);

    return (
        <Row className="align-items-center justify-content-center text-start pt-3">
            <Col md={3}>
                <h6>Data:</h6>
                <SyntaxHighlighter
                    language="javascript"
                    style={vscDarkPlus}
                >
                    {data}
                </SyntaxHighlighter>
            </Col>
            <Col md={1}>
                <p className="mb-0 text-center">>>>>></p>
            </Col>
            <Col md={3}>
                <h6>Result:</h6>
                <SyntaxHighlighter
                    language="javascript"
                    style={vscDarkPlus}
                >
                    {result}
                </SyntaxHighlighter>
            </Col>
        </Row>
    );
}

export default TestOne;
