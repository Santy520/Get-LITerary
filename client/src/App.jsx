import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomeScreen from './pages/WelcomeScreen';
import DiscussionBoard from './pages/DiscussionBoard';
import Header from './components/Header';
import Navbar from './components/navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PostForm from './components/PostForm';
import Post from './components/Post';
// import './App.css';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/WelcomeScreen" element={<WelcomeScreen />} />
        <Route exact path="/Discussion" element={<DiscussionBoard />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/PostForm" element={<PostForm />} />
        <Route exact path="/Post" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
