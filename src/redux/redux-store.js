import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {rerenderEntireTree} from "../index";

let reducersPac = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,

})


 let store = createStore(reducersPac);


console.log(store)



export default store