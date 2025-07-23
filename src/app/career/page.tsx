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
import JobSection from "../component/JobSection";
import PartnersSlider from "../component/PartnersSlider";
import MissionScrollText from "../component/MissionScrollText";
import HiringProcessSection from "../component/HiringProcessSection";
import Footer from '../component/Footer';

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
     <HeroSection
           description="We are a passionate team of designers, strategists, and technologists driven to build exceptional digital experiences."
           primaryBtnText="Get in Touch"
           primaryBtnLink="/contact"
           secondaryBtnText="Our Services"
           secondaryBtnLink="/services"
           mainImage="/images/career.png"
           gifImage = '/images/videoMain.gif'
       spinningImage = '/images/imagebanner.png'
       leftOverlay = '/images/heroleftlayer.png'
       rightOverlay = '/images/heroright.png'
         
         />


         <section   style={{
        background: `linear-gradient(to bottom, black 12%, #6C54A0 40%, transparent)`,
      }} className=" py-24 px-4">
         <ScrollGradientText
        text="LifeAtThroovLifeAtThroov"
        fontSizeVw={15}
        scrollDistance={7000}
        fromColor="#6C54A0"
        toColor="#FFFFFF"
      />
      <MissionScrollText
  text="At Throov, you’re not just another pixel pusher or code monkey. You’re part of a team that’s redefining how digital ideas are brought to life with bold design, sharp strategy and deep collaboration. We value impact over hours, passion over titles and growth over perfection."
  rightImage="/images/right.png"
  leftImage="/images/left.png"
  fontSize="text-2xl md:text-2xl"
  textColor="text-white"
  fontWeight="font-bold"
/>


      <main className="flex items-center justify-center flex-wrap gap-8  px-2 md:py-10   md:px-5 ">
            <FlipCard
              title="Ideate"
              items={[
                "Creative Direction",
                "Design Sprints",
                "Product Validation Sprint",
                "User Research and Testing",
                "Prototypes",
                "Minimum Viable Products",
              ]}
              frontImage="/images/wprdout.png"
              backImage="/images/blue.png"
            />
            <FlipCard
              title="Develop"
              items={[
                "Frontend Development",
                "Backend Development",
                "CMS Implementation",
                "Accessibility",
                "Interaction and Motion",
                "Lowcode Development",
                
              ]}
              frontImage="/images/work2image.png"
              backImage="/images/blue.png"
            />
            <FlipCard
              title="Develop"
              items={[
                "Frontend Development",
                "Backend Development",
                "CMS Implementation",
                "Accessibility",
                "Interaction and Motion",
                "Lowcode Development",
              ]}
              frontImage="/images/worflikp.png"
              backImage="/images/blue.png"
            />
            <FlipCard
              title="Ideate"
              items={[
                "Creative Direction",
                "Design Sprints",
                "Product Validation Sprint",
                "User Research and Testing",
                "Prototypes",
                "Minimum Viable Products",
              ]}
              frontImage="/images/wprdout.png"
              backImage="/images/blue.png"
            />
            <FlipCard
              title="Develop"
              items={[
                "Frontend Development",
                "Backend Development",
                "CMS Implementation",
                "Accessibility",
                "Interaction and Motion",
                "Lowcode Development",
                
              ]}
              frontImage="/images/work2image.png"
              backImage="/images/blue.png"
            />
            <FlipCard
              title="Develop"
              items={[
                "Frontend Development",
                "Backend Development",
                "CMS Implementation",
                "Accessibility",
                "Interaction and Motion",
                "Lowcode Development",
              ]}
              frontImage="/images/worflikp.png"
              backImage="/images/blue.png"
            />

            <div>
                <h2
  className="text-4xl  md:text-[90px] font-bold bg-gradient-to-r from-[#6C54A0] via-[#A890CD] to-[#6C54A0] text-transparent bg-clip-text text-center"
>
  We don’t just hire talent.<br></br> We build creative allies.
</h2>

            </div>
          </main>
    

       <CreativePlayground images={images} />
       <ScrollGradientText
        text="CurrentOpportunities"
        fontSizeVw={15}
        scrollDistance={7000}
        fromColor="#6C54A0"
        toColor="#FFFFFF"
      />

      
      </section>
      <JobSection/>
          <main className="bg-gradient-to-b from-[#020102]   via-[#4B3B70]  to-[#020102] ">
      <HiringProcessSection
        heading="Our hiring process at throov"
        ctaLabel="Apply Now"
        topCards={[
          {
            step: 1,
            title: 'Apply',
            desc: 'Send us your resume or portfolio through our online form.',
            badge: 'Submit CV / Portfolio',
            image: '/images/imagecard.png',
          },
          {
            step: 2,
            title: 'Screening Call',
            desc: 'We’ll reach out for a quick call to understand you better.',
            badge: 'Culture Fit & First Impression',
            image: '/images/imagecard.png',
          },
          {
            step: 3,
            title: 'Skill Test',
            desc: 'Show us your skills via a short task.',
            image: '/images/imagecard.png',
          },
        ]}
        bottomCards={[
          {
            step: 4,
            title: 'Final Interview',
            desc: 'Meet your future team and ask questions freely.',
            badge: 'Meet & Align',
            image: '/images/imagecard.png',
          },
          {
            step: 5,
            title: 'Offer & Onboarding',
            desc: 'You’re in! We’ll send an offer and begin your onboarding journey.',
            badge: 'Welcome to Throov',
            image: '/images/imagecard.png',
          },
        ]}
      />
       <ContactSection/>
    </main>

        
      <PartnersSlider/>
      <Footer/>
    </div>
    </div>
  );
}
