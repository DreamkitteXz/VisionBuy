import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Store, Eye, ExternalLink, Search, Filter } from 'lucide-react';
import { stores, categories, getProductsByCategory } from '../data/mockData';
import '../App.css';

const PartnerStores = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStores = stores.filter(store => {
    const matchesCategory = selectedCategory === 'all' || store.category === selectedCategory;
    const matchesSearch = store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         store.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStoreProducts = (storeProductIds) => {
    return storeProductIds.slice(0, 3); // Mostrar apenas os primeiros 3 produtos
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Parceiros
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Suas marcas favoritas você encontra aqui
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Buscar lojas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="all">Todas as Categorias</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              selectedCategory === 'all'
                ? 'ar-button text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Todas
          </button>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedCategory === category.id
                  ? 'ar-button text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredStores.length} {filteredStores.length === 1 ? 'loja encontrada' : 'lojas encontradas'}
          </p>
        </div>

        {/* Stores Grid */}
        {filteredStores.length === 0 ? (
          <div className="text-center py-12">
            <Store className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Nenhuma loja encontrada
            </h3>
            <p className="text-gray-600">
              Tente ajustar os filtros ou termo de busca
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredStores.map((store) => {
              const categoryInfo = categories.find(cat => cat.id === store.category);
              const storeProducts = getStoreProducts(store.products);
              
              return (
                <div key={store.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  {/* Store Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                          <img
                            src={store.logo}
                            alt={store.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {store.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-1">
                            {store.description}
                          </p>
                          {categoryInfo && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                              {categoryInfo.icon} {categoryInfo.name}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <a
                        href={store.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-600 transition-colors"
                        title="Visitar site da loja"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Store Products Preview */}
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Produtos em Destaque
                    </h4>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {storeProducts.map((productId) => {
                        // Aqui você buscaria o produto pelo ID nos dados mockados
                        const product = { 
                          id: productId, 
                          name: `Produto ${productId}`, 
                          image: '/api/placeholder/150/150',
                          price: 'R$ 99,00'
                        };
                        
                        return (
                          <div key={product.id} className="text-center">
                            <div className="aspect-square bg-gray-200 rounded-lg mb-2 overflow-hidden">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="text-xs text-gray-600 truncate">
                              {product.name}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex space-x-3">
                      <Link
                        to={`/loja/${store.id}`}
                        className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center"
                      >
                        Ver Vitrine
                      </Link>
                      <Link
                        to={`/loja/${store.id}/ar`}
                        className="flex-1 ar-button text-white py-2 px-4 rounded-lg font-semibold text-center flex items-center justify-center"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        Experimentar
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Quer ser nosso parceiro?
            </h2>
            <p className="text-gray-600 mb-6">
              Junte-se às marcas que já revolucionaram suas vendas com Realidade Aumentada
            </p>
            <Link
              to="/quero-ser-parceiro"
              className="ar-button inline-flex items-center px-6 py-3 text-white rounded-lg font-semibold"
            >
              <Store className="w-5 h-5 mr-2" />
              Quero ser Parceiro
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerStores;

