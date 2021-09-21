import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import UserService from './../../utils/service';

const Three = () => {
    // Declare States
    const [user, setUser] = useState({});

    // Get All Users
    useEffect(() => {
        const requestParams = {
            page: 1,
        };
        UserService.getAllUsers(requestParams).then(({success, data}) => {
            if (!success) return;
            console.log('All Users', data);
        });
    }, []);

    // Get Single User
    useEffect(() => {
        const requestBody = {
            id: 2,
        };
        UserService.getUser(requestBody).then(({success, data}) => {
            if (!success) return;
            setUser(data);
            console.log('User', data);
        });
    }, []);

    return (
        <header className="App-header">
            <Container>
                <Row className="mb-3">
                    <Col md={{span: 6, offset: 3}}>
                        <p>
                            Get users from the web service and display them all.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col
                        md={2}
                    >
                        <UserItem user={user} />
                    </Col>
                    <Col md={12}>
                        <p className="mb-0 mt-5">
                            <Link
                                to="/"
                                className="App-link"
                            >Back to Home</Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};
// User Item
const UserItem = ({user}) => (
    <Card
        bg="dark"
        className="text-start"
    >
        <Card.Img
            variant="top"
            src={user.avatar}
        />
        <Card.Body>
            <Card.Title>{`${user.first_name} ${user.last_name}`}</Card.Title>
            <Card.Text className="small">{user.email}</Card.Text>
        </Card.Body>
    </Card>
);
export default Three;
