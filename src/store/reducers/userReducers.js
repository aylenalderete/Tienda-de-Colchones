import { SET_LOGED_ACTIVE } from "../../constants/userConstants";

const userReducerInitialState = {
    currentUser: {}
}

const userReducers = (state = userReducerInitialState, {type, payload}) => {
    switch (type) {
        case SET_LOGED_ACTIVE:
            return {
                ...state,
                currentUser: payload
            }
        default:
            return state
    }
}

export default userReducers