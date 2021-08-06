import {v1} from "uuid";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCounts: 0,
    currentPage: 1,
    isFetching: false
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
        default:
            return state
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