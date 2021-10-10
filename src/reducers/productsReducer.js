import { DELETE_PRODUCT, SET_ALL_PRODUCTS, UPDATE_PRODUCT, SET_NEW_PRODUCT} from "../constants/productConstans";

const userReducerInitialState = {
    allProducts: [],
    isLogged: false
}

const userReducers = (state = userReducerInitialState, {type, payload}) => {
    switch (type) {
        case SET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: payload
            }
        case SET_NEW_PRODUCT:
            return {
                ...state,
                allProducts: [...state.allProducts, payload]
            }
        case UPDATE_PRODUCT:
            return {
                ...state,
                allProducts: state.allProducts.map((el) => el.doc_id === payload.doc_id ? {...el, ...payload} : el)
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                allProducts: state.allProducts.filter((el) => el.doc_id !== payload)
            }
        
        default:
            return state
    }
}

export default userReducers