import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, fetchUsers } from '../features/postsSlice';
import { Link } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const status = useSelector((state) => state.posts.status);
    const users = useSelector((state) => state.posts.users || []);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPosts());
        }
        dispatch(fetchUsers());
    }, [status, dispatch]);

    const getAuthorName = (userId) => {
        const user = users.find((user) => user.id === userId);
        return user ? user.name : 'Unknown';
    };

    return (
        <div className="container">
            <h1>Posts</h1>
            <Link to="/add-post">
                <button>Add a New Post</button>
            </Link>
            {status === 'loading' && <p>Loading...</p>}
            {status === 'succeeded' &&
                posts.map((post) => (
                    <div key={post.id} className="post">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <p>By: {getAuthorName(post.userId)}</p>
                        <Link to={`/post/${post.id}`}>View Details</Link>
                    </div>
                ))}
        </div>
    );
};

export default Home;
