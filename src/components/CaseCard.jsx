import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const cardData = [
  { title: 'Branding', color: '#f56565', textColor: '#f56565' },
  { title: 'Web design', color: '#4299e1', textColor: '#4299e1' },
  { title: 'Marketing', color: '#48bb78', textColor: '#48bb78' },
  { title: 'Development', color: '#ecc94b', textColor: '#ecc94b' },
  { title: 'SEO', color: '#9f7aea', textColor: '#9f7aea' },
  { title: 'Content Creation', color: '#ed64a6', textColor: '#ed64a6' },
  { title: 'Consulting', color: '#667eea', textColor: '#667eea' },
  { title: 'Analytics', color: '#a0aec0', textColor: '#a0aec0' },
];

const CaseCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
          duration: 0.3,
          ease: 'power1.inOut',
        });
      });
    });
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    const arrowIcons = document.querySelectorAll('.arrow-icon');

    gsap.to(cards, {
      flex: (i) => (i === 0 ? 0.6 : 0.4),
      duration: 0.5,
      ease: 'power1.inOut',
    });

    gsap.to(arrowIcons[0], {
      rotate: 35,
      duration: 0.3,
      ease: 'power1.inOut',
    });
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex + 1 < cardData.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="flex justify-center mt-20 p-8 items-center relative">
      <div className="absolute top-[-68px] right-[22px] flex gap-2 p-4">
        <button
          onClick={handlePrev}
          className={`bg-gray-200 p-2 rounded-full ${currentIndex === 0 ? '' : 'px-8'}`}
          disabled={currentIndex === 0}
          style={{ backgroundColor: cardData[currentIndex].color }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className={`rounded-full p-2 ${currentIndex + 1 >= cardData.length ? '' : 'px-8'}`}
          style={{ backgroundColor: cardData[currentIndex].color }}
          disabled={currentIndex + 1 >= cardData.length}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="flex-end">
        <h1 className="text-4xl font-bold">Case Studies</h1>
        <p className="text-sm">We are a creative studio focusing on culture, luxury, editorial & art. Somewhere between sophistication and simplicity.</p>
      </div>
      <div className="card-container flex w-full gap-4 overflow-hidden">
        {cardData.slice(currentIndex, currentIndex + 2).map((card, index) => (
          <div
            key={index}
            className={`case-card card h-80 rounded-xl flex-1 text-white relative overflow-hidden ${index === 0 ? 'active' : ''} ${currentIndex + index === cardData.length - 1 ? 'w-full' : ''}`}
            style={{ backgroundColor: card.color }}
          >
            <div className="p-8">
              <h2 className="text-4xl font-bold subtitle">{card.title}</h2>
              <div
                className="arrow-icon absolute top-4 right-4 cursor-pointer bg-white rounded-full p-2 transition-transform duration-300"
                style={{ color: card.textColor }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rotate-[-35deg]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <p className="text-sm case-card-title absolute bottom-4 left-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                Brand Strategy & Narrative; Visual Identity; Verbal Identity; Brand Roll-out
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseCard;
