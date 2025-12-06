import { useEffect, useState } from "react";
import Checklist from "./components/Checklist";
import Footer from "./components/Footer";

export default function App() {
  // Inicializa tema baseado no sistema ou localStorage
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="app-container">
      <Checklist />
      <Footer />

      <button 
        onClick={toggleTheme} 
        className="theme-toggle-float" 
        title="Alternar Tema"
        aria-label="Alternar Tema"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </div>
  );
}