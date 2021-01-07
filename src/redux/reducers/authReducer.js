const initialState = {

}

const authReducer = (state = initialState, action) => {
    const {type } = action;
    if(type === 'LOGIN_SUCCESS'){
        console.log(type);
        return state;
    }
    if(type === 'LOGOUT_SUCCESS'){
        console.log(type);
        return state;
    }
    if(type === 'LOGIN_FAILED'){
        console.log(type);
        return state;
    }
    if(type === 'SIGNUP_SUCCESS'){
        console.log(type);
        return state;
    }
    if(type === 'SIGNUP_ERROR'){
        console.log(type);
        return state;
    }
    if(type === 'LOGOUT_FAILED'){
        console.log(type);
        return state;
    }

    return state;
}

export default authReducer;