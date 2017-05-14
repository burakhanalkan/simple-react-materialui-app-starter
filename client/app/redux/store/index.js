import appReducers from '../reducers'
import { createStore } from 'redux'

var store = createStore(appReducers)
export default store