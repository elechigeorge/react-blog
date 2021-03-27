import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'moment';
import { ListGroup, Button } from 'react-bootstrap';

const PostItem = ({
    post: { _id, title, body, tags, name, avatar, user, likes, comments, date },
    showActions
}) => (
        <ListGroup defaultActiveKey="#link1">
            <ListGroup.Item variant="light" action href={`/posts/${_id}`}>

                <p className="post-date">{Moment(date).fromNow()}</p>
                <h3>{title}</h3>
                <Button className="btn btn-sm btn-success">{tags}</Button>
            </ListGroup.Item>
        </ListGroup>

    );

PostItem.defaultProps = {
    showActions: true
};

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,

};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, {})(
    PostItem
);