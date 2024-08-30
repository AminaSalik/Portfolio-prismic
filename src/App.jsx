import Home from './Components/Home'
import Project from './Components/Project'
import NotFind from './Components/Not_Find'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Single from './Components/Single'
// import LocationInfo from './Components/LocationInfo'
// import Left from './Components/Scrol_Left'
// import ParticlesComponent from './Components/ParticlesBackground'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Portfolio-prismic" element={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Single" element={<Single />} />
          <Route path="/notFind" element={<NotFind />} />
          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<NotFind />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
