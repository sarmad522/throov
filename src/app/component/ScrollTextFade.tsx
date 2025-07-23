'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type ScrollTextFadeProps = {
  text?: string; // text prop is optional, defaults to empty string
};

const ScrollTextFade = ({ text = '' }: ScrollTextFadeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll('.word');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    tl.to(words, {
      color: '#FFFFFF',
      stagger: 0.1,
      ease: 'none',
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  if (!text) {
    console.warn('⚠️ ScrollTextFade: No `text` prop provided.');
  }

  const renderWords = text.split(' ').map((word, index) => (
    <span
      key={index}
      className="word inline-block mr-2 will-change-[color]"
      style={{ color: '#4B4B4B' }}
    >
      {word}
    </span>
  ));

  return (
    <section className="pt-8 pb-24 md:py-32 md:px-6">
      <div
        ref={containerRef}
        className="max-w-5xl mx-auto sm:text-[1.2rem] md:text-[2.5rem] leading-snug font-bold flex flex-wrap sm:gap-y-2 md:gap-y-4 p-2"
      >
        {renderWords}
      </div>
    </section>
  );
};

export default ScrollTextFade;
