import {
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./components/Home.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Skills from "./components/Skills.jsx";
import Video from "./components/Video.jsx";
import Header from "./components/Header.jsx";

const AnimatedRoutes = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const isGoingUp = navigationType === "PUSH";
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home isGoingUp={isGoingUp} />} />
          <Route
            path="/portfolio"
            element={<Portfolio isGoingUp={isGoingUp} />}
          />
          <Route path="/skills" element={<Skills isGoingUp={isGoingUp} />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

function App() {
  return (
    <>
      <div className="App">
        <Video />
        {/* <Header /> */}
        <AnimatedRoutes />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Video />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
        </Routes> */}
      </div>
    </>
  );
}

export default App;
