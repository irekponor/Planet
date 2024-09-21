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
      <Home />
      <Solarsystem />
      <DYK />
      <Contact />
      <Mercury />
    </div>
  );
}

export default App;
