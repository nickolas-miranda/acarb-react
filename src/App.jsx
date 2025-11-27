// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importações dos seus componentes existentes
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import InfoSection from './components/InfoSection/InfoSection';
import HowItWorksDriver from './components/HowItWorksDriver/HowItWorksDriver';
import MainServices from './components/MainServices/MainServices';
import ServiceAdvantages from './components/ServiceAdvantages/ServiceAdvantages';
import CoverageMap from './components/CoverageMap/CoverageMap';
import PartnerCTA from './components/PartnerCTA/PartnerCTA';
import HowItWorksPartner from './components/HowItWorksPartner/HowItWorksPartner';
import PricingTable from './components/PricingTable/PricingTable';
import PartnerAdvantages from './components/PartnerAdvantages/PartnerAdvantages';
import Footer from './components/Footer/Footer';

// Importação da Nova Página de Auth
import AuthPage from './components/AuthPage/AuthPage';

// Componente Wrapper para a Landing Page (Página Inicial)
const LandingPage = () => {
  return (
    <>
      {/* No Header, você precisará adicionar um Link ou lógica
         para redirecionar para '/login' quando clicar em "Entrar" 
      */}
      <Header /> 
      <Hero />
      <InfoSection />
      <HowItWorksDriver />
      <MainServices />
      <ServiceAdvantages />
      <CoverageMap />
      <PartnerCTA />
      <HowItWorksPartner />
      <PricingTable />
      <PartnerAdvantages />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Rota da Página Principal */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Rota da Página de Login/Cadastro */}
          <Route path="/login" element={<AuthPage />} />
          <Route path="/cadastro" element={<AuthPage />} /> {/* Opcional: cair direto na aba cadastro via prop se quiser melhorar depois */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;