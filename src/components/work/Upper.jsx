import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import Awward from "../../assets/images/awward.webp";
const Upper = () => {
    const [hoveredSprite, setHoveredSprite] = useState('');
    useEffect(() => {
        gsap.fromTo(
            ".header-text",
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 1 }
        );
    }, []);

    return (
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-center sm:items-start text-center md:text-left border-b-2  pb-10 px-4 md:px-16 lg:px-32" style={{ borderBottom:"2px dashed red" }}>
            <div className="">
               <img src={Awward} alt="" />
                </div>
            <div className=" sprite flex flex-shrink-0 mb-4 md:mb-0" >
                <div
                    className={`sprite_image w-[15.2rem] aspect-[152/154] bg-cover bg-center transition-transform duration-300 ${hoveredSprite === 'right' ? "animate-none" : ""
                        }`}
                    style={{
                        backgroundImage:
                            "url('https://cocotastudio.com/wp-content/uploads/2024/08/RuPosando_Sprite.png.webp')",
                    }}
                ></div>
               
             
            </div>

            {/* Text Section */}
            <div className="flex flex-col max-w-xl">
                <p className="header-text text-lg text-gray-600 mb-4">
                    From brand consultancy throughout activation, we help companies to
                    forge authentic and lasting relationships with their audience.
                </p>
                <Link
                    to="#"
                    className="header-text px-4 py-1 rounded-full w-fit text-lg text-black link-hover-effect transition"
                >
                    Discover Our Work
                </Link>

                
            </div>
        </div>
    );
};

export default Upper;
