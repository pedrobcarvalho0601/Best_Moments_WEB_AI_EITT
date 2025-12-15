import React from 'react';

const galleryImages = [
  { src: "https://cdn.pixabay.com/photo/2018/04/29/20/56/double-rider-tricycle-3361097_1280.jpg", alt: "Idosos a andarem de biciclleta" },
  { src: "https://almadaonline.pt/wp-content/uploads/2023/10/idoso.jpg" },
  { src: "https://www.noticiasdecoimbra.pt/wp-content/uploads/2020/01/IDOSO.jpg" },
  { src: "https://images.rr.pt/b18217f3adefaultlarge_1024.png" },
  { src: "https://bordalo.observador.pt/v2/q:60/rs:fill:980/c:3000:1684:nowe:0:316/plain/https://s3.observador.pt/wp-content/uploads/2022/09/19192159/7o0b6473.jpeg" },
  { src: "https://www.swissinfo.ch/content/wp-content/uploads/sites/13/2012/06/e7b3c2018261783aa0e4991d98fbf263-83767336r-32945584-data.jpg?ver=9a73193e" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQByyl-H369hmaMyKeFj5yyzRsdk1bXAAT39A&s" },
  { src: "https://domus24.pt/wp-content/uploads/2025/04/id-e1744815726453.png" },  
];

const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-sky-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800">Momentos Inesquecíveis</h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">Uma imagem vale mais que mil palavras.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;