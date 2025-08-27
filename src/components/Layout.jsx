import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Store, UserPlus, Home, Eye } from 'lucide-react';
import '../App.css';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Início', href: '/', icon: Home },
    { name: 'Favoritos', href: '/favoritos', icon: Heart },
    { name: 'Lojas Parceiras', href: '/lojas-parceiras', icon: Store },
    { name: 'Quero ser Parceiro', href: '/quero-ser-parceiro', icon: UserPlus },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden bg-white">
                <img
                  src="/logo.jpeg"
                  alt="Logo VisionBuy"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold text-gray-900">VisionBuy</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Login/Register Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Entrar
              </Link>
              <Link
                to="/criar-conta"
                className="ar-button text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Criar Conta
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mobile-nav border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                      isActive(item.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="flex items-center px-3 space-x-3">
                  <Link
                    to="/login"
                    className="flex-1 text-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Entrar
                  </Link>
                  <Link
                    to="/criar-conta"
                    className="flex-1 text-center ar-button text-white px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Criar Conta
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden bg-white">
                  <img
                    src="/logo.jpeg"
                    alt="Logo VisionBuy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xl font-bold">VisionBuy</span>
              </div>
              <p className="text-gray-400 mb-4">
                 Sinta a compra antes dela existir.
              </p>
              <p className="text-gray-400 text-sm">
                Transformando a experiência de compra através da tecnologia de Realidade Aumentada.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Categorias</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/?category=moda" className="hover:text-white">Moda e Acessórios</Link></li>
                <li><Link to="/?category=moveis" className="hover:text-white">Móveis e Decoração</Link></li>
                <li><Link to="/?category=beleza" className="hover:text-white">Beleza e Cosméticos</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/sobre" className="hover:text-white">Sobre Nós</Link></li>
                <li><Link to="/quero-ser-parceiro" className="hover:text-white">Seja Parceiro</Link></li>
                <li><Link to="/contato" className="hover:text-white">Contato</Link></li>
                <li><Link to="/ajuda" className="hover:text-white">Ajuda</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VisionBuy. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

