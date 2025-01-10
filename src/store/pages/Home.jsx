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
        <div className="container" id="top">
            <h1>Posts</h1>
            <div >
                <a href="#bottom">Go to Bottom</a>
            </div>
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


            <div id="bottom" style={{ marginTop: '50px', textAlign: 'center' }}>
                <a href="#top">Go to Top</a>
            </div>
        </div>
    );
};

export default Home;
