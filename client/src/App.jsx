import WelcomeScreen from './pages/WelcomeScreen'
import DiscussionBoard from './pages/DiscussionBoard'
import Header from './components/Header'
import Login from './pages/Login'
import Signup from './pages/Signup'
import PostForm from './components/PostForm'
import Post from './components/Post'
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

      </Routes>
    </>
  )

}

export default App
