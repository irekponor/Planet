import Responsive from "./components/Responsive";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Solarsystem from "./pages/Solarsystem";
import DYK from "./pages/DYK";
import Contact from "./pages/Contact";
import Mercury from "./pages/Mercury";

function App() {
  return (
    <>
      <Responsive />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Solarsystem" element={<Solarsystem />} />
        <Route path="/DYK" element={<DYK />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Mercury" element={<Mercury />} />
      </Routes>
    </>
  );
}

export default App;
