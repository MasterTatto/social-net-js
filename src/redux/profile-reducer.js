import {v1} from "uuid";

import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";

const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
let initialState = {
    postsData: [
        {id: v1(), messages: 'Hi,How are you', likeCounts: 15},
        {id: v1(), messages: 'It\'s me first post', likeCounts: 23},
    ],
    profile: null,
    status: ''
}


export const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST :
            let newPost = {
                id: v1(),
                messages: action.title,
                likeCounts: Math.floor(Math.random() * 30)
            }
            return {
                ...state,
                postsData: [newPost, ...state.postsData]
            }
        //
        case SET_USER_PROFILE :
            return {...state, profile: action.profile}

        case SET_STATUS :
            return {...state, status: action.status}
        default:
            return state
    }
}
//ACTION_CREATOR
export const addPostAC = (title) => {
    return {
        type: ADD_POST,
        title
    }
}
export const setUserProfileAC = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}
//
export const setStatusAC = (status) => {
    return {
        type: SET_STATUS, status
    }
}
//THUNK
export const getUsersProfileThunkCreator = (id) => {
    return (dispatch) => {
        profileAPI.getProfileInfo(id)
            .then(answer => {
                dispatch(setUserProfileAC(answer.data))
            })
    }
}
//
export const getStatusUserThunkCreator = (id) => {
    return (dispatch) => {
        profileAPI.getStatus(id)
            .then((answer) => {
                dispatch(setStatusAC(answer.data))
            })
    }
}
//
export const updateStatusUserThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then((response) => {
                if (response.resultCode === 0) {
                    dispatch(setStatusAC(status))
                } else {
                    return
                }

            })
    }
}
//