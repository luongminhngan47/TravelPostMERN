import { createReducer } from '@reduxjs/toolkit';
import { getPosts,createPost } from '../actions/posts';


 const initialPosts = [];

export const posts = createReducer(initialPosts, (builder) => {
    builder
        .addCase(getPosts.fulfilled, (state, action) => { 
                return action.payload;
        }).addCase(createPost.fulfilled, (state,action) => {
                return [...state, action.payload];
        })
})