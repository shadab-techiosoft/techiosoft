import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CaseCard from './CaseCard';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const textElement = textRef.current;

        // Text Animation (Split words and animate on scroll)
        const splitText = textElement.innerText.split(' ');
        textElement.innerHTML = splitText
            .map(word => `<span class="word">${word}</span>`)
            .join(' ');

        gsap.fromTo(
            '.word',
            {
                opacity: 0.4,
                y: 20,
                color: '#888888',
                ease: 'power1.inOut',
                duration: 1,
                scrollTrigger: {
                    trigger: textElement,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: true,
                },
                stagger: 0.1,
            },
            {
                opacity: 1,
                y: 0,
                color: 'black',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: textElement,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <div className="p-8 h-full  ">
            <div className="mt-4">
                <h1 className="text-4xl font-bold my-4 uppercase">Navigating digital transformation, One step ahead</h1>
                <h3 className='text-2xl font-light'>Simplifying Data Modernization & Management</h3>
                <p
                    ref={textRef}
                    className="text-4xl font-light my-4 transition-colors ease-in-out text-gray-500 duration-500"
                >
                    We provide more than just a technological edge. We’ve partnered with top global organizations to streamline Data Modernization, even in the most challenging environments. Managing massive, varied data sources? We’ve mastered it. Real-time processing across diverse use cases? Handled. Data governance and security in highly regulated industries? No problem. Our comprehensive approach—ranging from building scalable data lakes to ensuring robust data governance and security frameworks—empowers enterprises to turn raw data into actionable insights faster than ever before.
                </p>
            </div>
           
        </div>
    );
};

export default About;