import React, { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments, addComment } from '../features/commentsSlice';


const PostDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comments.comments);
    const [commentBody, setCommentBody] = useState('');

    useEffect(() => {
        dispatch(fetchComments(id));
    }, [dispatch, id]);

    const handleAddComment = (e) => {
        e.preventDefault();
        dispatch(addComment({ postId: id, body: commentBody }));
        setCommentBody('');
    };

    return (
        <div className="container">
            <Link to="/">
                <button>Back to Home</button>
            </Link>
            <h1>Post Details</h1>
            <h2>Comments</h2>
            {comments.map((comment) => (
                <div key={comment.id} className="comment">
                    <p>{comment.body}</p>
                </div>
            ))}
            <form onSubmit={handleAddComment} className="add-comment">
                <textarea
                    placeholder="Add a comment"
                    value={commentBody}
                    onChange={(e) => setCommentBody(e.target.value)}
                ></textarea>
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
};

export default PostDetail;
