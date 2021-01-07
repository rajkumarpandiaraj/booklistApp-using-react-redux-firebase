export const addBook = details =>{
    return (dispatch, getState, {getFirebase}) =>{
        const firestore = getFirebase().firestore()
        firestore.collection('books').add({
            ...details,
            date : new Date(),
            authorId : getState().firebase.auth.uid
        })
        .then(() => dispatch({type : 'BOOK_ADDED_SUCCESS'}))
        .catch(() => dispatch({type : "BOOK_ADDED_ERROR"}) )
    }
}

export const deleteBook = id =>{
    return (dispatch, getState, {getFirebase}) => {
        const firestore = getFirebase().firestore()

        firestore.collection('books').doc(id).delete()
        .then(()=> dispatch({type : 'BOOK_DELETED'}))
        .catch(err => dispatch({type : 'BOOK_ERROR'}))
    }
}