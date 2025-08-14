import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Workflow from './Components/Workflow'
import Report from './Components/Report'
import Header from './Components/Header'


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workflow" element={<Workflow />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Router>
  )
}

export default App
