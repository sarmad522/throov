'use client';

import React, { useState } from 'react';
import { ServiceData } from '../data/services';
import TabPanel from './TabPanel';

type TabsProps = {
  data: ServiceData[];
};

const Tabs: React.FC<TabsProps> = ({ data }) => {
  const [activeId, setActiveId] = useState(data[0].id);

  return (
    <div className="text-white px-4">
      <div className="flex flex-wrap gap-3 justify-center py-6">
        {data.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveId(tab.id)}
            className={`px-4 py-2 rounded-md  transition-all duration-200 ${
              activeId === tab.id ? 'bg-gradient-to-b from-[#4E3682]  to-[#A890CD] ' : 'null'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {data.map((tab) =>
        tab.id === activeId ? <TabPanel key={tab.id} content={tab} /> : null
      )}
    </div>
  );
};

export default Tabs;
