import React from 'react';
import { logout } from '../../redux/actions/authActions';
import { connect } from 'react-redux';

function SignedInLinks({logouts}) {
    return (
        <ul>
            <li onClick={logouts}>Logout</li>
        </ul>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        logouts : () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
