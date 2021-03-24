import React, { Component, useState } from 'react';

import { Row, Col, Container, Button, ListGroup, ListGroupItem, ButtonGroup, Card } from 'react-bootstrap';
import DashboardImage from '../../image/bsp.png';




function Index(props) {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div style={{ height: '100vh' }}>


            <div className="mt-5 py-3">
                <Container>
                    <Row>
                        <Col md={12} lg={6} sm={12}>
                            <div style={{ display: 'flex', paddingBottom: '20px' }}>
                                <div className="mr-3">
                                    <img src={DashboardImage} style={{ width: '120px', height: '120px', border: "2px solid white", borderWidth: '5px' }} />
                                </div>

                                <div>
                                    <h3>Jason White</h3>
                                    <p>Professional writer </p>
                                   
                                </div>
                            </div>
                        </Col>

                        <Col md={12} lg={6} sm={12} >
                            <div className="mt-sm-3">
                                <Row>
                                    <Col className="text-center">
                                        <h3>900</h3>
                                        <p>Following</p>
                                    </Col>
                                    <Col className="text-center">
                                        <h3>90k</h3>
                                        <p>Followers</p>
                                    </Col>
                                    <Col className="text-center">
                                        <h3>90</h3>
                                        <p>Articles</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="bg-light pt-3" style={{ height: '' }}>
                <Container>
                    <h2>Recent Article</h2>
                    <Row>
                        <Col md={12} sm={12} lg={8}>
                            <ListGroup>
                                <ListGroupItem dark action className="bg-light mb-2 text-dark" >
                                    <h2>How to add Markdown editor to a blog app in reactjs</h2>
                                    <p>Learn all about the reactjs framework</p>

                                    <ButtonGroup >
                                        <Button variant="success">like</Button>
                                        <Button variant="success">comments</Button>
                                        <Button variant="success">shares</Button>
                                    </ButtonGroup>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col md={12} sm={12} lg={4}>
                            <Card bg="light" className="border-0 text-dark">
                                <Card.Header as="h5" className="bg-success text-light">Sponsored</Card.Header>
                                <Card.Body>
                                    <Card.Title>Become Certified developer</Card.Title>
                                    <Card.Text>
                                        With supporting text below as a natural lead-in to additional content.
    </Card.Text>


                                </Card.Body>
                                <Card.Footer className="bg-success">
                                    <Button className="btn-success btn-md m-0">Visit now</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )

}



export default Index;