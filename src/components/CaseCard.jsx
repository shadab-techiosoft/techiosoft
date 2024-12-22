import React, { useEffect } from 'react'
import gsap from 'gsap';

const CaseCard = () => {
    useEffect(() => {
        const cards = document.querySelectorAll('.card');
        const arrowIcons = document.querySelectorAll('.arrow-icon');
    
        cards.forEach((card, index) => {
          card.addEventListener('mouseenter', () => {
            gsap.to(cards, {
              flex: (i) => (i === index ? 0.6 : 0.4),
              duration: 0.5,
              ease: 'power1.inOut',
            });
    
            gsap.to(arrowIcons[index], {
              rotate: 35,
            //   scaleX: 1.2,
              duration: 0.3,
              ease: 'power1.inOut',
            });
          });
    
          card.addEventListener('mouseleave', () => {
            gsap.to(cards, {
              flex: 1,
              duration: 0.5,
              ease: 'power1.inOut',
            });
    
            gsap.to(arrowIcons[index], {
              rotate: 0,
            //   scaleX: 1,
              duration: 0.3,
              ease: 'power1.inOut',
            });
          });
        });
      }, []);
  return (
    <div className="flex justify-center mt-16 items-center ">
    <div className="card-container flex w-full gap-4 ">
      <div className="case-card card red-card h-80 rounded-xl flex-1 bg-red-500 text-white relative overflow-hidden">
        <div className="p-8">
          <h2 className="text-4xl font-bold subtitle">Branding</h2>
          <div className="arrow-icon absolute top-4 right-4 cursor-pointer bg-white text-red-500 rounded-full p-2 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rotate-[-35deg]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
          <p className="text-sm case-card-title absolute bottom-4 left-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
            Brand Strategy & Narrative; Visual Identity; Verbal Identity; Brand Roll-out
          </p>
        </div>
      </div>
      <div className="case-card card blue-card h-80 rounded-xl flex-1 bg-blue-500 text-white relative overflow-hidden">
        <div className="p-8">
          <h2 className="text-4xl font-bold subtitle">Web design</h2>
          <div className="arrow-icon absolute top-4 right-4  cursor-pointer bg-white text-blue-500 rounded-full p-2 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rotate-[-35deg]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
          <p className="text-sm case-card-title absolute bottom-4 left-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
            Brand Strategy & Narrative; Visual Identity; Verbal Identity; Brand Roll-out
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CaseCard
