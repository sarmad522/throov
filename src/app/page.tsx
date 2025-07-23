'use client';

import Image from "next/image";
import { useEffect } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
// Optional smoother (requires Club GSAP membership)
import ScrollSmoother from 'gsap/dist/ScrollSmoother';

import HeroSection from './component/HeroSection';
import ScrollGradientText from './component/ScrollGradientText';
import RotatingCardSlider from "./component/RotatingCardSlider";
// import CustomSlider from './component/ServicesSlider';
// import AboutUsScroll from './component/AboutUsScroll';
// import ScrollTextFade from './component/ScrollTextFade';
import FlipCard from "./component/FlipCard";
import MissionScrollText from "./component/MissionScrollText";
// import MissionVisionSection from "./component/MissionVisionSection";
import CreativeSection from "./component/CreativeSection";
import  MissionVisionScrollText from "./component/MissionVisionScrollText";
// import RotatingCardSlider from "./component/RotatingCardSlider";
import WhereWeWork from "./component/WhereWeWork";
import PartnersSlider from "./component/PartnersSlider";
import Footer from './component/Footer';
import Link from 'next/link';

// import CaseStudiesSection from "./component/CaseStudiesSection";
import CaseStudiesGrid from "./case-studies/CaseStudiesGrid";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 3.5,
      effects: true,
          
     speed: 0.8,    
    });
  }, []);
const locations = [
  {
    title: 'Houston, United States',
    image: '/images/wherrewework.png',
    alt: 'Houston Skyline',
  },
  {
    title: 'London, United Kingdom',
    image: '/images/locationwork.png',
    alt: 'London Tower Bridge',
  },
  {
    title: 'Karachi, Pakistan',
    image: '/images/wherework.png',
    alt: 'Karachi Night View',
  },
];

const paragraph =
  'Based in Karachi, our core team brings a global perspective to every project. We proudly collaborate with clients around the world, combining creative insight with streamlined remote processes to ensure smooth communication and seamless delivery, no matter where you are.';

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="">
          
          {/* <HeroSection /> */}
      <HeroSection
      description="We build bold brands, seamless experiences and digital strategies that drive results."
      primaryBtnText="Let’s Talk"
      primaryBtnLink="/contact"
      secondaryBtnText="Our Work"
      secondaryBtnLink="/work"
    />
          <ScrollGradientText text="Services"
        fontSizeVw={15}
        scrollDistance={2500}
        fromColor="#6C54A0"
        toColor="#FFFFFF"
      />
      <RotatingCardSlider   />
          {/* <ScrollGradientText
        text="Services"
        fontSizeVw={15}
        scrollDistance={2500}
        fromColor="#6C54A0"
        toColor="#FFFFFF"
      /> */}
          {/* <CustomSlider /> */}
          {/* <RotatingCardSlider/> */}
          <div
            style={{
              backgroundImage: "url('/images/textbag.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* <AboutUsScroll />
            <ScrollTextFade /> */}
          </div>
          <main className="flex items-center justify-center flex-wrap gap-8  px-2 md:py-10   md:px-5 bg-black">
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
          </main>
          <div
            style={{
              backgroundImage: "url('/images/textbag.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
             <MissionVisionScrollText/>
            {/* <MissionVisionSection /> */}
            <MissionScrollText
  text="Our mission is to transform bold ideas into purposeful digital experiences by empowering brands through design, innovation, and technology to create real world impact."
  rightImage="/images/missingimageright.png"
  leftImage="/images/rightimagemssion.png"
/>

           
          </div>
          <div>
            <CreativeSection />
           
             <WhereWeWork
  title="Where We Work"
  titleSize="text-[36px] md:text-[72px] lg:text-[100px]"
  paragraph={paragraph}
  locations={locations}
  showCaseStudies
  showContactSection
/>

             {/* <CaseStudiesGrid/> */}
            {/* <CaseStudiesSection/> */}

            {/* <ContactSection/> */}
            <PartnersSlider/>
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
}
