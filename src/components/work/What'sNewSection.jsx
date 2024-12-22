import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { gsap } from "gsap";
import Ai from "../../assets/images/ai.webp";

const data = [
    {
        image: Ai,
        tag: "Studio Insights",
        tagColor: "bg-green-100 text-green-700",
        description: "Celebrating 🎂 7 years of Cocota!",
    },
    {
        image: Ai,
        tag: "Recognitions",
        tagColor: "bg-red-100 text-red-700",
        description: "Cocota, Site of the Day at the Awwwards 🏅",
    },
    {
        image: Ai,
        tag: "Creative",
        tagColor: "bg-gray-100 text-gray-700",
        description: "Swiss Interactive Media Design Days (St.Gallen) 🎤",
    },
    {
        image: Ai,
        tag: "Studio Talks",
        tagColor: "bg-blue-100 text-blue-700",
        description: "Europe Supplier Diversity & Inclusion Conference (Paris)",
    },
    {
        image: Ai,
        tag: "Studio Talks",
        tagColor: "bg-blue-100 text-blue-700",
        description: "Europe Supplier Diversity & Inclusion Conference (Paris)",
    },
    {
        image: Ai,
        tag: "Studio Talks",
        tagColor: "bg-blue-100 text-blue-700",
        description: "Europe Supplier Diversity & Inclusion Conference (Paris)",
    },
    {
        image: Ai,
        tag: "Studio Talks",
        tagColor: "bg-blue-100 text-blue-700",
        description: "Europe Supplier Diversity & Inclusion Conference (Paris)",
    },
];

const WhatsNewSection = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            const slides = swiperRef.current.querySelectorAll(".swiper-slide");
            gsap.fromTo(
                slides,
                { opacity: 0, x: 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    stagger: 0.2,
                    ease: "power2.out",
                }
            );
        }
    }, []);

    return (
        <div className="mt-16 relative px-8">
            <h2 className="text-2xl font-semibold mb-6">WHAT'S NEW</h2>
            <div className="relative">
                <Swiper
                    ref={swiperRef}
                    spaceBetween={30}
                    slidesPerView={1.2}
                    navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom",
                    }}
                    modules={[Navigation]}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="pb-10"
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="rounded-lg p-4 flex gap-3 border border-transparent"
                                onMouseEnter={(e) => {
                                    gsap.to(e.currentTarget, {
                                        borderColor: "gray",
                                        borderWidth: 1,
                                        duration: 0.3,
                                        ease: "power2.out",
                                    });
                                }}
                                onMouseLeave={(e) => {
                                    gsap.to(e.currentTarget, {
                                        borderColor: "transparent",
                                        duration: 0.3,
                                        ease: "power2.out",
                                    });
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.description}
                                    className="rounded-lg mb-4 w-20"
                                />
                                <div className="flex flex-col space-y-2">
                                    <span
                                        className={`px-3 py-1 rounded-full w-fit text-sm font-medium ${item.tagColor} inline-block mb-2`}
                                    >
                                        {item.tag}
                                    </span>
                                    <p className="text-base font-medium">{item.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="absolute top-[-70px] right-0 flex items-center space-x-2 z-10 p-4">
                    <button className="swiper-button-prev-custom bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="black"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <button className="swiper-button-next-custom bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="black"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WhatsNewSection;
