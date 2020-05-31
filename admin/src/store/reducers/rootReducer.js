import authReducer from './authReducer';
import deviceReducer from './deviceReducer';
import categoryReducer from './categoryReducer';
import photographerReducer from './photographerReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    device: deviceReducer,
    category: categoryReducer,
    photographer: photographerReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;