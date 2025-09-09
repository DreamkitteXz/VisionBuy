// Mock data for VisionBuy products
export const categories = [
  {
    id: 'moveis',
    name: 'Móveis e Decoração',
    icon: '🛋️',
    description: 'Móveis, decoração e objetos para casa'
  },
  {
    id: 'eletro',
    name: 'Eletrodomésticos',
    icon: '🔌',
    description: 'Eletrodomésticos para sua casa'
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
    store: 'Madeira Madeira',
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
    store: 'Madeira Madeira',
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
    store: 'Madeira Madeira',
    featured: true,
    arEnabled: true
  },
  {
    id: 4,
    name: 'Geladeira Frost Free',
    category: 'eletro',
    price: 'R$ 2.499,00',
    image: 'geladeira.png',
    model3d: '/models/geladeira_eletrolux/scene.gltf',
    description: 'Geladeira moderna com tecnologia Frost Free.',
    store: 'Electrolux', // <- agora é da Electrolux
    featured: true,
    arEnabled: true      // <- continua com AR
  }
];

export const stores = [
  {
    id: 1,
    name: 'Madeira Madeira',
    logo: 'madeira_madeira.png',
    category: 'moveis',
    description: 'Especializada em móveis modernos e funcionais',
    website: 'https://www.madeiramadeira.com.br',
    products: products.filter(p => p.store === 'Madeira Madeira').map(p => p.id)
  },
  {
    id: 2,
    name: 'Electrolux',
    logo: 'eletrolux.png',
    category: 'eletro',
    description: 'Eletrodomésticos inovadores para sua casa',
    website: 'https://www.electrolux.com.br',
    products: products.filter(p => p.store === 'Electrolux').map(p => p.id) // inclui a geladeira
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

