import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const PostForm = ({ addPost }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [tags, setTags] = useState('');

    return (

        <div className="mt-5">
            <Container>
                <Row>
                    <Col md={8} sm={12} lg={8}>
                        <Form onSubmit={e => {
                            e.preventDefault();
                            addPost({ title, body, tags });
                            setTitle('');
                            setBody('');
                            setTags('')
                        }}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    placeholder="Insert title"
                                    value={title} onChange={e => setTitle(e.target.value)}
                                />

                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Tags</Form.Label>
                                <Form.Control
                                    type="tags"
                                    name="tags"
                                    placeholder="Insert tags"
                                    value={tags}
                                    onChange={e => setTags(e.target.value)}
                                />

                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Label>Body</Form.Label>
                                <Form.Control as="textarea" rows={3}
                                    name='body'

                                    placeholder='Create a post'
                                    value={body}
                                    onChange={e => setBody(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Button
                                variant="success"
                                type="submit"
                                className="btn-block"

                            >                              Create
</Button>
                        </Form>
                    </Col>
                    <Col md={4} sm={12} lg={4}>
                        <div style={{
                            display: 'flex',
                            flexDirection: "column",
                            alignItems: 'center',
                            padding: '20px'
                        }}>
                            <p>This is where you can create a new blog post resource...</p>
                        </div>

                    </Col>
                </Row>

            </Container>
        </div>
    );
};

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired
};

export default connect(
    null,
    { addPost }
)(PostForm);