import React, { useState } from 'react';

// Importações do Código 1 (Componentes do Site)
import Header from '../src/Header';
import Hero from '../src/Hero';
import AboutUs from '../src/AboutUs';
import Services from '../src/Services';
import Testimonials from '../src/Testimonials';
import Gallery from '../src/Gallery';
import Contact from '../src/Contact';
import Footer from '../src/Footer';
export type Section = 'home' | 'sobre' | 'atividades' | 'testemunhos' | 'galeria' | 'contacto';

const App: React.FC = () => {
  // Apenas o estado de navegação permanece
  const [activeSection, setActiveSection] = useState<Section>('home');

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
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="flex-grow">
        {renderSection()}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;