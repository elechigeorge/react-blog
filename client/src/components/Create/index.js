import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import BSPImage from '../../image/bsp.png'

function Create() {
    const [Post, setPost] = useState({
        title: '',
        body: '',
        tags: ''
    })

    function onSubmit(e) {
        e.preventDefault();

        console.log('submitted...', Post)
    }

    function onTextChange(e) {
        setPost({ ...Post, [e.target.name]: e.target.value })
    }

    return (
        <div className="mt-5">
            <Container>
                <Row>
                    <Col md={6} sm={6} lg={6}>
                        <Form onSubmit={onSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Title"
                                    name="title"

                                    onChange={onTextChange}
                                />
                                <Form.Text className="text-muted">
                                    Name for your blog post...
    </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Tags</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Hashtags i.e. React, Angular, Vue"
                                    name="tags"

                                    onChange={onTextChange}
                                />
                                <Form.Text className="text-muted">
                                    Write you commer seperated tags here
    </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Label>Body</Form.Label>
                                <Form.Control as="textarea" rows={3}
                                    name="body"

                                    onChange={onTextChange}
                                />
                            </Form.Group>
                            <Button
                                variant="success"
                                type="submit"
                                className="btn-block"

                            >                              Submit
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

export default Create;
