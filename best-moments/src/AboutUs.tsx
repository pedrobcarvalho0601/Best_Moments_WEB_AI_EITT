
import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

interface Partner {
  name: string;
  location: string;
  type: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Luísa Dias ",
    role: " ",
    image: " ",
    description: " "
  },
  {
    name: "Pedro Carvalho",
    role: " ",
    image: " ",
    description: " "
  },
  {
    name: "Francisco Santos",
    role: " ",
    image: " ",
    description: " "
  },
  {
    name: "Célio Maquile",
    role: " ",
    image: " ",
    description: " "
  },
  {
    name: "Pedro Antunes",
    role: " ",
    image: " ",
    description: " "
  },
  {
    name: "Anil Pilale",
    role: " ",
    image: " ",
    description: " "
  }
];

const partners: Partner[] = [
  { name: "Lar Senhora da Luz", location: "Lisboa", type: "Residência Sénior" },
  { name: "Centro de Dia Sol Poente", location: "Cascais", type: "Centro de Dia" },
  { name: "Residência O Amanhecer", location: "Sintra", type: "Lar de Idosos" },
  { name: "Casa de Repouso Doce Vida", location: "Amadora", type: "Residência Assistida" },
  { name: "Lar Flor de Lis", location: "Oeiras", type: "Lar de Idosos" },
  { name: "Associação Viver Melhor", location: "Almada", type: "Apoio Domiciliário" },
];

const AboutUs: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Secção Original: Quem Somos */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800">Quem Somos</h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">"A vida encolhe ou expande-se em proporção à nossa coragem." - Anaïs Nin</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <img src="https://www.interdomicilio.pt/wp-content/uploads/2015/02/Terceira-idade-o-Mundo-do-idoso.jpg" alt="Grupo de amigos idosos a rir juntos" className="rounded-lg shadow-2xl w-full" />
          </div>
          <div className="md:w-1/2 text-lg text-slate-600 space-y-4">
            <p>
              A <span className="font-bold text-sky-700">Best Moments</span> nasceu do desejo de transformar a forma como encaramos o envelhecimento. Acreditamos que a terceira idade é uma fase de novas oportunidades, descobertas e, acima de tudo, de muita alegria.
            </p>
            <p>
              Somos uma associação lucrativa dedicada a criar e organizar atividades recreativas para idosos em lares e centros de dia. A nossa missão é combater o isolamento, promover um envelhecimento ativo e saudável, e criar memórias que perduram uma vida inteira.
            </p>
            <p>
              Desde viagens culturais a tardes de lazer, cada evento é planeado com o máximo cuidado, segurança e carinho, garantindo que cada participante se sinta valorizado, feliz e parte de uma comunidade vibrante.
            </p>
          </div>
        </div>

        {/* Secção: A Nossa Equipa */}
        <div className="border-t border-slate-200 pt-20 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-sky-800">A Nossa Equipa</h3>
            <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
              Profissionais dedicados que trabalham todos os dias com o coração. Da logística ao cuidado pessoal, estamos aqui por si.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-sky-50 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 relative mx-auto w-32 h-32">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-sm"
                  />
                </div>
                <h4 className="text-xl font-bold text-sky-900 mb-1">{member.name}</h4>
                <div className="text-sm font-semibold text-sky-600 uppercase tracking-wide mb-3">{member.role}</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Nova Secção: Parceiros / Lares */}
        <div className="border-t border-slate-200 pt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-sky-800">Instituições que Confiam em Nós</h3>
            <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
              Temos o privilégio de colaborar com lares e centros de dia de referência, levando sorrisos a centenas de idosos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white border border-slate-100 rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center group">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-sky-200 transition-colors">
                    {/* Ícone de Edifício Genérico */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-1">{partner.name}</h4>
                <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider mb-2">{partner.type}</span>
                <div className="flex items-center text-slate-500 text-sm">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                   {partner.location}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-6">Gostaria de ver o seu Lar na nossa lista de parceiros felizes?</p>
            <button className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
                Torne-se Parceiro
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
