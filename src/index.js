import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore, applyMiddleware} from 'redux';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk'
import rootReducer  from "./redux/reducers/rootReducer";

import firebase from './firebase/config';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import { createFirestoreInstance } from "redux-firestore";
import {isLoaded} from 'react-redux-firebase'


const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({getFirebase})))
const rrfProps = {
firebase,
config : {},
dispatch : store.dispatch,
createFirestoreInstance
}
function AuthIsLoaded({children}){
  const auth = useSelector(state => state.firebase.auth);
  if(!isLoaded(auth)){
      return(
          <div className="loading">
              <p>Loading....</p>
          </div>
      )
  }
  return children;
}
ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>
  // {/* </React.StrictMode>, */}
  ,document.getElementById('root')
);
