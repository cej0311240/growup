import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PersonalProject from "./pages/PersonalProject";
import TeamProject from "./pages/TeamProject";
import Why from "./pages/Why";
import "./assets/scss/global.scss"
const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/about")}>About</button>
      <button onClick={() => navigate("/personal")}>Personal Project</button>
      <button onClick={() => navigate("/team")}>Team Project</button>
      <button onClick={() => navigate("/why")}>why</button>
    </div>
  );
};

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/personal" element={<PersonalProject />} />
        <Route path="/team" element={<TeamProject />} />
        <Route path="/why" element={<Why />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
