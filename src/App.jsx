import { useState } from "react";
import Header from "./Components/Header";
import Homebody from "./Components/Homebody";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div className="bg-[#e9edc9] place-items-center grid grid-cols-1 grid-rows-[100px] justify-center">
          <Header />
          <Routes>
            <Route path="/" element={<Homebody />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
