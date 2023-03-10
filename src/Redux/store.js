import { combineReducers, createStore } from 'redux'; 
import handleData from './handleData';

const store = createStore(
    combineReducers({
        repos:handleData,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;