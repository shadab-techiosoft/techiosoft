import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import Ai from "../assets/images/Pantograph.ai_.png";
import CloudService from "../assets/images/Cloud-Services.png";
import ApplicationSupport from "../assets/images/Application-Support-Maintaince.png";
import Bi from "../assets/images/BI-Analytics.png";
import ApplicationManage from "../assets/images/Application-Managed-Services.png";
import UiUx from "../assets/images/uiux.png";
import BusinessSuport from "../assets/images/Business-Process-Automation.png";
import DigitalAutomation from "../assets/images/Digital-Automation.png";

const Menus = () => {
  const [imageSrc, setImageSrc] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0N_NMfyOEUSwqQwafPbDC9mhvwcJkRsrJXA&s");

  useEffect(() => {
    const ulParent = document.querySelector('.changeBackground');
    const links = document.querySelectorAll('.changeBackground .nom li');

    const colors = [
      '#e5e7eb', // Light Gray
      '#fef3c7', // Light Yellow
      '#c7f9cc', // Light Green
      '#ffedd5', // Light Orange
      '#dbeafe', // Light Blue
    ];

    const images = [
      Ai,
      CloudService,
      DigitalAutomation,
      ApplicationManage,
      Bi,
      ApplicationSupport,
      UiUx,
      BusinessSuport,
    ];

    links.forEach((link, index) => {
      const anchor = link.querySelector('a');
      const backgroundColor = colors[index % colors.length];
      const textColor = '#1f2937';

      link.addEventListener('mouseenter', () => {
        setImageSrc(images[index % images.length]);
        gsap.to(ulParent, {
          background: `linear-gradient(to bottom right, white, ${backgroundColor})`,
          duration: 0.1,
          ease: 'power4.out',
        });
        gsap.to(anchor, {
          color: textColor,
          duration: 0.1,
          ease: 'power3.out',
        });
      });

      link.addEventListener('mouseleave', () => {
        gsap.to(ulParent, {
          background: 'white',
          duration: 0.1,
          ease: 'power3.out',
        });
        gsap.to(anchor, {
          color: '#000',
          duration: 0.1,
          ease: 'power3.out',
        });
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', null);
        link.removeEventListener('mouseleave', null);
      });
    };
  }, []);

  return (
    <div className="flex h-full  changeBackground" style={{borderBottom: " 1.2px solid #1f2937" }}>
      <div className="changeBackground max-w-[25%] text-[#1f2937] p-6" style={{borderRight: " 1.2px solid #1f2937" }}>
        <h2 className="text-2xl font-bold">SERVICES</h2>
        <p className="mt-2">
          Techiosoft delivers customized, high-quality web and mobile
          solutions, including apps and games, based on market research
          and client needs, ensuring user satisfaction and brand
          enhancement.
        </p>
        <img className='w-full h-96 rounded-xl mt-3 object-cover	 useDynamic' src={imageSrc} alt="Service" />
      </div>
      <div className="flex-1 p-6 grid grid-cols-1 changeBackground gap-4">
        <ul className="space-y-4 nom">
          <li>
            <Link to="/ai-hub" className="text-[30px] font-medium">AI Hub</Link>
          </li>
          <li>
            <Link to="/cloud-migration" className="text-[30px] font-medium">Cloud Migration</Link>
          </li>
          <li>
            <Link to="/digital-automation" className="text-[30px] font-medium">Digital Automation</Link>
          </li>
          <li>
            <Link to="/data-modernization" className="text-[30px] font-medium">
              Data Modernization and Management
            </Link>
          </li>
          <li>
            <Link to="/bi-systems" className="text-[30px] font-medium">BI and Decision Support Systems</Link>
          </li>
          <li>
            <Link to="/computer-vision" className="text-[30px] font-medium">
              Computer Vision based Analytics
            </Link>
          </li>
          <li>
            <Link to="/ui-ux-design" className="text-[30px] font-medium">UI/UX Design & Development</Link>
          </li>
          <li>
            <Link to="/ai-product-development" className="text-[30px] font-medium">
              AI-powered Product Development
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menus;
