
// import paths for : welcome, discussionboard, login, signup and topic now point to pages
// implementing directory changes

import WelcomeScreen from './pages/WelcomeScreen';
import DiscussionBoard from './pages/DiscussionBoard';
import Header from './components/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Topic from './pages/Topic';
import PostForm from './components/PostForm';
import Post from './components/Post';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<WelcomeScreen />} />
        <Route exact path="/Discussion" element={<DiscussionBoard />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/Topic" element={<Topic />} />
        <Route exact path="/PostForm" element={<PostForm />} />
        <Route exact path="/Post" element={<Post />} />

      </Routes>
    </>
  );
}

export default App;
