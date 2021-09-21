import {v1} from "uuid";

 export const ADD_MESSAGE = "ADD-MESSAGE";
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
export const dialogsReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case ADD_MESSAGE :
            let newMes = {
                id: v1(),
                message: action.title
            }

            stateCopy = {
                ...state,
                messageData: [...state.messageData, newMes]
            }

            //stateCopy.messageData.push(newMes)
            //
            return stateCopy

        default:
            return state
    }
}
//ACTION_CREATOR
export const addMessageAC = (title) => {
    return {
        type: ADD_MESSAGE,
        title
    }
}
//
