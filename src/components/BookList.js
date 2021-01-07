import React from 'react'
import BookItem from './BookItem';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

function BookList(props) {
    const { bookList, auth } = props;
    if(!auth.uid){
        return <Redirect to='/login'/>
    }
    return (
        <div id="table">
            <table>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Auhtor</td>
                        <td>ISBN</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody id= "table-body">
                    {
                        bookList && bookList.map(item => <BookItem key={item.id} item={item}/>)
                    }
                </tbody>
            </table>
            
        </div>
    )
}
const mapStateToProps = state => {
    return{
        bookList : state.firestore.ordered.books,
        auth : state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props =>{
        return [{
            collection : 'books',
            where : ['authorId', '==', `${props.auth.uid}`]
        }]
    })
)(BookList)
