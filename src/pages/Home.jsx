import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Smartphone, Star } from 'lucide-react';
import { categories, featuredProducts } from '../data/mockData';
import '../App.css';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="visionbuy-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sinta a compra antes dela existir.
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Tudo com Realidade Aumentada.
            </p>
            <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto">
              Visualize produtos em seu ambiente real antes de comprar. 
              A tecnologia que transforma sua experiência de compra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/lojas-parceiras"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Eye className="w-5 h-5 mr-2" />
                Explorar Produtos
              </Link>
              <Link
                to="/quero-ser-parceiro"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center"
              >
                Seja Parceiro
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quem Somos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto"> 
              Na VisionBuy, acreditamos que comprar deve ser uma experiência inovadora, simples e envolvente. Unimos tecnologia imersiva e design inteligente para transformar a forma como pessoas e empresas interagem com seus produtos antes da compra.
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto"> 
              Nossa plataforma permite que móveis, itens de decoração e eletrodomésticos sejam visualizados em ambientes reais através da realidade aumentada e virtual, garantindo escolhas mais seguras e satisfatórias.
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto"> 
              Nascemos com o propósito de reduzir incertezas, evitar frustrações e impulsionar o varejo, oferecendo às empresas uma solução inovadora que conecta consumidores às suas escolhas de maneira única.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 visionbuy-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Inovação
              </h3>
              <p className="text-gray-600">
                Somos pioneiros em experiências interativas para e-commerce.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 visionbuy-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Transparência
              </h3>
              <p className="text-gray-600">
                Ajudamos você a tomar decisões seguras e conscientes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 visionbuy-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Experiência
              </h3>
              <p className="text-gray-600">
                Colocamos o cliente no centro de tudo o que fazemos.
              </p>
            </div>
          </div>
        </div>
      </section>


            {/* Missão, Visão e Valores Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Missão, Visão e Valores
            </h2>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Missão</h3>
            <p className="text-gray-700">
              Levar a tecnologia de Realidade Aumentada para o varejo de forma acessível, elevando a experiência de compra e aproximando consumidores das marcas.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Visão</h3>
            <p className="text-gray-700">
              Ser referência no Brasil em personalização de compras com RA, promovendo inovação e eficiência no comércio digital.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Valores</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Inovação</li>
              <li>Sustentabilidade</li>
              <li>Conexão</li>
              <li>Acessibilidade</li>
              <li>Experiência do Cliente</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-lg text-gray-600">
              Experimente estes produtos com Realidade Aumentada
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="aspect-square bg-gray-200 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.arEnabled && (
                    <div className="absolute top-4 right-4 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      AR
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-purple-600">{product.price}</span>
                    <span className="text-sm text-gray-500">{product.store}</span>
                  </div>
                  <Link
                    to={`/produto/${product.id}/ar`}
                    className="ar-button w-full text-white py-3 rounded-lg font-semibold flex items-center justify-center"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    VISUALIZE EM RA
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* How it Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-lg text-gray-600">
              Simples, rápido e inovador
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 visionbuy-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                1. Escolha o Produto
              </h3>
              <p className="text-gray-600">
                Navegue pelas categorias e encontre o produto que deseja visualizar
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 visionbuy-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                2. Ative a Câmera
              </h3>
              <p className="text-gray-600">
                Clique em "Visualizar em RA" e permita o acesso à câmera do seu dispositivo
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 visionbuy-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                3. Experimente
              </h3>
              <p className="text-gray-600">
                Veja o produto em seu ambiente real e tome a melhor decisão de compra
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 visionbuy-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para Revolucionar suas Compras?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a milhares de usuários que já experimentam o futuro das compras online
          </p>
          <Link
            to="/criar-conta"
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Começar Agora
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

