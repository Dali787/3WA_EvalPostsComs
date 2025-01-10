import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/comments';

export const fetchComments = createAsyncThunk('comments/fetchComments', async (postId) => {
    const response = await axios.get(`${API_URL}?postId=${postId}`);
    return response.data;
});

export const addComment = createAsyncThunk('comments/addComment', async (newComment) => {
    const response = await axios.post(API_URL, newComment);
    return response.data;
});

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.comments = action.payload;
            })
            .addCase(addComment.fulfilled, (state, action) => {
                state.comments.push(action.payload);
            });
    },
});

export default commentsSlice.reducer;
