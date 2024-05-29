import WelcomeScreen from './components/WelcomeScreen'
import DiscussionPage from './components/DiscussionPage'
// import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>

    < DiscussionPage />
    < WelcomeScreen />
{/* <Routes>
        <Route exact path="/" element={<WelcomeScreen />}></Route>
        <Route exact path="/Discussion" element={<DiscussionPage />}></Route>
        
      </Routes> */}
    </>
  )

}

export default App
