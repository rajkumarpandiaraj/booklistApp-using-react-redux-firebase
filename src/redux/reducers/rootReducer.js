import taskReducer from './taskReducer';
import authReducer from './authReducer'
import {combineReducers} from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';


const rootReducer = combineReducers({
    firebase : firebaseReducer,
    firestore : firestoreReducer,
    taskReducer : taskReducer,
    authReducer : authReducer,
})
export default rootReducer