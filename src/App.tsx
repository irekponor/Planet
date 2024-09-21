import Responsive from "./components/Responsive";
import Home from "./pages/Home";
import Solarsystem from "./pages/Solarsystem";
import DYK from "./pages/DYK";
import Contact from "./pages/Contact";
import Mercury from "./pages/Mercury";

function App() {
  return (
    <div>
      <Responsive />
      <Route index element={<Home />} />
      <Route path="main" element={<Home />} />
      <Route path="space" element={<Solarsystem />} />
      <Route path="news" element={<DYK />} />
      <Route path="message" element={<Contact />} />
      <Route path="planet" element={<Mercury />} />
    </div>
  );
}

export default App;
