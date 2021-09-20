import {TOGGLE_FETCHING} from "./users-reducer";
import {usersAPI} from "../api/api";

let initialState = {
    id: null,
    login: null,
    email: null,
    inAuth: false
}
const SETUSERDATA = "SET_USER_DATA"
const iNAUTH = "IN_AUTH"

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SETUSERDATA:
            return {
                ...state,
                ...action.data,
                inAuth: true
            }
        default:
            return state
    }
}
//ACTION_CREATOR
export const SetUserDataAC = (id, login, email) => {
    return {
        type: SETUSERDATA, data: {id, login, email}
    }
}
export const setMineDataInfoThunkCreator = () => {
    return (dispatch) => {
        usersAPI.getMineInfoPage()
            .then(response => {

                if (response.resultCode === 0) {
                    let {id, login, email} = response.data
                    dispatch(SetUserDataAC(id, login, email))
                } else {
                    alert(response.messages)
                }

            })
    }
}
//