import {v1} from "uuid";
import {rerenderEntireTree} from "../index";
import {ADD_MESSAGE} from "./store";

let initialState = {
    messageData: [
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'Im here'},
        {id: v1(), message: 'Wow'},
        {id: v1(), message: 'How are you'},

    ],
    dialogsData: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Bob'},
        {id: 4, name: 'Nasty'},
    ]
}
//
let copyInitialState = {
    ...initialState,
}
copyInitialState.dialogsData = [...initialState.dialogsData]
copyInitialState.messageData = [...initialState.messageData]

console.log(copyInitialState)
//
export const dialogsReducer = (state = copyInitialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE :
            let newMes = {
                id: v1(),
                message: action.title
            }

            state.messageData.push(newMes)
            return state

        default:
            return state
    }
}

export const addMessageAC = (title) => {
    return {
        type: ADD_MESSAGE,
        title
    }
}
