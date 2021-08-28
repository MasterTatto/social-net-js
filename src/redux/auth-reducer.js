import {TOGGLE_FETCHING} from "./users-reducer";

let initialState = {
    id: null,
    login: null,
    email: null,
    isFetching: false,
    inAuth: true
}
const SETUSERDATA = "SET_USER_DATA"
const iNAUTH = "IN_AUTH"

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETUSERDATA:
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
        case iNAUTH :
            return {
                ...state,
                inAuth: action.inAuth
            }
        default:
            return state
    }
}
export const SetUserDataAC = (id, login, email) => {
    return {
        type: SETUSERDATA, data: {id, login, email}
    }
}
export const InAuthAC = (inAuth) => {
    return {
        type: iNAUTH, inAuth
    }
}