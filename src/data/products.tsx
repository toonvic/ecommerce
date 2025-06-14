export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  images: string[];
  category: string;
  description: string;
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Queen Rosa Premium',
    slug: 'queen-rosa',
    price: 130,
    image: '/stitch.webp',
    images: ['/stitch.webp', '/banner.webp'],
    category: 'lencois',
    description:
      'Kit 04 Peças composto por 1 lençol de elástico, 2 fronhas (50x70) e 1 sobre lençol. Malha 100% algodão.',
  },
  {
    id: '2',
    name: 'Solteiro Azul Premium',
    slug: 'solteiro-azul',
    price: 100,
    image: '/stitch.webp',
    images: ['/stitch.webp', '/banner.webp'],
    category: 'lencois',
    description:
      'Lençol solteiro premium em malha 100% algodão fio penteado.',
  },
  {
    id: '3',
    name: 'Fronha Bege Premium',
    slug: 'fronha-bege',
    price: 30,
    image: '/stitch.webp',
    images: ['/stitch.webp', '/banner.webp'],
    category: 'fronhas',
    description: 'Par de fronhas premium em malha 100% algodão.',
  },
  {
    id: '4',
    name: 'Conjunto Branco Premium',
    slug: 'conjunto-branco',
    price: 160,
    image: '/stitch.webp',
    images: ['/stitch.webp', '/banner.webp'],
    category: 'conjuntos',
    description:
      'Conjunto de cama premium em malha 100% algodão fio penteado.',
  },
];
