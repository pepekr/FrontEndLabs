import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Feedback from './pages/feedback/Feedback';
import Activities from './pages/activities/Activities';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/feedback' element={<Feedback/>}/>
      <Route path = "/activities" element={<Activities/>}/>
    </Routes>
    </>
  )
}

export default App
