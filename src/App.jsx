import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './store/pages/Home.jsx';
import PostDetail from './store/pages/PostDetail.jsx';
import AddPost from './store/pages/AddPost.jsx';
import './App.css';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:id" element={<PostDetail />} />
                <Route path="/add-post" element={<AddPost />} />
            </Routes>
        </Router>
    );
};

export default App;


