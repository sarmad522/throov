import CaseStudiesGrid from "./CaseStudiesGrid";

export const metadata = { title: "Case Studies" };

export default function CaseStudiesPage() {
  return (
     <section className="w-full bg-gradient-to-b from-[#2a1a49] to-[#140c26] px-4 py-24">
      {/* Optional: background heading */}
      <h2 className="text-[14vw] text-white/5 font-extrabold text-center absolute inset-x-0 top-16 select-none pointer-events-none">
        CaseStudies
      </h2>

      <div className="relative z-10 mx-w-7xl  w-full mx-auto ">
        <CaseStudiesGrid />
      </div>
    </section>
  );
}
