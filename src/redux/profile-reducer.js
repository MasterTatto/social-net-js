import {v1} from "uuid";
import {ADD_POST} from "./store";

let initialState = {
    postsData: [
        {id: v1(), messages: 'Hi,How are you', likeCounts: 15},
        {id: v1(), messages: 'It\'s me first post', likeCounts: 23},
    ]
}


export const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST :
            let newPost = {
                id: v1(),
                messages: action.title,
                likeCounts: Math.floor(Math.random() * 30)
            }
            //
            return {
                ...state,
                postsData: [newPost, ...state.postsData]
            }
        //


        default:
            return state
    }
}

export const addPostAC = (title) => {
    return {
        type: ADD_POST,
        title
    }
}