export type Category = 'Design' | 'Development' | 'Branding' | 'Marketing' | 'Technology';

export type Project = {
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  category: Category;
};

export const projects: Project[] = [
  {
    slug: 'vaturia',
    title: 'Vaturia',
    description: 'Natural beauty and care.',
    content: 'Vaturia full content...',
    image: '/images/imgeblog3.png',
    category: 'Design',
  },
  {
    slug: 'karzone',
    title: 'Karzone',
    description: 'Auto platform landing.',
    content: 'Karzone full content...',
    image: '/images/blogimage2.png',
    category: 'Development',
  },
  {
    slug: 'edoracle',
    title: 'Eoracle',
    description: 'Empowering apps.',
    content: 'Eoracle full content...',
    image: '/images/imgeblog3.png',
    category: 'Technology',
  },
  {
    slug: 'adopet',
    title: 'Adopet App',
    description: 'Pet adoption app design.',
    content: 'Adopet full content...',
    image: '/images/blogimage2.png',
    category: 'Branding',
  },
  {
    slug: 'mario',
    title: 'MARIO',
    description: 'Photography platform.',
    content: 'MARIO full content...',
    image: '/images/blogname.png',
    category: 'Marketing',
  },
  {
    slug: 'mario',
    title: 'MARIO',
    description: 'Photography platform.',
    content: 'MARIO full content...',
    image: '/images/blogname.png',
    category: 'Marketing',
  },
  {
    slug: 'adopet',
    title: 'Adopet App',
    description: 'Pet adoption app design.',
    content: 'TheBookCrafters eBooksTurning Authors into Digital Entrepreneurs',
    image: '/images/blogimage2.png',
    category: 'Branding',
  },
  
  {
    slug: 'adopet',
    title: 'Adopet App',
    description: 'Pet adoption app design.',
    content: 'TheBookCrafters eBooksTurning Authors into Digital Entrepreneurs',
    image: '/images/blogimage2.png',
    category: 'Development',
  }
];
