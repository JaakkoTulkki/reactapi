import { combineReducers } from 'redux'

function reducer(state=false, action) {
    if(action.type === 'TOGGLE_SHOW') return !state;
    return state;
}

function responseReducer(state={}, action) {
    if(action.type === 'RESPONSE') {
        return action.payload;
    }
    return state;
}


export default combineReducers({
    show: reducer,
    response: responseReducer,
})