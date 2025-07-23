'use client';

import { motion } from 'framer-motion';

interface JobCardProps {
  tags: string[];
  title: string;
  location: string;
  description: string;
}

export default function JobCard({ tags, title, location, description }: JobCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="border border-white/20 rounded-md p-6 bg-gradient-to-b from-[#190D3C] via-[#301F5F] to-[#190D3C] text-white shadow-md hover:shadow-lg transition"
    >
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-white/10 text-sm rounded-full text-white"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">{title} – {location}</h2>
          <p className="text-sm mt-2 text-white/80">{description}</p>
        </div>
        <div className="text-3xl">
          <span>
            <img src="/cardarrows.svg" className="w-10 h-10 transition-transform duration-300 group-hover:translate-x-1" alt="arrow" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
