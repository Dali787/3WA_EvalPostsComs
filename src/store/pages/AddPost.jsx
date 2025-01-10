import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../features/postsSlice';
import { useNavigate, Link } from 'react-router-dom';

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Vérifie que les champs soient remplis
        if (title.trim() && body.trim()) {
            dispatch(
                addPost({
                    userId: 1,
                    title: title,
                    body: body,
                })
            );

            setTitle('');
            setBody('');
            navigate('/');
        } else {
            alert('Veuillez remplir tous les champs.');
        }
    };

    return (
        <div className="container">
            <Link to="/">
                <button>Back to Home</button>
            </Link>
            <h1>Add a new post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title :</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Post title"
                    />
                </div>
                <div>
                    <label>Content :</label>
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder="Post Content"
                    ></textarea>
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddPost;
