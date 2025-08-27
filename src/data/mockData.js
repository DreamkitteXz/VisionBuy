// Mock data for VisionBuy products
export const categories = [
  {
    id: 'moda',
    name: 'Moda e Acessórios',
    icon: '👗',
    description: 'Roupas, calçados, bolsas e acessórios'
  },
  {
    id: 'moveis',
    name: 'Móveis e Decoração',
    icon: '🛋️',
    description: 'Móveis, decoração e objetos para casa'
  },
  {
    id: 'beleza',
    name: 'Beleza e Cosméticos',
    icon: '💄',
    description: 'Maquiagem, skincare e produtos de beleza'
  }
];

export const products = [
  {
    id: 1,
    name: 'Poltrona Cinza',
    category: 'moveis',
    price: 'R$ 899,00',
    image: 'poltrona.png',
    model3d: '/models/poltrona.glb',
    description: 'Poltrona confortável em tecido cinza, perfeita para sala de estar.',
    store: 'Móveis & Cia',
    featured: true,
    arEnabled: true
  },
  {
    id: 2,
    name: 'Abajur Vintage',
    category: 'moveis',
    price: 'R$ 159,00',
    image: 'abajur.png',
    model3d: '/models/abajur.glb',
    description: 'Abajur vintage com design clássico e iluminação aconchegante.',
    store: 'Luminárias Express',
    featured: true,
    arEnabled: true
  },
  {
    id: 3,
    name: 'Planta Maranta',
    category: 'moveis',
    price: 'R$ 45,00',
    image: 'planta.png',
    model3d: '/models/planta.glb',
    description: 'Planta Maranta, ideal para decoração de ambientes internos.',
    store: 'Verde Vida',
    featured: true,
    arEnabled: true
  },
  {
    id: 4,
    name: 'Vestido Azul',
    category: 'moda',
    price: 'R$ 129,00',
    image: '/api/placeholder/400/400',
    model3d: '/models/vestido.glb',
    description: 'Vestido azul elegante, perfeito para ocasiões especiais.',
    store: 'Fashion Store',
    featured: true,
    arEnabled: true
  },
  {
    id: 5,
    name: 'Batom Basic',
    category: 'beleza',
    price: 'R$ 29,00',
    image: '/api/placeholder/400/400',
    model3d: '/models/batom.glb',
    description: 'Batom cremoso com cor vibrante e longa duração.',
    store: 'Beauty Plus',
    featured: true,
    arEnabled: true
  },
  {
    id: 6,
    name: 'Relógio Casio',
    category: 'moda',
    price: 'R$ 299,00',
    image: '/api/placeholder/400/400',
    model3d: '/models/relogio.glb',
    description: 'Relógio Casio digital com múltiplas funcionalidades.',
    store: 'Time Store',
    featured: true,
    arEnabled: true
  }
];

export const stores = [
  {
    id: 1,
    name: 'Móveis & Cia',
    logo: '/api/placeholder/100/100',
    category: 'moveis',
    description: 'Especializada em móveis modernos e funcionais',
    website: 'https://moveisecia.com.br',
    products: [1, 2, 3]
  },
  {
    id: 2,
    name: 'Fashion Store',
    logo: '/api/placeholder/100/100',
    category: 'moda',
    description: 'Moda feminina e masculina com as últimas tendências',
    website: 'https://fashionstore.com.br',
    products: [4, 6]
  },
  {
    id: 3,
    name: 'Beauty Plus',
    logo: '/api/placeholder/100/100',
    category: 'beleza',
    description: 'Cosméticos e produtos de beleza de alta qualidade',
    website: 'https://beautyplus.com.br',
    products: [5]
  },
  {
    id: 4,
    name: 'Luminárias Express',
    logo: '/api/placeholder/100/100',
    category: 'moveis',
    description: 'Iluminação moderna e decorativa para todos os ambientes',
    website: 'https://luminariasexpress.com.br',
    products: [2]
  },
  {
    id: 5,
    name: 'Verde Vida',
    logo: '/api/placeholder/100/100',
    category: 'moveis',
    description: 'Plantas e acessórios para jardinagem',
    website: 'https://verdevida.com.br',
    products: [3]
  },
  {
    id: 6,
    name: 'Time Store',
    logo: '/api/placeholder/100/100',
    category: 'moda',
    description: 'Relógios e acessórios de tempo',
    website: 'https://timestore.com.br',
    products: [6]
  }
];

export const featuredProducts = products.filter(product => product.featured);

export const getProductsByCategory = (categoryId) => {
  return products.filter(product => product.category === categoryId);
};

export const getStoresByCategory = (categoryId) => {
  return stores.filter(store => store.category === categoryId);
};

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getStoreById = (id) => {
  return stores.find(store => store.id === parseInt(id));
};

