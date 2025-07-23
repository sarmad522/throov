'use client';

import React from 'react';
import { ServiceData } from '../data/services';
import Image from 'next/image';

type TabPanelProps = {
  content: ServiceData;
};

const TabPanel: React.FC<TabPanelProps> = ({ content }) => {
    
  return (
    <div className="max-w-7xl w-7xl   mt-5  bg-[#2D2150]">
      {/* Left Side */}
      <div   className='   bg-[#0A0A28]  p-4  rounded-xl  border-1  border-[#A890CD]'>
        <h2 className="text-3xl font-bold mb-2">{content.heading}</h2>
        <p className="mb-4 text-gray-300">{content.description}</p>
</div>

<div   className="max-w-7xl w-7xl  flex justify-between mt-8 gap-5  px-10  ">
    <div   className='w-[50%] bg-[#231348]  px-5  py-8  rounded-md flex flex-col justify-around items-start  '>
        <h4 className='text-white text-[26px]   mb-3'>What We Deliver:</h4>
        {/* List */}
        <ul className="list-disc list-inside mb-6 text-white ">
          {content.list.map((item, idx) => (
            <li key={idx}   className='mb-2'>{item}</li>
          ))}
        </ul>
        <div   className='flex items-center gap-3'>
        <button    className='bg-gradient-to-b from-[#4E3682]  to-[#A890CD]   px-9 py-2'>Talk Design</button>
        <button    className='bg-[#4E3682]  px-9 py-2'>See Our Work</button>
        </div>
</div  >
 {/* Right Side Image */}
      <div  className='w-[50%]'>
        <Image
          src={content.image}
          alt={content.heading}
          width={500}
          height={400}
          className="rounded-lg w-full h-auto"
        />
      </div>
      </div><div>
        {/* Features */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 px-9  py-8  ">
          {content.features.map((feature, idx) => (
            <div key={idx} className="flex  flex-col  justify-center  gap-3 bg-[#231348]  py-8   rounded-md">
              <Image src={feature.icon} alt={feature.title} width={40} height={40}  className='  w-[25%] mx-auto block'/>
              <div>
                <h4 className="font-semibold text-lg text-center">{feature.title}</h4>
                <p className="text-sm text-gray-400 text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

     
    </div>
  );
};

export default TabPanel;
