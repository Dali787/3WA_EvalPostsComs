import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './features/postsSlice';
import commentsReducer from './features/commentsSlice';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        comments: commentsReducer,
    },
});
console.log("Store initialized: ", store.getState());
export default store;
