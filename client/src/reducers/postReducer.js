

import { GET_POST, DELETE_POST, LOADING, ADD_POST, GET_POSTS } from '../actions/types';



const initialState = {
    posts: [],
    post: {},
    loading: false
}


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case GET_POST:
            return {
                ...state,
                post: action.payload,
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