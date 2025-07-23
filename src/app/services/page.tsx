// app/contact/page.tsx
'use client'

import { useEffect } from "react";

import HeroSection from '../component/HeroSection';
import ScrollSmoother from 'gsap/dist/ScrollSmoother';
import gsap from 'gsap';
import FlipCard from "../component/FlipCard";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollGradientText from '../component/ScrollGradientText';
import ContactSection from "../component/ContactSection";
import CreativePlayground from "../component/CreativePlayground";
import Tabs from '../component/Tabs';
import { services } from '../data/services';
import PartnersSlider from "../component/PartnersSlider";
import Footer from '../component/Footer';
import Tabsection from '../component/Tabsection';
import ServiceSection from '../component/ServiceSection'

export default function ContactPage() {

 const images = [
  {
    src: "/images/slider1.png",
    alt: "Team brainstorming",
    width: 300,
    height: 400,
  },
  {
    src: "/images/slide2.png",
    alt: "Design discussion",
    width: 320,
    height: 360,
  },
  {
    src: "/images/slider3.png",
    alt: "Late night coding",
    width: 290,
    height: 420,
  },
  {
    src: "/images/slider4.png",
    alt: "Late night coding",
    width: 290,
    height: 420,
  },
  {
    src: "/images/slider5.png",
    alt: "Late night coding",
    width: 290,
    height: 420,
  },
  // Add more as needed...
];
;
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
      useEffect(() => {
        ScrollSmoother.create({
          wrapper: '#smooth-wrapper',
          content: '#smooth-content',
          smooth: 3.5,
          effects: true,
              
         speed: 0.8,    
        });
      }, []);
  return (

     <div id="smooth-wrapper">
      <div id="smooth-content">
        <ServiceSection/>
     {/* <HeroSection
           description="We are a passionate team of designers, strategists, and technologists driven to build exceptional digital experiences."
           primaryBtnText="Get in Touch"
           primaryBtnLink="/contact"
           secondaryBtnText="Our Services"
           secondaryBtnLink="/services"
           mainImage="/images/services.png"
           gifImage = '/images/videoMain.gif'
       spinningImage = '/images/imagebanner.png'
       leftOverlay = '/images/heroleftlayer.png'
       rightOverlay = '/images/heroright.png'
         
         /> */}


         <section   style={{
        background: `linear-gradient(to bottom, black 12%, #6C54A0 40%, black 90%)`,
      }} className=" py-24 px-4">
         <ScrollGradientText
        text="ServicesServices"
        fontSizeVw={15}
        scrollDistance={7000}
        fromColor="#6C54A0"
        toColor="#FFFFFF"
      />
        {/* <Tabs data={services} /> */}
        <Tabsection/>
      <ContactSection/>

       <CreativePlayground images={images} />
      </section>
      <PartnersSlider/>
      <Footer/>
    </div>
    </div>
  );
}
