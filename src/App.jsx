import Home from './Components/Home'
import Project from './Components/Project'
// import Taxi from './Components/Taxi'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Single from './Components/Single'
// import LocationInfo from './Components/LocationInfo'
// import Left from'./Components/Scrol_Left'
// import ParticlesComponent from'./Components/ParticlesBackground'
import './App.css'




function App() {
 

  return (
    <>
    <Router>
      <Routes>
   
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} /> 
        <Route path="/Single" element={< Single/>} /> 
        {/* <Route path="/" element={<Taxi />} /> */}
       
      
      </Routes>
    </Router>


   
    </>
  )
}

export default App
