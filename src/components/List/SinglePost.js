import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createNotifier, getSinglePost } from '../../actions';


const SinglePost = ({ match }) => {
    const dispatch = useDispatch();
    const single_post = useSelector( state => state.posts.single );
    const single_loaded = useSelector( state => state.posts.single_loaded );

    const post_id = match.params.id;

    const makeNotifier = () => {
        dispatch( createNotifier('Loaded', 'success') );
    }
    const makeNotifierError = () => {
        dispatch( createNotifier('Not Loaded', 'failure') );
    }

    useEffect( () => {
        dispatch( getSinglePost( post_id ) );
    }, [ post_id ])

    if( !single_loaded ){
        return <div> Loading...</div>
    }

    return(
        <div>
            <h1> {single_post.title} </h1>
            <button onClick={makeNotifier}> Create </button>
            <button onClick={makeNotifierError}> Error </button>

            <p>
                {single_post.body}
            </p>
        </div>
    )


}


export default SinglePost;