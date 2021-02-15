import { GET_POST, DELETE_POST, LOADING, ADD_POST } from './types';



export const getPost = () => async (dispatch) => {
    try {
        dispatch(setLoading())
        fetch('/post')
            .then(response => response.json())
            .then(data => dispatch({
                type: GET_POST,
                payload: data
            }
            ))


    } catch (error) {
        console.error(error.message)
    }
}


export const createPost = (body) => async (dispatch) => {
    console.log(body)
    try {
        dispatch(setLoading())
        fetch('/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }).then(response => response.json())
            .then(data => dispatch({
                type: ADD_POST,
                payload: data
            }))

    } catch (error) {
        console.error(error.message)
    }


}


export const setLoading = () => {
    return {
        type: LOADING
    }
}