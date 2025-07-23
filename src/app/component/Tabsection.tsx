'use client';

import React, { useState } from 'react';
import Tabs from './Tabs';
import DesignSection from  './DesignSection';
import HeroSection from '../component/HeroSection';
import { services } from '../data/services';

const Page = () => {
  

  return (
    <>
    
    <main className="min-h-screen  flex justify-center items-center flex-col   ">
       <Tabs data={services} />
      {/* <div className="mt-6">{renderContent()}</div> */}
    </main>
    </>
  );
};

export default Page;
