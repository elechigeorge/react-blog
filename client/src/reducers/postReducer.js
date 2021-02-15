

import { GET_POST, DELETE_POST, LOADING, ADD_POST } from '../actions/types';



const initialState = {
    posts: [],
    loading: false
}


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POST:
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case ADD_POST:
            return {
                ...state,
                posts: action.payload.newPost,
                loading: false
            }
        case DELETE_POST:
            return {
                ...state
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}