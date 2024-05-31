import WelcomeScreen from './components/WelcomeScreen'
import DiscussionPage from './components/DiscussionPage'
import Header from './components/Header'
import Login from './components/Login'
import Signup from './components/Signup'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      < Header/>
      <Routes>
        <Route exact path="/" element={<WelcomeScreen />}></Route>
        <Route exact path="/Discussion" element={<DiscussionPage />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/Signup" element={<Signup />}></Route>

      </Routes>
    </>
  )

}

export default App
