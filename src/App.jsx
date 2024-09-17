import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
// import About from './components/About.jsx';
import Portfolio from "./components/Portfolio.jsx";
import Skills from "./components/Skills.jsx";
import Video from "./components/Video.jsx";

function App() {
  return (
    <>
      <div className="App">
        <Video />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Video />} /> */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
