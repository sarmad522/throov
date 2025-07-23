export interface CaseStudy {
  slug: string;            // used in the URL
  category: string;
  title: string;
  description: string;
  cover: string;           // public/ path to image
  content: string;         // long html/markdown for detail
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "lumiere-skincare",
    category: "Branding",
    title: "Lumière Skincare",
    description: "A skincare rebrand rooted in nature and elegance.",
    cover: "/images/blog1.png",
    content: `<p><strong>Lumière Skincare</strong> completely refreshed its identity…
             (put any rich HTML or MD here).</p>`
  },
  {
    slug: "swifttech-solutions",
    category: "Web Development",
    title: "SwiftTech Solutions",
    description: "A sleek, conversion‑driven website for a growing tech brand.",
    cover: "/images/blog2.png",
    content: `<p>SwiftTech Solutions needed a fast website…</p>`
  },
  {
    slug: "tiffinly-app",
    category: "UI/UX",
    title: "Tiffinly App",
    description: "A vibrant mobile app that turned home‑cooked meals into a movement.",
    cover: "/images/blog3.png",
    content: `<p>Tiffinly connects food lovers with home chefs…</p>`
  }
];
