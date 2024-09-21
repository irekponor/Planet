import { Routes, Route, BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Solarsystem from "./pages/Solarsystem";
import DYK from "./pages/DYK";
import Contact from "./pages/Contact";
import Mercury from "./pages/Mercury";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/planet/">
    <Routes>
      <Route index element={<App />} />
      <Route path="main" element={<Home />} />
      <Route path="space" element={<Solarsystem />} />
      <Route path="news" element={<DYK />} />
      <Route path="message" element={<Contact />} />
      <Route path="planet" element={<Mercury />} />
    </Routes>
  </BrowserRouter>
);
