import {applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {usersReducer} from './users-reducer';
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk";

let reducersPac = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

// let store = createStore(reducersPac);
let store = createStore(reducersPac, applyMiddleware(thunk))
export default store;
window.store = store
