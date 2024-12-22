import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const Loader = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const { Engine, Render, Runner, World, Bodies, Mouse, MouseConstraint } = Matter;

    // Create Matter.js engine
    const engine = Engine.create();
    const world = engine.world;

    // Create Renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "#000",
      },
    });

    // Add ground
    const ground = Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight + 50,
      window.innerWidth,
      100,
      {
        isStatic: true,
        render: { fillStyle: "#000" },
      }
    );
    World.add(world, ground);

    // Add balls
    const colors = ["#f97316", "#fecf6a", "#ff6b6b", "#3b82f6", "#facc15", "#34d399", "#10b981", "#7c3aed", "#9333ea", "#f472b6"];
    const balls = [];
    for (let i = 0; i < 150; i++) {
      const ball = Bodies.circle(
        Math.random() * window.innerWidth,
        Math.random() * -500,
        20 + Math.random() * 15,
        {
          restitution: 0.8,
          render: {
            fillStyle: colors[Math.floor(Math.random() * colors.length)],
          },
        }
      );
      balls.push(ball);
    }
    World.add(world, balls);

    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    World.add(world, mouseConstraint);

    render.mouse = mouse;

    // Run engine and renderer
    const runner = Runner.create();
    Runner.run(runner, engine); // Use Runner.run instead of Engine.run
    Render.run(render);

    // Cleanup
    return () => {
      World.clear(world);
      Engine.clear(engine);
      Render.stop(render);
      render.canvas.remove();
    };
  }, []);

  const handleRedirect = () => {
    // Redirect to homepage after loader
    window.location.href = "/"; // Or use `window.location.replace("/")` for a cleaner redirect
  };

  return (
    <div
      className="loader-container"
      ref={sceneRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        overflow: "hidden", 
      }}
    >
      <p className="absolute top-[30%] left-[40%] text-white"> DO You Want to Play again?  Click On Button </p>
      <p className="absolute top-[35%] left-[37%] text-white"> If You Want to Redirect Home Please Wait for 10 seconds</p>
      <button
        className="redirect-button px-8 py-2 bg-[#7C3AED] text-white font-bold rounded-lg"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
         
          border: "none",
          cursor: "pointer",
       
        }}
        onClick={handleRedirect}
      >
        Play More 😍
      </button>
    </div>
  );
};

export default Loader;
