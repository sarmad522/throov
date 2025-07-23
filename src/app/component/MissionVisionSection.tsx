'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

type Props = {

  paragraph?: string;
};

export default function MissionVisionSection({
  paragraph = ` At throov we turn ideas into visuals that speak. From branding to digital design, we craft creative solutions that are bold, thoughtful, and built to stand out. Whether you are launching something new or leveling up your look, we bring clarity, style and purpose to every pixel.`,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  /* ── ہر بار paragraph بدلے، DOM دوبارہ بنے ───────────────── */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // 1️⃣ نئی HTML inject کر دیں
    el.innerHTML = paragraph
      .split(' ')
      .map(word => `<span class="word inline-block mr-2">${word}</span>`)
      .join(' ');

    // 2️⃣ پرانے triggers kill صرف اسی container کے
    ScrollTrigger.getAll()
      .filter(t => (t.vars as any).trigger && el.contains((t.vars as any).trigger))
      .forEach(t => t.kill());

    // 3️⃣ نئے لفظوں پر animation لگائیں
    el.querySelectorAll<HTMLSpanElement>('.word').forEach(word => {
      gsap.fromTo(
        word,
        { opacity: 0.4, y: 28 },
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: word,
            start: 'top 95%',
            end: 'top 65%',
            scrub: true,
          },
        }
      );
    });
  }, [paragraph]);

  /* ── JSX ─────────────────────────────────────────────────── */
  return (
    <section id="down">
      <div className="py-32 px-6">
        <div
          ref={containerRef}
          className="max-w-5xl mx-auto text-[2.5rem] leading-snug font-bold flex flex-wrap gap-y-4 will-change-transform"
        />
      </div>
    </section>
  );
}
