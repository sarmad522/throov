'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollSmoother from 'gsap/dist/ScrollSmoother';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { projects } from '../lib/projects';

const categories = ['All', 'Design', 'Development', 'Branding', 'Marketing', 'Technology'] as const;

export default function Blog() {
  const [activeTab, setActiveTab] = useState('All');
  const [isReady, setIsReady] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6); // ⬅️ limit

  const filteredProjects =
    activeTab === 'All'
      ? projects
      : projects.filter((project) => project.category === activeTab);

  const visibleProjects = filteredProjects.slice(0, visibleCount); // ⬅️ slicing

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    if (typeof window !== 'undefined') {
      const timeout = setTimeout(() => {
        ScrollSmoother.create({
          wrapper: '#smooth-wrapper',
          content: '#smooth-content',
          smooth: 1.5,
          normalizeScroll: true,
          ignoreMobileResize: true,
          effects: true,
          speed: 0.8,
        });

        setIsReady(true);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, []);

  const handleTabClick = (category: string) => {
    setActiveTab(category);
    setVisibleCount(6); // ⬅️ Reset on tab change
  };

  return (
    <div id="smooth-wrapper" style={{ position: 'relative', zIndex: 0 }}>
      <div
        id="smooth-content"
        style={{
          pointerEvents: 'auto',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <main className="min-h-screen  px-6 py-12 text-white">
          <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>

          {/* Tabs */}
          <div
            className="flex flex-wrap justify-center gap-3 mb-10"
            style={{ pointerEvents: 'auto', position: 'relative', zIndex: 20 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleTabClick(category)}
                className={`px-4 py-2 rounded  transition duration-300 ${
                  activeTab === category
                    ? 'bg-gradient-to-b from-[#4E3682]   to-[#A890CD]   text-white border-white'
                    : 'border-white text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {visibleProjects.map((project) => (
              <Link href={`/projects/${project.slug}`} key={project.slug}>
                <div className="rounded-lg overflow-hidden hover:scale-105 transition cursor-pointer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover"
                  />
                  <div className="p-4 flex justify-between border-white border-b-1">
                    <div>
                      <h3 className="text-xl font-semibold    text-[38px]">{project.title}</h3>
                      <p className="text-gray-300 text-sm">{project.description}</p>
                    </div>
                    <div>
                      <img src="/images/arrows.png" alt=""  className='w-8   md:w-12'  />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Read More Button */}
          {visibleCount < filteredProjects.length && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="px-6 py-2 bg-gradient-to-b from-[#4E3682]   to-[#A890CD] text-white rounded font-semibold hover:bg-gray-200 transition"
              >
                Learn More
              </button>
            </div>
          )}

          {filteredProjects.length === 0 && (
            <p className="text-center text-gray-400 mt-10">
              No projects found in this category.
            </p>
          )}
        </main>
      </div>
    </div>
  );
}
