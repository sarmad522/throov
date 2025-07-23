import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TabItem {
  image1: string;
  title1: string;
  subtitle1: string;
  image2: string;
  title2: string;
  subtitle2: string;
}

interface Props {
  items: TabItem[];
}

const FancyTabs: React.FC<Props> = ({ items }) => {
  const [active, setActive] = useState(0);
  const item = items[active];

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tabListRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);

  // Animate section in on scroll
  useEffect(() => {
    if (containerRef.current) {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  // Animate content + vertical bar movement
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }

    const activeTab = document.querySelector(`#tab-${active}`);
    const parentRect = tabListRef.current?.getBoundingClientRect();
    const tabRect = activeTab?.getBoundingClientRect();

    if (highlightRef.current && tabRect && parentRect) {
      const top = tabRect.top - parentRect.top;
      gsap.to(highlightRef.current, {
        y: top,
        height: tabRect.height,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [active]);

  return (
    <section
      ref={containerRef}
      className="bg-black px-4 py-20 text-white "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {/* Left Vertical Tabs with Full Highlight */}
        <div className="relative h-full">
          {/* Full height purple bar */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-200 rounded-full" />

          <div
            ref={tabListRef}
            className="relative space-y-11  overflow-y-auto pl-5 no-scrollbar"
          >
            {/* Moving highlight inside full bar */}
            <div
              ref={highlightRef}
              className="absolute left-0 top-0 w-[2px] bg-[#4E3682] rounded-full transition-all duration-300"
              style={{ height: 0 }}
            />

            {items.map((tab, i) => (
              <div
                id={`tab-${i}`}
                key={i}
                onClick={() => setActive(i)}
                className={`relative cursor-pointer group p-4 rounded-md transition-all duration-300 ${
                  active === i
                    ? "bg-[#4E3682] text-white"
                    : "hover:bg-white/10 text-gray-300"
                }`}
              >
                <h3 className="xl:text-[26px] lg:text-[26px]  md:text-[22px] sm:text-[20px]  text-[18px] font-semibold">{tab.title1}</h3>
                <p className="text-sm mt-1">{tab.subtitle1}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content Cards */}
        <div
          ref={contentRef}
          className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* Card 1 – image with overlay text */}
          {/* Card 1 – image with overlay text */}
{/* Card 1 – text first, image below */}
<div className="rounded overflow-hidden  flex flex-col">
  {/* Top text block */}
  <div className="p-2 ">
    <h4 className="text-lg font-semibold text-white">{item.title1}</h4>
    {/* <p className="text-sm text-gray-300">{item.subtitle1}</p> */}
  </div>

  {/* Image below */}
  <div className=" rounded relative h-120 w-full">
    <Image
      src={item.image1}
      alt={item.title1}
      fill
      className="object-cover rounded"
    />
  </div>
</div>



          {/* Card 2 – image with text below */}
          <div className="rounded overflow-hidden  flex flex-col">
            <div className="relative h-120 w-full">
              <Image
                src={item.image2}
                alt={item.title2}
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="p-2 ">
              <h4 className="text-lg font-semibold">{item.title2}</h4>
              {/* <p className="text-sm text-gray-300">{item.subtitle2}</p> */}
            </div>
          </div>
        </div>
      </div>
      <img src="/images/footerright.png" className="  absolute top-[-25%] right-0 w-full mb-4 block mx-auto z-0 max-w-[25%] " alt="Throoy Logo"></img>
    <img src="/images/footerrleft.png" className="  absolute bottom-0 left-0 w-full mb-4 block mx-auto z-0 max-w-[50%] " alt="Throoy Logo"></img>
    </section>
  );
};

export default FancyTabs;
