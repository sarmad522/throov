import React from 'react';

const DesignSection = () => {
  return (
    <div className="  max-w-7xl bg-[#1A1A2E] text-white p-6 rounded-xl space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Design</h2>
        <p className="text-sm text-gray-300 mt-1">
          Beautiful, functional visuals built for impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#2A2A4A] p-4 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">What We Deliver:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Interactive prototypes</li>
            <li>Mobile-first design</li>
            <li>Scalable systems</li>
          </ul>
          <div className="mt-4 flex gap-4">
            <button className="bg-purple-600 px-4 py-2 rounded">Talk Design</button>
            <button className="border border-gray-300 px-4 py-2 rounded">See Our Work</button>
          </div>
        </div>

        <div>
          <img
            src="/images/tabsimage.png"
            alt="Team Discussion"
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#2A2A4A] p-4 rounded-xl text-center">
          <p className="text-xl font-bold mb-1">UI/UX Design</p>
          <p className="text-sm text-gray-400">Wireframes, interfaces, user journeys</p>
        </div>
        <div className="bg-[#2A2A4A] p-4 rounded-xl text-center">
          <p className="text-xl font-bold mb-1">Design Systems</p>
          <p className="text-sm text-gray-400">Reusable components, tokens, documentation</p>
        </div>
        <div className="bg-[#2A2A4A] p-4 rounded-xl text-center">
          <p className="text-xl font-bold mb-1">2D Design</p>
          <p className="text-sm text-gray-400">Flyers, banners, infographics, collateral</p>
        </div>
      </div>
    </div>
  );
};

export default DesignSection;
