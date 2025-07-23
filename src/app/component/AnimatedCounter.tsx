'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  value: number;
  subLabel: string;
  suffix?: string;
  duration?: number;
};

const AnimatedCounter: React.FC<Props> = ({
  value,
  subLabel,
  suffix = '+',
  duration = 2,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const counterObj = { val: 0 };

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        once: true,
      },
    });

    timeline.fromTo(
      el,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    );

    timeline.to(counterObj, {
      val: value,
      duration,
      ease: 'power1.out',
      onUpdate: () => {
        setCount(Math.floor(counterObj.val));
      },
    }, '<'); // run at same time as fade-in

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [value, duration]);

  return (
    <div ref={ref} className="text-center px-4">
      <div className="text-white text-5xl font-bold tracking-wide drop-shadow">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-white text-sm mt-2 uppercase tracking-wider font-semibold opacity-80">
        {subLabel}
      </div>
    </div>
  );
};

export default AnimatedCounter;
