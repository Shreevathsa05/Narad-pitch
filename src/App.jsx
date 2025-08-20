import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Components/Header";
import AiQbGenerator from "./pages/AiQbGenerator";
import QB from "./pages/QB";
import SurveyMonitor from "./pages/SurveyMonitor";
import Analytics from "./pages/Analytics";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aigenerate" element={<AiQbGenerator />} />
        <Route path="/questionbank" element={<QB />} />
        <Route path="/surveymonitor" element={<SurveyMonitor />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-300 text-gray-600">
        <p>© {new Date().getFullYear()} Project Narad. All Rights Reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
