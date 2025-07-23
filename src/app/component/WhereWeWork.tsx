'use client';

import { useEffect, useRef } from 'react';
import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import ContactSection from './ContactSection';
import CaseStudiesGrid from '../case-studies/CaseStudiesGrid';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Location = {
  title: string;
  image: string;
  alt: string;
};

interface WhereWeWorkProps {
  title?: string;
  titleSize?: string; // ⬅️ add this
  paragraph: string;
  locations: Location[];
  showCaseStudies?: boolean;
  showContactSection?: boolean;
}

const WhereWeWork: React.FC<WhereWeWorkProps> = ({
  title = 'Where we work',
  paragraph,
  locations,
  showCaseStudies = true,
  showContactSection = true,
}) => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  // ✅ Fancybox binding
  useEffect(() => {
    (NativeFancybox as any).bind('[data-fancybox="gallery"]', {
      Thumbs: {
        autoStart: true,
      },
      Toolbar: {
        display: ['zoom', 'close', 'fullscreen', 'thumbs'],
      },
    });

    return () => {
      NativeFancybox.unbind('[data-fancybox="gallery"]');
    };
  }, []);

  // ✅ GSAP scroll-triggered word color animation
  useEffect(() => {
    const paragraph = paragraphRef.current;
    if (!paragraph) return;

    const words = paragraph.querySelectorAll('.word');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: paragraph,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    tl.to(words, {
      color: '#FFFFFF',
      stagger: 0.05,
      ease: 'none',
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const renderWords = paragraph.split(' ').map((word, index) => (
    <span
      key={index}
      className="word inline-block mr-1 will-change-[color]"
      style={{ color: '#4B4B4B' }}
    >
      {word}
    </span>
  ));

  return (
    <section className="bg-gradient-to-b from-black via-[#4E3682] to-[#000] text-white px-2 py-[75px] md:py-5 md:px-4 text-center">
<h2 className="text-[40px] md:text-[72px] lg:text-[96px] font-bold bg-gradient-to-r from-[#6C54A0] to-[#A890CD] bg-clip-text text-transparent">
  {title}
</h2>



      <div className="flex flex-wrap justify-center gap-8 sm:mt-[0px] md:mt-[-52] mb-20">
        {locations.map((loc, index) => (
          <a
            key={index}
            data-fancybox="gallery"
            href={loc.image}
            data-caption={loc.title}
            className="w-full sm:w-[40%] md:w-[30%] lg:w-[25%] rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-[#6C54A0]"
          >
            <img
              src={loc.image}
              alt={loc.alt}
              className="w-full h-48 object-cover transition duration-300"
            />
            <div className="py-4 font-semibold text-lg">{loc.title}</div>
          </a>
        ))}
      </div>

      <div className="max-w-7xl w-full px-2 md:px-5 mx-auto">
        <p
          ref={paragraphRef}
          className="max-w-2xl ml-auto sm:text-[22px] mb-[60px] md:mb-[0px] md:text-[28px] font-bold text-start sm:leading-[25px] md:leading-[40px] flex flex-wrap gap-y-2"
        >
          {renderWords}
        </p>

        {showCaseStudies && <CaseStudiesGrid />}
      </div>

      {showContactSection && (
        <div className="mt-20">
          <ContactSection />
        </div>
      )}
    </section>
  );
};

export default WhereWeWork;
