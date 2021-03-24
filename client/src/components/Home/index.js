import React from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';
import BSPImage from '../../image/bsp.png'

function HomePage() {
    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <Row>
                        <Col md={6} sm={6} lg={6}>
                            <h1>Hello, Bestpotecian</h1>
                            <p>
                                Welcome to the best blogging platform online
  </p>
                            <p>

                                <Button variant="success" className="mr-3 btn-success btn-lg">Signup Today</Button>
                            </p>
                        <p>build your best skill for self reliance... </p>_
                        </Col>

                        <Col md={6} sm={6} lg={6}>
                            <div style={{
                                display: 'flex',
                                flexDirection: "column",
                                alignItems: 'center',
                                padding: '20px'
                            }}>
                                <img src={BSPImage} />
                            </div>
                        </Col>
                    </Row>

                </Container>
            </Jumbotron>

        </div>
    )
}

export default HomePage
