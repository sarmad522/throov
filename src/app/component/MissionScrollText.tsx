'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface MissionScrollTextProps {
  text: string;
  fontSize?: string; // You can pass "text-2xl", "text-5xl", etc.
  textColor?: string; // E.g., "text-white", "text-[#A890CD]"
  fontWeight?: string; // E.g., "font-bold", "font-semibold"
  rightImage?: string;
  leftImage?: string;
}

const MissionScrollText = ({
  text,
  fontSize = 'text-4xl md:text-6xl',
  textColor = 'text-white',
  fontWeight = 'font-semibold',
  rightImage,
  leftImage,
}: MissionScrollTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll('.mission-word');

    gsap.set(words, { opacity: 0, x: -50 }); // Start hidden and left

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        end: 'bottom top',
        scrub: true,
      },
    });

    tl.to(words, {
      x: 0,
      opacity: 1,
      stagger: 0.2,
      ease: 'power2.out',
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  const renderWords = text.split(' ').map((word, index) => (
    <span
      key={index}
      className={`mission-word inline-block mr-2 whitespace-nowrap ${textColor}`}
      style={{
        willChange: 'transform, opacity',
      }}
    >
      {word}
    </span>
  ));

  return (
    <section className="relative min-h-[30vh] py-12 ">
      {rightImage && (
        <img
          src={rightImage}
          className="absolute w-[30%] right-[-8%] md:right-[-5%] md:top-[-60%]"
          alt="Right Decoration"
        />
      )}

      <div
        ref={containerRef}
        className={`max-w-6xl mx-auto px-4 md:px-8 flex flex-wrap gap-y-4 leading-snug ${fontSize} ${fontWeight}`}
      >
        {renderWords}
      </div>

      {leftImage && (
        <img
          src={leftImage}
          className="absolute w-[40%] left-[-10%] md:left-[-5%] top-[-4%] md:top-[-80%]"
          alt="Left Decoration"
        />
      )}
    </section>
  );
};

export default MissionScrollText;
