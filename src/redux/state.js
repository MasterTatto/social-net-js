import {v1} from "uuid";
import {rerenderEntireTree} from "../index";
//
const ADD_POST = "ADD-POST";
const ADD_MESSAGE = "ADD-MESSAGE";
//
export const addPostAC = (title) => {
    return {
        type:ADD_POST,
        title
    }
}
//
export const addMessageAC = (title) => {
    return {
        type:ADD_MESSAGE,
        title
    }
}
//
export let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: v1(), messages: 'Hi,How are you', likeCounts: 15},
                {id: v1(), messages: 'It\'s me first post', likeCounts: 23},
            ]
        },
        dialogsPage: {
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
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        switch (action.type) {

            case ADD_POST :
                let newPost = {
                    id: v1(),
                    messages: action.title,
                    likeCounts: Math.floor(Math.random() * 30)
                }

                this._state.profilePage.postsData.unshift(newPost)
                return rerenderEntireTree(this._state);

            case ADD_MESSAGE :
                let newMes = {
                    id: v1(),
                    message: action.title
                }

                this._state.dialogsPage.messageData.push(newMes)
                return rerenderEntireTree(this._state);

            default :
                throw new Error('invalid type')
        }
    }

}


