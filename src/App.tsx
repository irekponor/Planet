import Responsive from "./components/Responsive";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Solarsystem from "./pages/Solarsystem";
import DYK from "./pages/DYK";
import Contact from "./pages/Contact";
import Mercury from "./pages/Mercury";

function App() {
  return (
    <div>
      <Responsive />
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/main" element={<Home />} />
          <Route path="/space" element={<Solarsystem />} />
          <Route path="/news" element={<DYK />} />
          <Route path="/message" element={<Contact />} />
          <Route path="/planet" element={<Mercury />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
