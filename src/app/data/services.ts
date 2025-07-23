export type Feature = {
  icon: string; // icon path or classname
  title: string;
  description: string;
};

export type ServiceData = {
  id: number;
  title: string;
  heading: string;
  description: string;
  list: string[];
  image: string;
  features: Feature[];
};

export const services: ServiceData[] = [
  {
    id: 1,
    title: 'Design',
    heading: 'Design',
    description: 'Beautiful, functional visuals built for impact.',
    list: ['Interactive prototypes', 'Mobile-first design', 'Scalable systems'],
    image: '/images/tabsimage.png',
    features: [
      {
        icon: '/images/uiux1.png',
        title: 'UI/UX Design ',
        description: 'Design Wireframes, interfaces, user journeys',
      },
      {
        icon: '/images/uiux2.png',
        title: 'Design System',
        description: 'Design Systems Reusable components, tokens, documentation',
      },
      {
        icon: '/images/uiux3.png',
        title: '2D Design ',
        description: 'Flyers, banners, infographics, collateral',
      },
    ],
  },
  {
    id: 2,
    title: 'Development',
    heading: 'Development',
    description: 'We don’t just build, we build what works.',
    list: ['Interactive prototypes', 'Mobile-first design', 'Scalable systems'],
    image: '/images/tabsimage.png',
    features: [
      {
        icon: '/images/uiux1.png',
        title: 'UI/UX Design ',
        description: 'Design Wireframes, interfaces, user journeys',
      },
      {
        icon: '/images/uiux2.png',
        title: 'Design System',
        description: 'Design Systems Reusable components, tokens, documentation',
      },
      {
        icon: '/images/uiux3.png',
        title: '2D Design ',
        description: 'Flyers, banners, infographics, collateral',
      },
    ],
  },
  {
    id: 3,
    title: 'Marketing',
    heading: 'Marketing',
    description: 'We don’t just build, we build what works.',
    list: ['Interactive prototypes', 'Mobile-first design', 'Scalable systems'],
    image: '/images/tabsimage.png',
    features: [
      {
        icon: '/images/uiux1.png',
        title: 'UI/UX Design ',
        description: 'Design Wireframes, interfaces, user journeys',
      },
      {
        icon: '/images/uiux2.png',
        title: 'Design System',
        description: 'Design Systems Reusable components, tokens, documentation',
      },
      {
        icon: '/images/uiux3.png',
        title: '2D Design ',
        description: 'Flyers, banners, infographics, collateral',
      },
    ],
  },
  {
    id: 4,
    title: 'Branding',
    heading: 'Branding',
    description: 'We don’t just build, we build what works.',
    list: ['Interactive prototypes', 'Mobile-first design', 'Scalable systems'],
    image: '/images/tabsimage.png',
    features: [
      {
        icon: '/images/uiux1.png',
        title: 'UI/UX Design ',
        description: 'Design Wireframes, interfaces, user journeys',
      },
      {
        icon: '/images/uiux2.png',
        title: 'Design System',
        description: 'Design Systems Reusable components, tokens, documentation',
      },
      {
        icon: '/images/uiux3.png',
        title: '2D Design ',
        description: 'Flyers, banners, infographics, collateral',
      },
    ],
  },
  {
    id: 5,
    title: 'Motion & Animation',
    heading: 'Motion & Animation',
    description: 'We don’t just build, we build what works.',
    list: ['Interactive prototypes', 'Mobile-first design', 'Scalable systems'],
    image: '/images/tabsimage.png',
    features: [
      {
        icon: '/images/uiux1.png',
        title: 'UI/UX Design ',
        description: 'Design Wireframes, interfaces, user journeys',
      },
      {
        icon: '/images/uiux2.png',
        title: 'Design System',
        description: 'Design Systems Reusable components, tokens, documentation',
      },
      {
        icon: '/images/uiux3.png',
        title: '2D Design ',
        description: 'Flyers, banners, infographics, collateral',
      },
    ],
  },
  {
    id: 6,
    title: 'AI Tools & Integrations',
    heading: 'AI Tools & Integrations',
    description: 'We don’t just build, we build what works.',
    list: ['Interactive prototypes', 'Mobile-first design', 'Scalable systems'],
    image: '/images/tabsimage.png',
    features: [
      {
        icon: '/images/uiux1.png',
        title: 'UI/UX Design ',
        description: 'Design Wireframes, interfaces, user journeys',
      },
      {
        icon: '/images/uiux2.png',
        title: 'Design System',
        description: 'Design Systems Reusable components, tokens, documentation',
      },
      {
        icon: '/images/uiux3.png',
        title: '2D Design ',
        description: 'Flyers, banners, infographics, collateral',
      },
    ],
  },
  {
    id: 7,
    title: 'Game & VFX',
    heading: 'AI Tools & Integrations',
    description: 'We don’t just build, we build what works.',
    list: ['Interactive prototypes', 'Mobile-first design', 'Scalable systems'],
    image: '/images/tabsimage.png',
    features: [
      {
        icon: '/images/uiux1.png',
        title: 'UI/UX Design ',
        description: 'Design Wireframes, interfaces, user journeys',
      },
      {
        icon: '/images/uiux2.png',
        title: 'Design System',
        description: 'Design Systems Reusable components, tokens, documentation',
      },
      {
        icon: '/images/uiux3.png',
        title: '2D Design ',
        description: 'Flyers, banners, infographics, collateral',
      },
    ],
  },
  {
    id: 8,
    title: '2D / 3D & Illustration',
    heading: '2D / 3D & Illustration',
    description: 'We don’t just build, we build what works.',
    list: ['Interactive prototypes', 'Mobile-first design', 'Scalable systems'],
    image: '/images/tabsimage.png',
    features: [
      {
        icon: '/images/uiux1.png',
        title: 'UI/UX Design ',
        description: 'Design Wireframes, interfaces, user journeys',
      },
      {
        icon: '/images/uiux2.png',
        title: 'Design System',
        description: 'Design Systems Reusable components, tokens, documentation',
      },
      {
        icon: '/images/uiux3.png',
        title: '2D Design ',
        description: 'Flyers, banners, infographics, collateral',
      },
    ],
  },
  
];
