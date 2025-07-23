'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MissionVisionScrollText: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    const trackWidth = track.scrollWidth - window.innerWidth;

    Array.from(track.children).forEach((el: any) => {
      el.style.color = '#A890CD';
    });

    gsap.to(track, {
      x: -trackWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: wrapper,
        start: 'top bottom',
        end: '+=2500',
        scrub: 0.3,
        onUpdate: (self) => {
          const p = self.progress;
          const r = Math.round(168 + (255 - 168) * p);
          const g = Math.round(144 + (255 - 144) * p);
          const b = Math.round(205 + (255 - 205) * p);
          Array.from(track.children).forEach((el: any) => {
            el.style.color = `rgb(${r},${g},${b})`;
          });
        },
      },
    });
  }, []);

  return (
    <div ref={wrapperRef} className=" bg-black ">
      <div className="sticky top-0  overflow-hidden">
        <div
          ref={trackRef}
          className="flex flex-nowrap  p-4"
          style={{ width: '200vw' }}
        >
          <div
            className="flex-shrink-0 flex items-center justify-center font-extrabold"
            style={{
              fontSize: '14vw',
              minWidth: '120vw',
              whiteSpace: 'nowrap',
            }}
          >
            Mission&Vision
          </div>
          <div
            className="flex-shrink-0 flex items-center justify-center font-extrabold"
            style={{
              fontSize: '14vw',
              minWidth: '120vw',
              whiteSpace: 'nowrap',
            }}
          >
            Mission&Vision
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionScrollText;
