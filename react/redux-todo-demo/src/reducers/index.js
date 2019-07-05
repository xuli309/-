import { combineReducers } from 'react-redux'

import {
    Add_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from './actions'

const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action){
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;    
        default:
            return state;
    }
}

function todos(state=[], action){
    switch (action.type) {
        case Add_TODO:
           return [
               ...state,
               {
                   text:action.text,
                   complated:false
               }
           ]
    
        case TOGGLE_TODO:
            return state.map((todo,index) => {
                if(index === action.index){
                    return Object.assign({},todo,{
                        complated:!todo.complated
                    })
                }
                return todo
            })
        default:
            return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp