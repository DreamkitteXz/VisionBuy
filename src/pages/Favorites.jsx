import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, Trash2, ShoppingBag } from 'lucide-react';
import { featuredProducts } from '../data/mockData';
import '../App.css';

const Favorites = () => {
  // Simulando produtos favoritos (normalmente viria de um estado global ou API)
  const [favorites, setFavorites] = useState(featuredProducts.slice(0, 3));

  const removeFavorite = (productId) => {
    setFavorites(favorites.filter(product => product.id !== productId));
  };

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-12 h-12 text-gray-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Nenhum favorito ainda
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              Explore nossos produtos e adicione seus favoritos para encontrá-los facilmente depois.
            </p>
            <Link
              to="/"
              className="ar-button inline-flex items-center px-6 py-3 text-white rounded-lg font-semibold"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Explorar Produtos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Favoritos
          </h1>
          <p className="text-lg text-gray-600">
            {favorites.length} {favorites.length === 1 ? 'produto favoritado' : 'produtos favoritados'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map((product) => (
            <div key={product.id} className="product-card bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="aspect-square bg-gray-200 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.arEnabled && (
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    AR
                  </div>
                )}
                <button
                  onClick={() => removeFavorite(product.id)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-colors"
                  title="Remover dos favoritos"
                >
                  <Trash2 className="w-4 h-4 text-red-500" />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-purple-600">
                    {product.price}
                  </span>
                  <span className="text-sm text-gray-500">
                    {product.store}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <Link
                    to={`/produto/${product.id}/ar`}
                    className="ar-button w-full text-white py-2 rounded-lg font-semibold flex items-center justify-center"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    VISUALIZE EM RA
                  </Link>
                  
                  <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Ir para Loja
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Shopping Section */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Continue Explorando
            </h2>
            <p className="text-gray-600 mb-6">
              Descubra mais produtos incríveis com tecnologia de Realidade Aumentada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/?category=moda"
                className="px-6 py-3 bg-purple-100 text-purple-700 rounded-lg font-semibold hover:bg-purple-200 transition-colors"
              >
                👗 Eletrodomésticos
              </Link>
              <Link
                to="/?category=moveis"
                className="px-6 py-3 bg-blue-100 text-blue-700 rounded-lg font-semibold hover:bg-blue-200 transition-colors"
              >
                🛋️ Móveis e Decoração
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;

