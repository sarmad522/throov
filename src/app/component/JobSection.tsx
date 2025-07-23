'use client';

import JobCard from './JobCard';

const jobs = [
  {
    tags: ['Sales', 'LeadGeneration', 'Onsite'],
    title: 'Sales Executive (Fronter)',
    location: 'Onsite',
    description: 'Identify and engage potential clients to fuel the sales pipeline.'
  },
  {
    tags: ['Sales', 'Client Acquisition', 'Onsite'],
    title: 'Senior Sales Executive (Closer)',
    location: 'Onsite',
    description: 'Lead client meetings and close deals with confidence and strategy.'
  },
  {
    tags: ['Web Development', 'WordPress', 'Remote'],
    title: 'WordPress Developer',
    location: 'Remote',
    description: 'Build and maintain fast, responsive, and customized WordPress sites.'
  },
  {
    tags: ['Marketing', 'Social Media', 'Remote'],
    title: 'Social Media Marketer',
    location: 'Remote',
    description: 'Plan and execute social strategies that grow and engage our audience.'
  }
];

export default function JobSection() {
  return (
    <section className="min-h-screen py-16 px-4 md:px-16">
      <div className="max-w-4xl mx-auto space-y-8">
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
        <div className="text-center pt-6">
          <button className="bg-gradient-to-b from-[#4E3682]  to-[#A890CD]  hover:bg-[#7a5edc] transition px-6 py-2 text-white rounded-md shadow-lg">
            View All Roles
          </button>
        </div>
      </div>
    </section>
  );
}
