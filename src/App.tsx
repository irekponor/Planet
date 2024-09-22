import Responsive from "./components/Responsive";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Solarsystem from "./pages/Solarsystem";
import DYK from "./pages/DYK";
import Contact from "./pages/Contact";
import Mercury from "./pages/Mercury";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirectPath = params.get("redirect");

    if (redirectPath && location.pathname !== redirectPath) {
      navigate(redirectPath, { replace: true });
    }
  }, [location, navigate]);

  return (
    <div>
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
    </div>
  );
}

export default App;
