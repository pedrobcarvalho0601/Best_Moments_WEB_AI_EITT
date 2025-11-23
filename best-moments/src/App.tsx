import React, { useState } from 'react';

// Importações do Código 1 (Componentes do Site)
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// Importações do Código 2 (Assets e Estilos do Vite Demo)
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

export type Section = 'home' | 'sobre' | 'atividades' | 'testemunhos' | 'galeria' | 'contacto';

const App: React.FC = () => {
  // --- Estados Combinados ---
  // 1. Estado de Navegação
  const [activeSection, setActiveSection] = useState<Section>('home');
  
  // 2. Estado do Contador (Vite Demo)
  const [count, setCount] = useState(0);

  // Lógica de troca de seções
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero setActiveSection={setActiveSection} />;
      case 'sobre':
        return <AboutUs />;
      case 'atividades':
        return <Services />;
      case 'testemunhos':
        return <Testimonials />;
      case 'galeria':
        return <Gallery />;
      case 'contacto':
        return <Contact />;
      default:
        return <Hero setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="bg-slate-50 text-slate-700 flex flex-col min-h-screen">
      
      {/* Navegação Superior */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="flex-grow">
        
        {/* --- INÍCIO: Conteúdo do Vite/React Demo (Código 2) --- */}
        {/* Adicionei uma div container para separar visualmente */}
        <div className="vite-demo-container p-8 text-center border-b-2 border-slate-200">
          <div className="flex justify-center gap-4 mb-4">
            <a href="https://vite.dev" target="_blank" rel="noreferrer">
              <img src={viteLogo} className="logo h-16" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
              <img src={reactLogo} className="logo react h-16 animate-spin-slow" alt="React logo" />
            </a>
          </div>
          
          <h1 className="text-2xl font-bold mb-4">Vite + React (Demo Integrado)</h1>
          
          <div className="card mb-4">
            <button 
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setCount((count) => count + 1)}
            >
              count is {count}
            </button>
            <p className="mt-2">
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          
          <p className="read-the-docs text-gray-500">
            Click on the Vite and React logos to learn more
          </p>
        </div>
        {/* --- FIM: Conteúdo do Vite/React Demo --- */}

        {/* Renderização Dinâmica das Seções do Site (Código 1) */}
        {renderSection()}
        
      </main>
      
      {/* Rodapé */}
      <Footer />
      
    </div>
  );
};

export default App;