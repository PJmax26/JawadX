import "./App.scss";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./Components/Footer";
import Allprojects from "./pages/projects/Allprojects";
import ProjectPage from "./pages/projects/ProjectPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my_bio" element={<About />} />
        <Route path="/projects" element={<Allprojects />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
