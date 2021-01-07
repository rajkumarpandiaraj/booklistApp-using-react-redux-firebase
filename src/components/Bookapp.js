import React from 'react'
import BookForm from './BookForm'
import BookList from './BookList'

function Bookapp() {
    return (
        <div className='container'>
            <BookForm/>
            <BookList/>
        </div>
    )
}

export default Bookapp
