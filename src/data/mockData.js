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
    id: 'plantas',
    name: 'Plantas e Jardinagem',
    icon: '🪴',
    description: 'Plantas, flores e acessórios para jardinagem'
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
    products: [1]
  },
  {
    id: 2,
    name: 'Avon',
    logo: '/avon.jpg',
    category: 'moda',
    description: 'Produtos de beleza e cuidados pessoais',
    website: 'https://www.avon.com.br/?utm_campaign=avn_bra_mp_media-monks_na_na_always-on_conversao_search-termos-institucionais&utm_source=googleads&utm_medium=cpc&utm_placement=googleads&utm_content=conversao_na_amplo_amplo_amplo_a_nac_institucional-exato&utm_term=institucional_institucional_dinamico_na_na_na_na_na_na_na_rti_efemrd-institucional-exata_comprar-agora_cpa_na&utm_term=institucional_institucional_dinamico_na_na_na_na_na_na_na_rti_efemrd-institucional-exata_comprar-agora_cpa_na&gad_source=1&gad_campaignid=22593873116&gclid=CjwKCAjw2brFBhBOEiwAVJX5GEne2ZnscwSIYtFVsqDebgIKMMeKGJ1g39QQsiQog-NpZRZZC_LQzxoCde4QAvD_BwE',
    products: [2]
  },
  {
    id: 3,
    name: 'NordicGreen',
    logo: '/plantas_loja.jpg',
    category: 'plantas',
    description: 'Plantas e acessórios para jardinagem',
    website: 'https://nordicgreen.com.br/?srsltid=AfmBOoofHeAT9k8sH2nEdOTVp6bZ3igSB1xDLgvm0KK_mKMcP7kr1rYc',
    products: [3]
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

