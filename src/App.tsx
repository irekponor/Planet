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
        <Route path="/main" element={<Home />} />
        <Route path="" element={<Solarsystem />} />
        <Route path="/news" element={<DYK />} />
        <Route path="" element={<Contact />} />
        <Route path="" element={<Mercury />} />
      </Routes>
    </>
  );
}

export default App;
