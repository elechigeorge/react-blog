import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';




const Dashboard = ({

    deleteAccount,
    auth: { user }
}) => {

    return (
        <Fragment>
            <h1 className="large text-primary">Dashboard</h1>
            <p className="lead">
                <i className="fas fa-user" /> Welcome {user && user.name}
            </p>

        </Fragment>
    );
};

Dashboard.propTypes = {

    auth: PropTypes.object.isRequired,

};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, {})(
    Dashboard
);