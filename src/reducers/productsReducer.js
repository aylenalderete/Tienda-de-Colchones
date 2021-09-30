import { SET_ALL_PRODUCTS } from "../constants/productConstans";

const userReducerInitialState = {
    allProducts: []
}

const userReducers = (state = userReducerInitialState, {type, payload}) => {
    switch (type) {
        case SET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: payload
            }
        default:
            return state
    }
}

export default userReducers