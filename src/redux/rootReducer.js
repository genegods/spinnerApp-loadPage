import { todoReducer, TODO_KEY } from "./todoRedux/todo.reducers";
import { combineReducers } from "redux";


let rootReducer = combineReducers({
    [TODO_KEY]: todoReducer
})

export {rootReducer}