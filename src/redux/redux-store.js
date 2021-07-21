import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

let reducersPac = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,

})


let store = createStore(reducersPac);



export default store