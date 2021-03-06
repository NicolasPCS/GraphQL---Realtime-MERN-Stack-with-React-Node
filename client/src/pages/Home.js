import React, { useState,useContext} from 'react';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
import { useQuery, useLazyQuery } from '@apollo/react-hooks'
import {AuthContext} from '../context/authContext'
import {useHistory} from 'react-router-dom'

const GET_ALL_POSTS = gql`
    {
        allPosts {
            id 
            title
            description
        }
    }
`

const Home = () => {
    const { data, loading, error } = useQuery(GET_ALL_POSTS)
    const [fetchPosts, { data: posts }] = useLazyQuery(GET_ALL_POSTS)
    // Access context
    const {state, dispatch} = useContext(AuthContext)
    // React router
    let history = useHistory()

    const updateUserName = () => {
        dispatch({
            type: 'LOGGED_IN_USER',
            payload: 'Nicolas CS'
        })
    }
    
    if (loading) return <p className="p-5">Loading...</p>
    
    return (
        <div className="container">
        <div className="row p-5">
            {data.allPosts.map(p => (
            <div className="col-md-4" key={p.id}>
                <div className="card">
                <div className="card-body">
                    <div className="card-title">
                    <h4>{p.title}</h4>
                    </div>
                    <p className="card-text">{p.description}</p>
                </div>
                </div>
            </div>
            ))}
        </div>
        <div className="row p-5">
            <hr/>
            <button onClick={() => fetchPosts()} className="btn-btn-raised btn-primary">Fetch posts</button>
        </div>
        <br/>
        {JSON.stringify(state.user)}
        <br/>
        <button className="btn btn-primary" onClick={updateUserName}>Change user name</button>
        <br/>
        {JSON.stringify(history)}
        </div>
    );
};

export default Home;
