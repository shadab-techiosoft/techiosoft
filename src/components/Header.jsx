import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp, FaMinus, FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import Menus from "./Menus";
const Header = ({ onMenuToggle, onCursorNameChange, onCursorColorChange, onCursorBgChange  }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [cursorName, setCursorName] = useState("Techiosoft");
  const [cursorColor, setCursorColor] = useState("#ffffff");
  const [cursorBg, setCursorBg] = useState("#f97316");
  const handleToggle = () => {
    setMenuOpen(!menuOpen);
    onMenuToggle(!menuOpen);
  };
  const togglePopup = () => {
    setIsPopupVisible((prev) => !prev);
  };

  const closePopup = () => {
    gsap.to(".popup", {
      opacity: 0,
      duration: 0.3,
      onComplete: () => setIsPopupVisible(false),
    });
  };
  const handleConfirm = () => {
    if (cursorName.length > 10) {
      alert("Cursor name cannot exceed 10 characters!");
      return;
    }

    onCursorNameChange(cursorName);
    onCursorColorChange(cursorColor);
    onCursorBgChange(cursorBg);
    closePopup();
  };

  useEffect(() => {
    if (isPopupVisible) {
      gsap.fromTo(
        ".popup",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3 }
      );
    }
  }, [isPopupVisible]);
  const handleMegaMenuToggle = (menuName) => {
    if (activeMegaMenu === menuName) {
      
      setActiveMegaMenu(null);
    } else {
      
      setActiveMegaMenu(menuName);
    }
  };

  useEffect(() => {
    const buttons = document.querySelectorAll(".menu-toggle-button");

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(".mouse-follower", {
          scale: 1.5,
          backgroundColor: "black",
          borderRadius: "50%",
          duration: 0.8,
          ease: "elastic.out(1, 0.5)",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(".mouse-follower", {
          scale: 1,
          backgroundColor: "transparent",
          borderRadius: "50%",
          duration: 0.8,
          ease: "elastic.out(1, 0.5)",
        });
      });
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", null);
        button.removeEventListener("mouseleave", null);
      });
    };
  }, []);

  useEffect(() => {
    const megamenuSelector = `.megamenu-${activeMegaMenu}`;
    if (activeMegaMenu) {
      gsap.to(megamenuSelector, {
        height: "600px",
        width: "100vw",
        duration: 1,
        ease: "slow(0.7,0.7,false)",
        display: "block",
        position: "fixed",
       backgroundColor: "white",
        top: "85px",
        left: 0,
       
        zIndex: 100,
      });
    } else {
      gsap.to(".megamenu", {
        height: 0,
        duration: 0.8,
        ease: "elastic.in(1, 0.5)",
        display: "none",
      });
    }
  }, [activeMegaMenu]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 bg-white shadow-lg">
      <Link to="/" className="text-3xl font-bold">Techiosoft</Link>
      <ul className="flex gap-4">
        <li className="flex items-center gap-1">
          <Link to="/" className="text-lg font-medium hover:text-gray-700">Home</Link>
        </li>
        <li className="flex items-center gap-1">
        <button
            className="text-lg font-medium hover:text-gray-700"
            onClick={(e) => {
              e.preventDefault();
              handleMegaMenuToggle("services");
            }}
          >
            Services
          </button>
          {activeMegaMenu === "services" ? <FaChevronUp /> : <FaChevronDown />}
          <div
            className={`megamenu megamenu-services overflow-hidden ${activeMegaMenu === "services" ? "block" : "hidden"
              }`}
          >
            <Menus />
          </div>
        </li>
        <li className="flex items-center gap-1">
        <button
            className="text-lg font-medium hover:text-gray-700"
            onClick={(e) => {
              e.preventDefault();
              handleMegaMenuToggle("products");
            }}
          >
            Products
            </button>
          {activeMegaMenu === "products" ? <FaChevronUp /> : <FaChevronDown />}
          <div
            className={`megamenu megamenu-products overflow-hidden ${activeMegaMenu === "products" ? "block" : "hidden"
              }`}
          >
            <Menus />
          </div>
        </li>
        <li>
          <Link to="/case-studies" className="text-lg font-medium hover:text-gray-700">
            Case Studies
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-lg font-medium hover:text-gray-700">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-lg font-medium hover:text-gray-700">
            Contact Us
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-end gap-1">
          <p className="change-name font-bold">Welcome, {cursorName}</p>
          <span className="flex gap-1 items-center cursor-pointer" onClick={togglePopup}>Customize Cursor<FaPencilAlt /></span>
        </div>
        <button
          onClick={handleToggle}
          className="menu-toggle-button text-4xl p-2 z-50 bg-black rounded-full"
        >
          {menuOpen ? (
            <FaTimes className="text-white text-2xl" />
          ) : (
            <FaBars className="text-white text-2xl" />
          )}
        </button>
      </div>
      {isPopupVisible && (
        <div
          className="popup absolute top-[80px] right-[50px] bg-gray-800 text-white p-4 rounded-md shadow-md z-50"
          style={{ width: "200px", opacity: 0 }}
        >
          <div className="flex justify-between items-center mb-2">
            <span>Customize  Cursor</span>
            <FaMinus className="cursor-pointer" onClick={closePopup} />
          </div>

          <input
            type="text"
            value={cursorName}
            onChange={(e) => setCursorName(e.target.value)}
            placeholder="Enter name"
            className="w-full px-2 py-1 text-black rounded-md mb-3"
          />

        
          <div className="mb-3">
            <label className="block text-sm mb-1">Text Color:</label>
            <input
              type="color"
              value={cursorColor}
              onChange={(e) => setCursorColor(e.target.value)}
              className="w-full h-8"
            />
          </div>

          {/* Color Picker for Background */}
          <div className="mb-3">
            <label className="block text-sm mb-1">Background Color:</label>
            <input
              type="color"
              value={cursorBg}
              onChange={(e) => setCursorBg(e.target.value)}
              className="w-full h-8"
            />
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            className="bg-orange-500 text-white px-3 py-1 rounded-md w-full hover:bg-orange-600"
          >
            Confirm
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
