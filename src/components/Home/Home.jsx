import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import video from '../../assets/images/video1.mp4';
import About from '../About';
import Projects from '../Projects';
const Home = () => {
    const [hoveredSprite, setHoveredSprite] = useState(null);
    const charRefs = useRef([]);

    const handleMouseEnter = (sprite) => {
        setHoveredSprite(sprite);
    };

    const handleMouseLeave = () => {
        setHoveredSprite(null);
    };

    const handleCharMouseEnter = (index) => {
        gsap.to(charRefs.current[index], {
            rotation: 360,
            fontSize: '8vw',
            duration: 0.5,
            gap: '0.5rem',
            ease: "power3.out",
            onComplete: () => {
                gsap.to(charRefs.current[index], {
                    rotation: 0,
                    fontSize: '10vw',
                    duration: 0.5,
                    ease: "power3.in",
                    gap: '0.5rem',
                });
            },
        });
    };

    return (
        <>
            <div className=" flex justify-center items-center">
                <h1 className="cnt_title tt1 text-center leading-none">
                    {/* Line 1 */}
                    <div className="flex justify-start items-center line-1 mb-2">
                        <div className="flex space-x-1">
                            {["T", "H", "O", "U", "G", "H", "T", "F", "U", "L"].map(
                                (char, index) => (
                                    <span
                                        key={index}
                                        ref={(el) => (charRefs.current[index] = el)}
                                        className="char text-[10vw] inline-block transform transition-transform duration-300 hover:-translate-y-1"
                                        onMouseEnter={() => handleCharMouseEnter(index)}
                                    >
                                        {char}
                                    </span>
                                )
                            )}
                        </div>
                        {/* Sprite Right */}
                        <div className="relative inline-block">
                            {/* Sprite Container */}
                            <div
                                className={`sprite relative inline-block cursor-pointer`}
                                onMouseEnter={() => handleMouseEnter('right')}
                                onMouseLeave={handleMouseLeave}
                            >
                                {/* Sprite Image */}
                                <div
                                    className={`sprite_image w-[15.2rem] aspect-[152/154] bg-cover bg-center transition-transform duration-300 ${hoveredSprite === 'right' ? "animate-none" : ""
                                        }`}
                                    style={{
                                        backgroundImage:
                                            "url('https://cocotastudio.com/wp-content/uploads/2024/08/RuPosando_Sprite.png.webp')",
                                    }}
                                ></div>

                                {/* Sprite Text */}
                                <div
                                    className={`sprite_text absolute top-[8rem] right-[27vw] transition-all duration-500 ease-[cubic-bezier(0.55,0,0.1,1)] ${hoveredSprite === 'right' ? "opacity-100 scale-100" : "opacity-0 scale-0"
                                        }`}
                                >
                                    {/* Text Hold */}
                                    <div className="sprite_text_hold absolute bottom-[calc(100%+0.4rem)] left-[calc(100%+0.4rem)] bg-[#9FF870] text-black p-4 rounded-xl w-[18rem] transform origin-left-bottom transition-transform duration-500 ease-[cubic-bezier(0.55,0,0.1,1)]">
                                        <p className="text-left text-lg leading-tight opacity-100 transition-opacity duration-500">
                                            Branding agency, design studio, brand strategists, ... You name it!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Line 2 */}
                    <div className="flex justify-between items-center line-2 mb-2">
                        <div className="flex space-x-1">
                            {["D", "E", "S", "I", "G", "N"].map((char, index) => (
                                <span
                                    key={index}
                                    ref={(el) => (charRefs.current[index + 10] = el)}
                                    className="char text-[10vw] inline-block transform transition-transform duration-300 hover:-translate-y-1"
                                    onMouseEnter={() => handleCharMouseEnter(index + 10)}
                                >
                                    {char}
                                </span>
                            ))}
                        </div>
                        <div className="video">
                            <video src={video} loop autoPlay muted className='w-[15.2rem] aspect-[152/154] bg-cover bg-center rounded-2xl transition-transform duration-300'></video>
                        </div>
                        <div className="ml-4 ">
                            {["F", "O", "R"].map((char, index) => (
                                <span
                                    key={index}
                                    ref={(el) => (charRefs.current[index + 16] = el)}
                                    className="char text-[10vw] inline-block transform transition-transform duration-300 hover:-translate-y-1"
                                    onMouseEnter={() => handleCharMouseEnter(index + 16)}
                                >
                                    {char}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Line 3 */}
                    <div className="flex justify-start items-center line-3 mb-2">
                        {/* Sprite Left */}
                        <div className="relative inline-block">
                            {/* Sprite Container */}
                            <div
                                className={`sprite relative inline-block cursor-pointer`}
                                onMouseEnter={() => handleMouseEnter('left')}
                                onMouseLeave={handleMouseLeave}
                            >
                                {/* Sprite Image */}
                                <div
                                    className={`sprite_image w-[15.2rem] aspect-[152/154] bg-cover bg-center transition-transform duration-300 ${hoveredSprite === 'left' ? "animate-none" : ""
                                        }`}
                                    style={{
                                        backgroundImage:
                                            "url('https://cocotastudio.com/wp-content/uploads/2024/06/MariolaNatasha_Talk_Sprite.png.webp')",
                                    }}
                                ></div>

                                {/* Sprite Text */}
                                <div
                                    className={`sprite_text absolute top-[1rem] right-[10rem] transition-all duration-500 ease-[cubic-bezier(0.55,0,0.1,1)] ${hoveredSprite === 'left' ? "opacity-100 scale-100" : "opacity-0 scale-0"
                                        }`}
                                >
                                    {/* Text Hold */}
                                    <div className="sprite_text_hold absolute bottom-[calc(100%+0.4rem)] left-[calc(100%+0.4rem)] bg-[#9FF870] text-black p-4 rounded-xl w-[18rem] transform origin-left-bottom transition-transform duration-500 ease-[cubic-bezier(0.55,0,0.1,1)]">
                                        <p className="text-left text-lg leading-tight opacity-100 transition-opacity duration-500">
                                            Branding agency, design studio, brand strategists, ... You name it!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-1">
                            {["S", "O", "U", "L", "F", "U", "L"].map((char, index) => (
                                <span
                                    key={index}
                                    ref={(el) => (charRefs.current[index + 19] = el)}
                                    className="char text-[10vw] inline-block transform transition-transform duration-300 hover:-translate-y-1"
                                    onMouseEnter={() => handleCharMouseEnter(index + 19)}
                                >
                                    {char}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Line 4 */}
                    <div className="flex justify-end items-center line-4 mb-2">
                        <div className="flex space-x-1">
                            {["B", "R", "A", "N", "D", "S"].map((char, index) => (
                                <span
                                    key={index}
                                    ref={(el) => (charRefs.current[index + 26] = el)}
                                    className="char text-[10vw] inline-block transform transition-transform duration-300 hover:-translate-y-1"
                                    onMouseEnter={() => handleCharMouseEnter(index + 26)}
                                >
                                    {char}
                                </span>
                            ))}
                        </div>
                    </div>
                </h1>
            </div>
            <About />
            <Projects />
        </>
    );
}

export default Home;
