import {v1} from "uuid";
import {rerenderEntireTree} from "../render";

export const state = {
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
}
export let addPost = (title) => {
    let newPost = {
        id: v1(),
        messages: title,
        likeCounts: Math.floor(Math.random() * 30)
    }
    state.profilePage.postsData.unshift(newPost)
    rerenderEntireTree(state)
}

export let addMessage = (title) => {
    let newMes = {
        id:v1() ,
        message:title
    }
    state.dialogsPage.messageData.push(newMes)
     rerenderEntireTree(state)
}