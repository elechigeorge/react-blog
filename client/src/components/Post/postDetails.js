import React, { useState, useEffect } from 'react';
import { getPost } from '../../actions/postAction';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap'

function PostDetails(props) {

    const [Post, setPost] = useState(0);

    const dispatch = useDispatch();

    const post = useSelector(state => state.posts.post);

    useEffect(() => {
        dispatch(getPost(props.match.params.id));
    }, []);

    return (
        <div>
            <Container>

                {
                    Object.keys(post).length == 0 ? <h1>Pease wait...</h1> : (
                        <div>
                            <h1>{post.title}</h1>
                            <hr />
                        </div>
                    )


                }
            </Container>
        </div>
    )
}

export default PostDetails;