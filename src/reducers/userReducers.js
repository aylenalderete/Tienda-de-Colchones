import { SET_LOGED_ACTIVE } from "../constants/userConstants";

const userReducerInitialState = {
    isLogged: false
}

const userReducers = (state = userReducerInitialState, {type, payload}) => {
    switch (type) {
        case SET_LOGED_ACTIVE:
            return {
                ...state,
                isLogged: payload || false
            }
        default:
            return state
    }
}

export default userReducers