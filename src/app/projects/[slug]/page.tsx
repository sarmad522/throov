import { notFound } from 'next/navigation';
import { projects } from '../../lib/projects';

type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-[#140f28] text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <img src={project.image} alt={project.title} className="w-full rounded mb-6" />
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="text-gray-100 leading-relaxed">{project.content}</div>
      </div>
    </div>
  );
}
