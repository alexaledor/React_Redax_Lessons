import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { GET_POSTS_REQ, GET_POSTS_RES, GET_POSTS_ERR } from '../../constants';

import { getPosts, getPromisePosts, getFakePosts } from '../../actions';

class List extends Component {

    componentDidMount = () => {
        this.props.getPosts()
    }

    render = () => {

        const { data, loaded } = this.props;

        if( !loaded ){
            return(<h3>Loading...</h3>)
        }

        return(
            <ul>   
                {
                    data.map( item => (
                        <li key={item.id}>
                            <Link to={`/list/${item.id}`}> {item.title}</Link>
                        </li>
                    ))
                }
            </ul>
        )


    }
}

const mapStateToProps = (state, ownProps) => {
    const { posts, loaded, errors } = state.posts;
    return({
        data: posts.map( item => {
            item.color = 'red';
            return item;
        }),
        loaded: loaded,
        errors: errors
    });
}

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    getPosts: () => {   
        dispatch( getPosts() );
        // dispatch( getPromisePosts() );
        // dispatch( getFakePosts );
    }
})


export default connect( mapStateToProps, mapDispatchToProps )(List);
