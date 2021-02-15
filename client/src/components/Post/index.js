import React, { useState, useEffect } from 'react'
import Moment from 'react-moment';
import 'moment-timezone';
import { ListGroup, Button, Container } from 'react-bootstrap';


function Post(props) {



    return (
        <div>
            <Container>
                <h1>Recent publications</h1>
                {
                    props.posts.length < 1 ? <h2> Loading...</h2> :
                        (
                            props.posts.map((post) => {
                                return (

                                    <ListGroup key={post._id}>
                                        <ListGroup.Item className="mb-2">
                                            <p>Published <Moment fromNow>{post.createdAt}</Moment></p>
                                            <h2>{post.title}</h2>
                                            <Button variant="success" className="bg-md">Read</Button>
                                        </ListGroup.Item>
                                    </ListGroup>

                                )
                            })
                        )

                }
            </Container>
        </div>
    )
}

export default Post;
