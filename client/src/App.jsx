import WelcomeScreen from './pages/WelcomeScreen'
import DiscussionBoard from './pages/DiscussionBoard'
import Header from './components/Header'
import Login from './pages/Login'
import Signup from './pages/Signup'
import PostForm from './components/PostForm'
import Post from './components/Post'
import ErrorPage from './pages/ErrorPage'
import Profile from './pages/Profile'
import Topic from './pages/Topic'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      < Header/>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/WelcomeScreen" element={<WelcomeScreen />}></Route>
        <Route exact path="/Discussion" element={<DiscussionBoard />}></Route>
        <Route exact path="/Signup" element={<Signup />}></Route>
        <Route exact path="/PostForm" element={<PostForm />}></Route>
        <Route exact path="/Post" element={<Post />}></Route>
        <Route exact path="/Profile" element={<Profile />}></Route>
        <Route exact path="/Topic" element={<Topic />}></Route>
        <Route path="*" element={<ErrorPage />} /> {/* Catch-all route for undefined paths */}
      </Routes>
    </>
  )

}

export default App;
