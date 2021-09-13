import { combineReducers } from "redux"
import user from './userReducers'

const appReducer = combineReducers({ 
    user
})

const rootReducer = (state, action) => {
  if (action.type === 'RESET_ALL') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer