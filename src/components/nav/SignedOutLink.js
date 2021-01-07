import React from 'react';
import { Link } from 'react-router-dom';

function SignedOutLink() {
    return (
        <ul>
            <Link to='/signin'>
                <li>SignIn</li>
            </Link>
            <Link to='/login'>
                <li>LogIn</li>
            </Link>
        </ul>
    )
}

export default SignedOutLink
