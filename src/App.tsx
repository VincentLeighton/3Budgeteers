import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from "./Home";
import About from "./About";
import Budget from "./Budget";


function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Budget</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Budget />} />
      </Routes>
    </Router>
  )
}

export default App
