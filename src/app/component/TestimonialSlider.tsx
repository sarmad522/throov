'use client';

import { useEffect, useRef } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import gsap from 'gsap';

export type Testimonial = {
  name: string;
  role: string;
  image: string;
  stars: number;
  text: string;
};

type Props = {
  testimonials: Testimonial[];
};

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i}>⭐</span>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-[#1e0e4b] text-white rounded-xl p-6 w-80 shadow-lg flex-shrink-0 mx-3">
    <FaQuoteRight className="text-2xl mb-4 text-white" />
    <p className="text-sm mb-6">{testimonial.text}</p>
    <div className="flex items-center gap-4">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <span className="font-semibold text-sm">{testimonial.name}</span>
        <span className="text-xs text-gray-300">{testimonial.role}</span>
      </div>
      <div className="ml-auto">
        <StarRating count={testimonial.stars} />
      </div>
    </div>
  </div>
);

const ScrollRow = ({
  testimonials,
  direction = 'left',
  duration = 60,
}: {
  testimonials: Testimonial[];
  direction?: 'left' | 'right';
  duration?: number;
}) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rowRef.current;
    const container = containerRef.current;
    if (!el || !container) return;

    const totalWidth = el.scrollWidth / 2;

    const tween = gsap.to(el, {
      x: direction === 'left' ? `-${totalWidth}px` : `0px`,
      ease: 'none',
      duration,
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          const wrapped = parseFloat(x) % totalWidth;
          return direction === 'left'
            ? `-${Math.abs(wrapped)}`
            : `${Math.abs(wrapped)}`;
        }),
      },
    });

    const pause = () => tween.pause();
    const resume = () => tween.resume();

    container.addEventListener('mouseenter', pause);
    container.addEventListener('mouseleave', resume);

    return () => {
      tween.kill();
      container.removeEventListener('mouseenter', pause);
      container.removeEventListener('mouseleave', resume);
    };
  }, [direction, duration]);

  return (
    <div ref={containerRef} className="overflow-hidden w-full">
      <div ref={rowRef} className="flex w-fit">
        <div className="flex">
          {testimonials.map((t, i) => (
            <TestimonialCard testimonial={t} key={`${direction}-a-${i}`} />
          ))}
        </div>
        <div className="flex">
          {testimonials.map((t, i) => (
            <TestimonialCard testimonial={t} key={`${direction}-b-${i}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialSlider = ({ testimonials }: Props) => {
  const cleaned = testimonials.filter((t): t is Testimonial => !!t);

  return (
    <section className="py-20  space-y-8">
      <ScrollRow testimonials={cleaned} direction="right" duration={60} />
      <ScrollRow testimonials={cleaned} direction="left" duration={60} />
    </section>
  );
};

export default TestimonialSlider;
