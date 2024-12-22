import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Menus from "./Menus";
const Menu = ({ isOpen, onClose }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Animate menu opening
      gsap.to(menuRef.current, {
        clipPath: "circle(150% at 50% 50%)",
        duration: 0.8,
        ease: "power3.out",
      });
    } else {
      // Animate menu closing
      gsap.to(menuRef.current, {
        clipPath: "circle(0% at 100% 0%)",
        duration: 0.2,
        ease: "power3.in",
        onComplete: onClose, 
      });
    }
  }, [isOpen, onClose]);

  return (
    <div
      ref={menuRef}
      className={`fixed top-[85px] left-0 z-50 w-full h-full bg-black text-white flex items-center justify-center transition-all ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      style={{ clipPath: "circle(0% at 100% 0%)", borderBottomColor: "#1f2937" }}
      >
        <Menus />
    </div>
  );
};

export default Menu;
