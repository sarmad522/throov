import { notFound } from "next/navigation";
import Image from "next/image";
import { caseStudies } from "../../data/caseStudies";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return caseStudies.map(cs => ({ slug: cs.slug }));
}

export default function CaseStudyDetail({ params }: Props) {
  const study = caseStudies.find(c => c.slug === params.slug);
  if (!study) return notFound();

  return (
    <article className="min-h-screen bg-[#140c26] text-violet-100 px-6 py-24 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <Image
          src={study.cover}
          alt={study.title}
          width={800}
          height={450}
          className="rounded-2xl mb-8 object-cover w-full"
        />

        <span className="uppercase text-xs tracking-widest text-violet-400">
          {study.category}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">
          {study.title}
        </h1>

        {/* eslint-disable-next-line react/no-danger */}
        <div
          className="prose prose-invert mt-6"
          dangerouslySetInnerHTML={{ __html: study.content }}
        />
      </div>
    </article>
  );
}
