import { combineReducers } from "redux"
import user from './userReducers'
import products from './productsReducer'

const appReducer = combineReducers({ 
    user,
    products
})

const rootReducer = (state, action) => {
  if (action.type === 'RESET_ALL') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer