'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

interface ImageItem {
  src: string;
  alt?: string;
  width: number;
  height: number;
}

interface Props {
  images: ImageItem[];
  title?: string;
}

const CreativePlayground: React.FC<Props> = ({
  images,
  title = '',
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  // Duplicate images for seamless loop
  const allImages = [...images, ...images];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sliderRef.current) {
        tweenRef.current = gsap.to(sliderRef.current, {
          xPercent: -50,
          ease: 'none',
          duration: 30,
          repeat: -1,
        });

        const el = sliderRef.current;
        el.addEventListener('mouseenter', () => tweenRef.current?.pause());
        el.addEventListener('mouseleave', () => tweenRef.current?.resume());
      }
    });

    return () => {
      ctx.revert();
      tweenRef.current?.kill();
    };
  }, []);

  return (
    <section className="py-5  ">
      <h2 className="text-[8vw] md:text-[60px] lg:text-[80px] font-bold text-[#A890CD] mb-12">
        {title}
      </h2>

      <div className="relative w-full">
        <div
          ref={sliderRef}
          className="flex gap-6 w-fit"
          style={{ willChange: 'transform' }}
        >
          {allImages.map((img, index) => (
            <div
              key={index}
              className="relative flex-shrink-0  flex items-end"
            >
              <Image
                src={img.src}
                alt={img.alt || `creative-${index}`}
                width={img.width}
                height={img.height}
                className=" rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativePlayground;
