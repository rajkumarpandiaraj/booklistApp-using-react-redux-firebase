import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLink from './SignedOutLink'
import { connect } from 'react-redux';

function Nav({auth}) {
    console.log(auth);
    return (
        <div className='nav'>
            <h1>BookList</h1>
            <div className='links'>
                {
                    auth.uid &&  <SignedInLinks/>
                }
                {
                    !auth.uid && <SignedOutLink/>
                }
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        auth : state.firebase.auth, 
    }
}

export default connect(mapStateToProps)(Nav)
