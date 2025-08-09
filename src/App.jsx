import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import ForgotPassword from './pages/ForgotPassword';
import Favorites from './pages/Favorites';
import PartnerStores from './pages/PartnerStores';
import BecomePartner from './pages/BecomePartner';
import ARViewer from './pages/ARViewer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Routes with Layout */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/favoritos" element={<Layout><Favorites /></Layout>} />
          <Route path="/lojas-parceiras" element={<Layout><PartnerStores /></Layout>} />
          <Route path="/quero-ser-parceiro" element={<Layout><BecomePartner /></Layout>} />
          
          {/* Auth Routes (without main layout) */}
          <Route path="/login" element={<Login />} />
          <Route path="/criar-conta" element={<CreateAccount />} />
          <Route path="/recuperar-senha" element={<ForgotPassword />} />
          
          {/* AR Viewer (fullscreen, without layout) */}
          <Route path="/produto/:productId/ar" element={<ARViewer />} />
          
          {/* Fallback route */}
          <Route path="*" element={
            <Layout>
              <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                  <p className="text-lg text-gray-600 mb-8">Página não encontrada</p>
                  <a href="/" className="ar-button inline-flex items-center px-6 py-3 text-white rounded-lg font-semibold">
                    Voltar ao Início
                  </a>
                </div>
              </div>
            </Layout>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
