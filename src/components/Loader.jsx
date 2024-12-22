import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const Loader = ({ stopLoading }) => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const { Engine, Render, Runner, World, Bodies, Mouse, MouseConstraint } = Matter;
    // Create Matter.js engine
    const engine = Engine.create();
    const world = engine.world;
    engine.gravity.y = 1;

    // Create Renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "#D9EAFD",
      },
    });

    // Add ground and walls
    const ground = Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight + 50,
      window.innerWidth,
      100,
      { isStatic: true, render: { fillStyle: "#000" } }
    );
    const leftWall = Bodies.rectangle(-50, window.innerHeight / 2, 100, window.innerHeight, { isStatic: true });
    const rightWall = Bodies.rectangle(window.innerWidth + 50, window.innerHeight / 2, 100, window.innerHeight, { isStatic: true });
    const ceiling = Bodies.rectangle(window.innerWidth / 2, -50, window.innerWidth, 100, { isStatic: true });

    World.add(world, [ground, leftWall, rightWall, ceiling]);

    // Add images
    const imageUrls = [
      "creativity.png", "focus.png", "goals.png", "growth.png", "idea.png",
      "keep.png", "learn.png", "mission.png", "solution.png", "together.png" , "winner.png",
      "knowledge.png", "motivational.png", "never-give-up.png", "dream.png", "learning.png"
    ];
    for (let i = 0; i < 16; i++) {
      const image = Bodies.rectangle(
        Math.random() * window.innerWidth,
        Math.random() * -1,
        120,
        120,
        {
          restitution: 1.0,
          render: {
            sprite: {
              texture: imageUrls[i],
              xScale: 0.5,
              yScale: 0.5,
            },
          },
        }
      );
      World.add(world, image);
    }

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
    Runner.run(runner, engine);
    Render.run(render);

    // Cleanup
    return () => {
      World.clear(world);
      Engine.clear(engine);
      Render.stop(render);
      render.canvas.remove();
    };
  }, []);

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
    
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          gap: "20px",
          zIndex: 1,
        }}
      >
        <button
          className="redirect-button px-8 py-2 bg-[#7C3AED] text-white font-bold rounded-lg"
          onClick={() => (window.location.href = "/")}
        >
          Play More 😍
        </button>
        <button
          className="stop-loader-button px-8 py-2 bg-[#F97316] text-white font-bold rounded-lg"
          onClick={stopLoading}
        >
          Go To Home  🏠
        </button>
      </div>
    </div>
  );
};

export default Loader;