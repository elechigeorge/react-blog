

import { GET_POST, DELETE_POST, LOADING } from '../actions/types';



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