const initialState = {
}

const taskReducer = (state = initialState, action) => {
    const { type } = action
    if(type === 'BOOK_ADDED_SUCCESS'){
        console.log(type);
        return state
    }
    if(type === 'BOOK_ADDED_ERROR'){
        console.log(type);
        return state
    }
    if(type === 'BOOK_DELETED'){
        console.log(type);
        return state
    }
    if(type === 'BOOK_ERROR'){
        console.log(type);
        return state
    }
    return state; 
}

export default taskReducer