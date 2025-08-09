import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Store, User, Building, Mail, Phone, Send, CheckCircle, TrendingUp, Eye, Users } from 'lucide-react';
import '../App.css';

const BecomePartner = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessArea: '',
    cnpj: '',
    email: '',
    phone: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário
    console.log('Partner application:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Solicitação Enviada!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Obrigado pelo seu interesse em se tornar nosso parceiro. 
              Nossa equipe entrará em contato em breve para discutir as próximas etapas.
            </p>
            <div className="space-y-4">
              <Link
                to="/"
                className="ar-button inline-flex items-center px-6 py-3 text-white rounded-lg font-semibold"
              >
                Voltar ao Início
              </Link>
              <p className="text-sm text-gray-500">
                Tempo médio de resposta: 24-48 horas
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Quero ser Parceiro
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Revolucione suas vendas com Realidade Aumentada. 
            Junte-se às marcas que já transformaram a experiência de compra dos seus clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Benefits Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Por que ser nosso parceiro?
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 visionbuy-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Aumento nas Vendas
                  </h3>
                  <p className="text-gray-600">
                    Parceiros relatam aumento médio de 40% nas conversões após implementar a tecnologia AR.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 visionbuy-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Redução de Devoluções
                  </h3>
                  <p className="text-gray-600">
                    Clientes que experimentam produtos em AR têm 60% menos chances de devolver itens.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 visionbuy-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Maior Engajamento
                  </h3>
                  <p className="text-gray-600">
                    Experiências interativas mantêm clientes 3x mais tempo explorando produtos.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 visionbuy-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <Store className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Vitrine Exclusiva
                  </h3>
                  <p className="text-gray-600">
                    Tenha sua própria vitrine virtual no VisionBuy com identidade personalizada.
                  </p>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Como funciona
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold">
                    1
                  </div>
                  <p className="text-gray-700">Envie seus materiais: imagens, medidas e/ou modelos 3D</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold">
                    2
                  </div>
                  <p className="text-gray-700">Montamos sua vitrine interativa dentro do VisionBuy</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold">
                    3
                  </div>
                  <p className="text-gray-700">Clientes experimentam seus produtos com Realidade Aumentada</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div>
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Solicitar Parceria
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Seu nome completo"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="businessArea" className="block text-sm font-medium text-gray-700 mb-2">
                    Área de atuação
                  </label>
                  <select
                    id="businessArea"
                    name="businessArea"
                    required
                    value={formData.businessArea}
                    onChange={handleChange}
                    className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="">Selecione sua área</option>
                    <option value="moda">Moda e Acessórios</option>
                    <option value="moveis">Móveis e Decoração</option>
                    <option value="beleza">Beleza e Cosméticos</option>
                    <option value="eletronicos">Eletrônicos</option>
                    <option value="casa">Casa e Jardim</option>
                    <option value="esportes">Esportes e Lazer</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700 mb-2">
                    CNPJ
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="cnpj"
                      name="cnpj"
                      required
                      value={formData.cnpj}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                      placeholder="00.000.000/0000-00"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="ar-button w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Solicitação
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Dúvidas? Entre em contato:{' '}
                  <a href="mailto:parceiros@visionbuy.com" className="text-purple-600 hover:text-purple-500">
                    parceiros@visionbuy.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomePartner;

