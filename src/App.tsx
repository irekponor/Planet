import Responsive from "./components/Responsive";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Solarsystem from "./pages/Solarsystem";
import DYK from "./pages/DYK";
import Contact from "./pages/Contact";
import Mercury from "./pages/Mercury";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter basename="/Planet/">
        <Responsive />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="space" element={<Solarsystem />} />
          <Route path="news" element={<DYK />} />
          <Route path="message" element={<Contact />} />
          <Route path="planet" element={<Mercury />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
