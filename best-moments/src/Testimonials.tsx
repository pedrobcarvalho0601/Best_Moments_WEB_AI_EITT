import React from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "A viagem a Sintra foi mágica! Senti-me jovem outra vez. A organização foi impecável e fiz novos amigos.",
    name: "Maria Antunes",
    age: 82,
    avatarUrl: "https://thumbs.dreamstime.com/b/pessoa-idosa-10393340.jpg"
  },
  {
    quote: "Nunca pensei que ia aprender a pintar com 78 anos. Os workshops da Best Moments são a minha alegria da semana.",
    name: "Joaquim Pereira",
    age: 78,
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmRj-bTWTw353H4oMMZQfjqOqMLo0uNJGJVA&s"
  },
  {
    quote: "Obrigada por todo o carinho e paciência. Cada passeio é uma aventura e sinto-me sempre segura e feliz.",
    name: "Lurdes Gonçalves",
    age: 85,
    avatarUrl: "https://img.freepik.com/fotos-premium/uma-idosa-sorrindo_1285898-1055.jpg?semt=ais_hybrid&w=740&q=80"
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center h-full">
    <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4 border-4 border-sky-200" />
    <p className="text-slate-600 italic mb-4 flex-grow">"{testimonial.quote}"</p>
    <div className="font-bold text-sky-700">{testimonial.name}, {testimonial.age} anos</div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800">O Que Dizem de Nós</h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">As vossas palavras são a nossa maior inspiração.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;