import { createNotifier } from './notify';
import { GET_POSTS_REQ, GET_POSTS_RES, GET_POSTS_ERR, GET_SINGLE_POST_REQ, GET_SINGLE_POST_RES  } from '../constants';

export const postsRepsonse = ( res ) => ({
    type: GET_POSTS_RES,
    payload: res
});

export const singlePostResponse = res => ({
    type: GET_SINGLE_POST_RES,
    payload: res
})


export const getFakePosts = ( dispatch ) => {

    dispatch({ type: GET_POSTS_REQ });
    console.log('dispatch', dispatch);

    dispatch( postsRepsonse([
        {
            "userId": 1,
            "id": 2,
            "title": "TEST REQ",
            "body": "TEST BODY"
        }
    ]) )
}

export const getSinglePost = id => dispatch => {
    dispatch({ type: GET_SINGLE_POST_REQ });
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then( res => {
            if( res.status === 404 ){
                throw 'Data not found';
            }
            return res.json();
        })
        .then( res => {
            dispatch( singlePostResponse(res) );
            dispatch( createNotifier('Single post', 'success') );
        })
        .catch( err => {
            dispatch({ type: GET_POSTS_ERR, error: err });
            dispatch( createNotifier('Post not found', 'failure') );
        })
}


export const getPosts = ( id ) => ( dispatch, getState ) => {

    dispatch({ type: GET_POSTS_REQ });
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then( res => res.json() )
        .then( res => {
            dispatch( postsRepsonse(res) );
            dispatch( createNotifier('Data recived', 'success') );
        })
        .catch( err => {
            dispatch({ type: GET_POSTS_ERR, error: err });
        })
}

export const getPromisePosts = () => (dispatch) => {
    dispatch({
        type: 'PROMISE',
        promise: fetch(`https://jsonplaceholder.typicode.com/posts`),
        actions: [
            GET_POSTS_REQ,
            GET_POSTS_RES,
            GET_POSTS_ERR
        ]
    })
}