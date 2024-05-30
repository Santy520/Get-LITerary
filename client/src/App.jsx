import WelcomeScreen from './components/WelcomeScreen'
import DiscussionPage from './components/DiscussionPage'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      < Header/>
      <Routes>
        <Route exact path="/" element={<WelcomeScreen />}></Route>
        <Route exact path="/Discussion" element={<DiscussionPage />}></Route>

      </Routes>
    </>
  )

}

export default App
