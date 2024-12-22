import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MouseFollower = ({ cursorName, cursorColor, cursorBg  }) => {
  const followerRef = useRef(null);
  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const current = { x: pos.x, y: pos.y };

  useEffect(() => {
    const follower = followerRef.current;

    const setPosition = gsap.quickSetter(follower, "css");

    const handleMouseMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
    };

    const tick = () => {
      current.x += (pos.x - current.x) * 0.1;
      current.y += (pos.y - current.y) * 0.1;

      setPosition({ x: current.x, y: current.y });
      requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      className="mouse-follower fixed pointer-events-none w-fit h-fit px-5 py-1 whitespace-nowrap bg-orange-500 text-white flex items-center justify-center rounded-full z-50"
      style={{ transform: "translate(-50%, -50%)",
        backgroundColor: cursorBg,
        color: cursorColor,
       }}
    >
      {cursorName}
    </div>
  );
};

export default MouseFollower;
