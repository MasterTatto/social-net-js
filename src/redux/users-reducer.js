import {v1} from "uuid";
import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
export const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
export const TOGGLE_IN_FOLLOWING_PROGRESS = 'TOGGLE_IN_FOLLOWING_PROGRESS'
let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCounts: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}


export const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW :
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userID) {
                        return {
                            ...u, followed: true
                        }
                    }
                    return u
                })
            }

        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userID) {
                        return {
                            ...u, followed: false
                        }
                    }
                    return u
                })
            }

        case SET_USERS:
            return {...state, users: action.users}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_COUNT:
            return {...state, totalUsersCounts: action.totalCount}

        case TOGGLE_FETCHING:
            return {...state, isFetching: action.fetch}
        case TOGGLE_IN_FOLLOWING_PROGRESS:

            return {
                ...state,
                followingInProgress: action.isFetch
                    ? [...state.followingInProgress, action.id]
                    : [state.followingInProgress.filter((f) => f.id !== action.id)]
            }
        default:
            return state
    }
}
//ACTION_CREATOR
export const followingProgressAC = (isFetch, id) => {
    return {
        type: 'TOGGLE_IN_FOLLOWING_PROGRESS', isFetch, id
    }
}
export const followAC = (userID) => {
    return {
        type: FOLLOW,
        userID,
    }
}
export const unFollowAC = (userID) => {
    return {
        type: UNFOLLOW,
        userID
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}
export const setCurrentPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}
export const setTotalCountAC = (totalCount) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount
    }
}
export const setToggleFetchingAC = (fetch) => {
    return {
        type: TOGGLE_FETCHING,
        fetch
    }
}
//
//THUNK
export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setToggleFetchingAC(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(response => {
                dispatch(setToggleFetchingAC(false))
                dispatch(setUsersAC(response.items))
                dispatch(setTotalCountAC(response.totalCount))

            })
    }
}
export const onPageChangedThunkCreator = (page, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPageAC(page))
        dispatch(setToggleFetchingAC(true))
        usersAPI.getUsers(page, pageSize)
            .then(response => {
                dispatch(setToggleFetchingAC(false))
                dispatch(setUsersAC(response.items))

            })
    }
}
export const followingThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(followingProgressAC(true, id))

        usersAPI.unfolowUser(id)
            .then(response => {

                if (response.data.resultCode === 0) {
                    dispatch(unFollowAC(id))
                }
                dispatch(followingProgressAC(false, id))
            })
    }
}
export const unFollowThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(followingProgressAC(true, id))
        usersAPI.followUser(id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followAC(id))
                }
                dispatch(followingProgressAC(false, id))
            })
    }
}
//
