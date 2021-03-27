import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from '../Posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

import { addLike, removeLike, deletePost, getPost } from '../../actions/post';

const Post = ({ getPost,
    addLike,
    removeLike,
    deletePost,
    auth,
    post: { _id, title, body, tags, name, avatar, user, likes, comments, date, post, loading },
    showActions, match }) => {
    useEffect(() => {
        getPost(match.params.id);
    }, [getPost, match.params.id]);

    return loading || post === null ? (
        <Spinner />
    ) : (
            <Fragment>
                <Link to="/posts" className="btn">
                    Back To Posts
      </Link>
                <h1>{title}</h1>

                <div>
                    {showActions && (
                        <Fragment>
                            <button
                                onClick={() => addLike(_id)}
                                type="button"
                                className="btn btn-light"
                            >
                                <p>Agree</p>
                                <span>{likes.length > 0 ? <span>{likes.length}</span> : 0}</span>
                            </button>
                            <button
                                onClick={() => removeLike(_id)}
                                type="button"
                                className="btn btn-light"
                            >
                                <p>Disagree</p>
                            </button>
                            <Link to={`/posts/${_id}`} className="btn btn-primary">
                                Discussions{' '}
                                {comments.length > 0 && (
                                    <span className="comment-count">{comments.length}</span>
                                )}
                            </Link>
                            {!auth.loading && user === auth.user._id && (
                                <button
                                    onClick={() => deletePost(_id)}
                                    type="button"
                                    className="btn btn-danger"
                                >
                                    <p>Delete</p>
                                </button>
                            )}
                        </Fragment>
                    )}
                </div>
                <CommentForm postId={post._id} />
                <div className="comments">
                    {post.comments.map((comment) => (
                        <CommentItem key={comment._id} comment={comment} postId={post._id} />
                    ))}
                </div>
            </Fragment>
        );
};

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    showActions: PropTypes.bool
};

const mapStateToProps = (state) => ({
    post: state.post,
    auth: state.auth
});

export default connect(mapStateToProps, { getPost, addLike, removeLike, deletePost })(Post);