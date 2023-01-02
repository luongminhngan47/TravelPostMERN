import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api/index';

//action creator
//search for redux toolkit createAction to understand this better
 export const getPosts = createAsyncThunk('FETCH_ALL', async () => {
        try {
                const response = await api.fetchPosts();
                return response.data;
        } catch (error) {
                console.log(error);
        }
} )

export const createPost = createAsyncThunk('CREATE', async (newPost) => {
        try {
                const response = await api.createPost(newPost);
                
                return response.data;

        } catch (error) {
                console.log(error);
        }
})
