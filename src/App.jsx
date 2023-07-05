import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Header from "./components/shared/Header.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import SkillsPage from "./pages/SkillsPage.jsx";
import EducationPage from "./pages/EducationPage.jsx";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route caseSensitive path="/" element={<Home />} />
          <Route caseSensitive path="/about-me" element={<AboutPage />} />
          <Route caseSensitive path="/projects" element={<ProjectsPage />} />
          <Route caseSensitive path="/contact-me" element={<ContactPage />} />
          <Route caseSensitive path="/skills" element={<SkillsPage />} />
          <Route caseSensitive path="/education" element={<EducationPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
