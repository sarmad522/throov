'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AboutUsScroll from './AboutUsScroll';
import ScrollTextFade from './ScrollTextFade';
const cards = [
  { title: 'Social Media Marketing', image: '/images/socialmedia.png' },
  { title: 'Website Development', image: '/images/websiteDevelpment.png' },
  { title: 'UI/UX Design', image: '/images/uiux.png' },
  { title: 'Branding & Identity', image: '/images/BrandingIdentity2.png' },
  { title: 'SEO Optimization', image: '/images/seachenging.png' },
];

export default function RotatingCardSlider() {
  const [centerIndex, setCenterIndex] = useState(0);
  const total = cards.length;

  const goToIndex = (newIndex: number) => {
    const looped = (newIndex + total) % total;
    setCenterIndex(looped);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToIndex(centerIndex + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [centerIndex]);

  const getOffset = (i: number) => {
    const offset = i - centerIndex;
    if (offset < -Math.floor(total / 2)) return offset + total;
    if (offset > Math.floor(total / 2)) return offset - total;
    return offset;
  };

  const getTransform = (offset: number) => {
    if (offset === 0) return 'z-30 scale-110 rotate-y-0 translate-x-0';
    if (offset === -1) return 'z-20 scale-100 rotate-y-32 -translate-x-[340px]';
    if (offset === 1) return 'z-20 scale-100 -rotate-y-32 translate-x-[340px]';
    if (offset === -2) return 'z-10 scale-95 rotate-y-75 -translate-x-[630px] ';
    if (offset === 2) return 'z-10 scale-95 -rotate-y-75 translate-x-[630px] ';
    return 'hidden';
  };

  return (
    <div
      className="relative w-full   md:mt-[-100px] sm:px-2 md:px-2  md:pb-20 bg-cover bg-center bg-no-repeat text-white"
      style={{
        background: 'linear-gradient(180deg,rgba(2, 1, 2, 0), #4B3B70, #4B3B70, #020102)',
      }}
    >
    
<div className="relative flex justify-center items-center gap-10 perspective-[1200px] h-[650px] sm:h-[650px] md:h-[500px] lg:h-[600px] max-w-full">
        {cards.map((card, i) => {
          const offset = getOffset(i);
          const transformClass = getTransform(offset);

          return (
            <div
              key={i}
              onClick={() => goToIndex(i)}
              className={`absolute cursor-pointer transition-all duration-500 ease-in-out 
  w-[95vw]  md:w-[300px] lg:w-[350px]
  h-[100vh]  md:h-[400px] lg:h-[500px]
  bg-cover bg-center rounded-xl shadow-lg ${transformClass}`}

              style={{
                backgroundImage: `url(${card.image})`,
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="absolute inset-0 rounded-xl flex flex-col justify-end p-4 bg-black/10"></div>
            </div>
          );
        })}
      </div>

      {/* Bottom Arrows and Progress Bar */}
<div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 px-6 mt-10 sm:mt-[50px] md:mt-[100px] max-w-7xl mx-auto w-full">
  {/* Progress Bar */}
  <div className="w-full md:flex-1 h-2 bg-white/20 rounded-full overflow-hidden md:mr-4">
    <div
      className="h-full bg-black transition-all duration-500"
      style={{
        width: `${((centerIndex + 1) / total) * 100}%`,
      }}
    />
  </div>

  {/* Arrows */}
  <div className="flex items-center justify-center space-x-0 w-full md:w-auto">
    <button onClick={() => goToIndex(centerIndex - 1)} className="rounded-full">
      {/* Left Arrow SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" width="87" height="87" viewBox="0 0 87 87" fill="none">
        <path d="M22.8005 64.5204L21.5658 63.2857C10.0457 51.7652 10.0455 33.0868 21.5658 21.5664C33.0862 10.0461 51.7646 10.0463 63.2851 21.5664L64.5198 22.8011C76.0403 34.3216 76.0403 52.9999 64.5198 64.5204C52.9993 76.0409 34.321 76.0409 22.8005 64.5204Z" fill="white" stroke="#CCCCCC"/>
        <path d="M30.7898 42.1596C30.3016 42.6477 30.3016 43.4392 30.7898 43.9273L38.7447 51.8823C39.2329 52.3704 40.0243 52.3704 40.5125 51.8823C41.0006 51.3941 41.0006 50.6027 40.5125 50.1145L33.4414 43.0435L40.5125 35.9724C41.0006 35.4842 41.0006 34.6928 40.5125 34.2046C40.0243 33.7165 39.2329 33.7165 38.7447 34.2046L30.7898 42.1596ZM54.4141 43.0435L54.4141 41.7935L31.6737 41.7935L31.6737 43.0435L31.6737 44.2935L54.4141 44.2935L54.4141 43.0435Z" fill="#6C54A0"/>
      </svg>
    </button>
    <button onClick={() => goToIndex(centerIndex + 1)}>
      {/* Right Arrow SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" width="87" height="87" viewBox="0 0 87 87" fill="none">
        <path d="M21.9098 21.2134C33.6256 9.49772 52.6205 9.49772 64.3362 21.2135L65.5706 22.4478C77.2863 34.1635 77.2863 53.1585 65.5706 64.8742C53.8548 76.5899 34.8599 76.5899 23.1442 64.8742L21.9098 63.6398C10.1941 51.9241 10.1941 32.9292 21.9098 21.2134Z" fill="#6C54A0"/>
        <path d="M55.9934 43.9278C56.4816 43.4397 56.4816 42.6482 55.9934 42.1601L48.0385 34.2051C47.5503 33.717 46.7589 33.717 46.2707 34.2051C45.7826 34.6933 45.7826 35.4847 46.2707 35.9729L53.3418 43.0439L46.2707 50.115C45.7826 50.6032 45.7826 51.3946 46.2707 51.8828C46.7589 52.3709 47.5503 52.3709 48.0385 51.8828L55.9934 43.9278ZM32.3691 43.0439V44.2939H55.1095V43.0439V41.7939H32.3691V43.0439Z" fill="white"/>
      </svg>
    </button>
  </div>
</div>



      {/* Sections Below */}
      <AboutUsScroll />
          <ScrollTextFade text="the throov we turn ideas into visuals that speak. From branding to digital design, we craft creative solutions that are bold, thoughtful, and built to stand out. Whether you are launching something new or leveling up your look, we bring clarity, style and purpose to every pixel." />

    </div>
  );
}
