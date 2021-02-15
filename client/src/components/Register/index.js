import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import BSPImage from '../../image/bsp.png'

function Register() {
    return (
        <div className="mt-5">
            <Container>
                <Row>
                    <Col md={6} sm={6} lg={6}>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
    </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Username" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Example select</Form.Label>
                                <Form.Control as="select">
                                    <option>Computer Science</option>
                                    <option>Science Lab Technology</option>
                                    <option>Business Administration</option>
                                    <option>Electronical Electronics</option>
                                    <option>Computer Engineering</option>
                                </Form.Control>
                            </Form.Group>
                            <Button variant="success" type="submit" className="btn-block">                              Submit
  </Button>
                        </Form>
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
        </div>
    )
}

export default Register;
