'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { projects } from '../lib/projects';
import HeroSection from '../component/HeroSection';
import ScrollSmoother from 'gsap/ScrollSmoother';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollGradientText from '../component/ScrollGradientText';
import ContactSection from '../component/ContactSection';
import PartnersSlider from '../component/PartnersSlider';
import Blog from '../component/Blog'; 
import AnimatedCounter from '../component/AnimatedCounter';
import TestimonialSlider, { Testimonial } from '../component/TestimonialSlider';
import Footer from '../component/Footer';

const categories = ['All', 'Design', 'Development', 'Branding', 'Marketing', 'Technology'] as const;

export default function CasestudiePage() {
   const data: (Testimonial | undefined)[] = [
  {
    name: 'Robert Fox',
    role: 'Customer',
    image: '/images/testimonial.png',
    stars: 5,
    text: 'Pellentesque eu nibh eget mauris congue mattis nec tellus...',
  },
  {
    name: 'Dianne Russell',
    role: 'Customer',
    image: '/images/testimonial.png',
    stars: 5,
    text: 'Pellentesque eu nibh eget mauris congue mattis nec tellus...',
  },
  {
    name: 'Eleanor Pena',
    role: 'Customer',
    image: '/images/testimonial.png',
    stars: 5,
    text: 'Pellentesque eu nibh eget mauris congue mattis nec tellus...',
  },
  ,
  {
    name: 'Eleanor Pena',
    role: 'Customer',
    image: '/images/testimonial.png',
    stars: 5,
    text: 'Pellentesque eu nibh eget mauris congue mattis nec tellus...',
  },
  {
    name: 'Eleanor Pena',
    role: 'Customer',
    image: '/images/testimonial.png',
    stars: 5,
    text: 'Pellentesque eu nibh eget mauris congue mattis nec tellus...',
  },
  {
    name: 'Eleanor Pena',
    role: 'Customer',
    image: '/images/testimonial.png',
    stars: 5,
    text: 'Pellentesque eu nibh eget mauris congue mattis nec tellus...',
  },
  undefined,
  // Add more dynamically from API or CMS here
];

  const [activeTab, setActiveTab] = useState<string>('All');

  const smootherRef = useRef<any>(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Kill previous smoother instance if it exists
    if (smootherRef.current) {
      smootherRef.current.kill();
    }

    smootherRef.current = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.2,
      normalizeScroll: true,
      ignoreMobileResize: true,
      effects: true,
      speed: 0.8,
    });

    return () => {
      smootherRef.current?.kill();
    };
  }, []);

  const filteredProjects =
    activeTab === 'All' ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <HeroSection
          description="We are a passionate team of designers, strategists, and technologists driven to build exceptional digital experiences."
          primaryBtnText="Get in Touch"
          primaryBtnLink="/contact"
          secondaryBtnText="Our Services"
          secondaryBtnLink="/services"
          mainImage="/images/casebanner.png"
          gifImage="/images/videoMain.gif"
          spinningImage="/images/imagebanner.png"
          leftOverlay="/images/heroleftlayer.png"
          rightOverlay="/images/heroright.png"
        />

        <ScrollGradientText
          text="FeaturedCaseStudies"
          fontSizeVw={15}
          scrollDistance={7000}
          fromColor="#6C54A0"
          toColor="#FFFFFF"
        />

        <main className="min-h-screen px-6 py-12 text-white">
<Blog/>
<div className="max-w-7xl w-full mx-auto px-4  py-2 md:py-5">
  <h2
    className="text-4xl md:text-[90px]  md:mb-9 font-bold bg-gradient-to-r from-[#6C54A0] via-[#A890CD] to-[#6C54A0] text-transparent bg-clip-text text-start"
  >
    Proven work. <br />Measurable results.
  </h2>
</div>

<div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3   md:grid-cols-4 gap-y-12 sm:gap-y-0 sm:gap-x-6 text-center">
        <AnimatedCounter value={120} subLabel="Avg. increase in conversions" />
        <AnimatedCounter value={3} subLabel="continents served" />
        <AnimatedCounter value={15} subLabel="digital productslaunched" />
        <AnimatedCounter value={5} subLabel="client feedback across platforms" />
      </div>
         </main>

          <ScrollGradientText
          text="ClientTestimonialsClientTestimonials"
          fontSizeVw={15}
          scrollDistance={7000}
          fromColor="#6C54A0"
          toColor="#FFFFFF"
        />
              <TestimonialSlider testimonials={data.filter((t): t is Testimonial => t !== undefined)} />;




        <ContactSection />
        <PartnersSlider />
        <Footer />
      </div>
    </div>
  );
}
