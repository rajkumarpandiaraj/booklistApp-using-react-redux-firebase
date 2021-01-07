export const login = cred => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            cred.email,
            cred.password
        ).then(()=> dispatch({type : 'LOGIN_SUCCESS'}))
        .catch(() => dispatch({type : 'LOGIN_FAILED'}))
    }
}
export const logout = () => {
    console.log('hi');
    return (dispatch,getState, {getFirebase}) => {
        console.log('ok');
        const firebase = getFirebase();
        firebase.auth().signOut()
        .then(() => dispatch({type : "LOGOUT_SUCCESS"}))
        .catch(() => dispatch({type : "LOGOUT_FAILED"}))
    }
}

export const signUp =(cred) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()

        firebase.auth().createUserWithEmailAndPassword(
            cred.email,
            cred.password
        ).then(res => { 
            dispatch({type : 'SIGNUP_SUCCESS'})
        }).catch(err => {
            dispatch({type : 'SIGNUP_ERROR', err})
        })
    }
}