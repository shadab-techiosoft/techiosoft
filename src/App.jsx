import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import MouseFollower from "./components/MouseFollower";
import { useLenis } from "./hooks/useLenis";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import ContactUsPage from "./pages/ContactUsPage";
import Loader from "./components/Loader";

function App() {
  const [cursorName, setCursorName] = useState("Techiofost");
  const [cursorColor, setCursorColor] = useState("#ffffff");
  const [cursorBg, setCursorBg] = useState("#f97316");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleMenuToggle = (isOpen) => {
    setMenuOpen(isOpen);
  };

  useLenis();

  useEffect(() => {
 
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000); 

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="h-screen bg-white">
        <MouseFollower  
          cursorName={cursorName}
          cursorColor={cursorColor}
          cursorBg={cursorBg}
        />
        <Header 
          onMenuToggle={handleMenuToggle}   
          onCursorNameChange={setCursorName}
          onCursorColorChange={setCursorColor}
          onCursorBgChange={setCursorBg}
        />
        <Menu
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)} // Close menu callback
        />

        <main className="my-10 py-16 px-8 text-5xl font-bold">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
