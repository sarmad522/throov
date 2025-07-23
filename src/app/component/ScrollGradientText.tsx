'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  text?: string;
  fontSizeVw?: number;
  scrollDistance?: number;
  fromColor?: string;
  toColor?: string;
};

const ScrollingHeadline: React.FC<Props> = ({
  text = 'Services',
  fontSizeVw = 15,
  scrollDistance = 7000, // ✅ longer scroll distance = slower effect
  fromColor = '#6C54A0',
  toColor = '#FFFFFF',
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const wrapper = wrapperRef.current;
      const track = trackRef.current;
      if (!wrapper || !track) return;

      Array.from(track.children).forEach((el: any) => (el.style.color = fromColor));

      const trackWidth = track.scrollWidth - window.innerWidth;

      const hex2rgb = (hex: string) => {
        const n = parseInt(hex.replace('#', ''), 16);
        return [(n >> 16) & 255, (n >> 8) & 255, n & 255] as [number, number, number];
      };

      const [r1, g1, b1] = hex2rgb(fromColor);
      const [r2, g2, b2] = hex2rgb(toColor);

      gsap.to(track, {
        x: -trackWidth,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: wrapper,
          start: 'top bottom',
          end: `+=${scrollDistance}`, // ✅ longer scroll
          scrub: true, // adaptive smoothing
          onUpdate: (self) => {
            const p = self.progress;
            const r = Math.round(r1 + (r2 - r1) * p);
            const g = Math.round(g1 + (g2 - g1) * p);
            const b = Math.round(b1 + (b2 - b1) * p);
            Array.from(track.children).forEach((el: any) => {
              el.style.color = `rgb(${r},${g},${b})`;
            });
          },
        },
      });

      ScrollTrigger.refresh();
    }, 50);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [fromColor, toColor, scrollDistance]);

  const blockStyle = {
    fontSize: `${fontSizeVw}vw`,
    minWidth: '120vw',
    whiteSpace: 'nowrap',
  } as const;

  return (
    <div ref={wrapperRef} className="bg-transparent overflow-hidden">
      <div ref={trackRef} className="flex flex-nowrap" style={{ width: '200vw' }}>
        <div className="flex-shrink-0 flex items-center justify-center font-extrabold" style={blockStyle}>
          {text} {text}
        </div>
        <div className="flex-shrink-0 flex items-center justify-center font-extrabold" style={blockStyle}>
          {text} {text}
        </div>
      </div>
    </div>
  );
};

export default ScrollingHeadline;
