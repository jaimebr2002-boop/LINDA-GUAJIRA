import React, { useState } from 'react';
import { MapPin, Phone, Clock, Star, Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentReviewSlide, setCurrentReviewSlide] = useState(0);
  const [showLogoModal, setShowLogoModal] = useState(false);
  const [selectedMenuImage, setSelectedMenuImage] = useState<string | null>(null);

  const menuImages = [
    "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772140996/554560870_17942291643059732_8968172631413223745_n._shlycr.jpg",
    "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772140996/554239036_17942290755059732_7329399533664210249_n._g0v9ew.jpg",
    "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772140985/575721314_17946873144059732_4456658020255486266_n._jfxgub.jpg",
    "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772138826/571972724_17945749734059732_5439757119791302189_n._isabnb.jpg"
  ];

  const reviews = [
    [
      { name: "Ricardo", text: "Hermoso restaurante temático Cubano en Barrio Salamanca, metro Manuel Becerra. Es completamente nuevo y bellamente decorado. La comida muy rica. Al medio día tiene menú a muy buen precio. Los jueves, viernes y sábado tienen música en vivo…" },
      { name: "Lybe K", text: "Fuimos a tomar algo y a bailar. Entrada de 15€ incluida consumición. Lugar super bonito. Música en vivo muy buena. Ambiente espectacular, bailes hasta cierre del local. Nos ha encantado." },
      { name: "Dottore 1964", text: "Maravilloso restaurante bar de cocina típica cubana. Amplio salón, decorado como la plaza del Capitolio de La Habana. Música en vivo, servicio rápido y atención excelente. Precio razonable." }
    ],
    [
      { name: "Miguel Ángel Gutiérrez", text: "Auténtico sabor cubano en pleno centro de Madrid. Platos llenos de sazón, raciones generosas y cócteles excelentes. Música los fines de semana y ambiente que te hace sentir en La Habana. Ideal para ir con amigos y disfrutar sin prisas." },
      { name: "Karina Blanco", text: "La comida está increíblemente buena. Cada plato tiene un sabor auténtico cubano, casero, como en ningún lugar. Se nota la calidad de los ingredientes y el cuidado en cada detalle. Todo estaba delicioso." },
      { name: "Marcos M.R.", text: "Magnífico lugar para comer o cenar comida típica cubana. Amplio salón decorado como la Plaza del Capitolio. Música en vivo y atención excelente. Precio razonable, sin duda para repetir." }
    ],
    [
      { name: "Yanulka Ofarrill", text: "Sitio precioso, han cuidado todos los detalles a la perfección. Se come de lujo y además hay música en vivo. Soy cubana y he ido varias veces, la experiencia es maravillosa." },
      { name: "Ana", text: "Han abierto cerca de mi trabajo este lugar maravilloso. La decoración es alegre y espectacular. Fuimos a tomar cócteles y son un 10/10. Tenemos pendiente volver para probar más platos." },
      { name: "Irene HF", text: "Cuando entras parece que estás en La Habana. Te atienden excelente y cuando pruebas la comida te transportas completamente. Música en vivo que hace la experiencia aún más especial." }
    ],
    [
      { name: "Maria Eugenia", text: "Restaurante precioso, con esencia cubana auténtica y trato estupendo. Todo está puesto con mucho gusto y transmite muy buena vibra." },
      { name: "Olga Lidia Moreno", text: "Se hizo el día especial solo de entrar y escuchar música en vivo. Comida excelente y platos variados. Experiencia que recuerda totalmente a Cuba." },
      { name: "Katia Marquez", text: "Lugar muy agradable con servicio maravilloso. La comida impresionante, auténtica comida cubana bien elaborada y con sabor que recuerda a mi tierra." }
    ],
    [
      { name: "José Benavides", text: "Llegamos por recomendación y confirmamos que es uno de los mejores sitios en Madrid para disfrutar de auténtica cocina cubana. Experiencia espectacular y totalmente recomendable." },
      { name: "Aintzane Tejada", text: "Fuimos a comer y el ambiente era tranquilo. La comida buenísima, raciones grandes y calidad precio excelente. Repetiremos sin duda." },
      { name: "Majela Dueñas", text: "Un lugar maravilloso con buena vibra, comida de 10 y personal super atento. El mejor rincón cubano en Madrid." }
    ]
  ];

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % menuImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + menuImages.length) % menuImages.length);

  const nextReviewSlide = () => setCurrentReviewSlide((prev) => (prev + 1) % reviews.length);
  const prevReviewSlide = () => setCurrentReviewSlide((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772141006/569050903_17945062890059732_7754770198534356191_n._kbk2yu.jpg" 
            alt="Restaurant Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div>
          {/* Warm light glow in the center */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,90,40,0.15)_0%,transparent_60%)]"></div>
        </div>

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between px-8 md:px-16 py-8 w-full">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setShowLogoModal(true)}>
            <div className="w-12 h-12 rounded-full overflow-hidden border border-[#ebd5c1]/30 group-hover:scale-110 transition-transform">
              <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772138826/523910873_17935541736059732_1480639556600226207_n_yjbhxt.jpg" alt="Linda Guajira Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold leading-none tracking-wide text-[#ebd5c1]">LINDA</span>
              <span className="text-[0.6rem] tracking-[0.25em] font-medium mt-1 text-gray-300">GUAJIRA</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-[0.7rem] font-bold tracking-[0.15em]">
            <a href="#home" className="hover:text-[#ebd5c1] transition-colors">INICIO</a>
            <a href="#about" className="hover:text-[#ebd5c1] transition-colors">CONÓCENOS</a>
            <a href="#menu" className="hover:text-[#ebd5c1] transition-colors">CARTA</a>
            <a href="#events" className="hover:text-[#ebd5c1] transition-colors">EVENTOS</a>
            <a href="#reviews" className="hover:text-[#ebd5c1] transition-colors">RESEÑAS</a>
            <a href="#contact" className="hover:text-[#ebd5c1] transition-colors">CONTACTO</a>
          </nav>
        </header>

        {/* Main Hero Content */}
        <main className="relative z-10 flex-1 flex items-center justify-center p-6" id="home">
          <div className="relative w-full max-w-[700px]">
            <div className="bg-[#2b1111]/95 border border-[#ebd5c1]/50 rounded-[1.5rem] p-12 md:p-20 flex flex-col items-center justify-center text-center shadow-2xl backdrop-blur-sm relative overflow-hidden">
              <h2 className="font-script text-7xl md:text-8xl lg:text-9xl text-[#ebd5c1] mb-2 drop-shadow-lg leading-none" style={{ transform: 'rotate(-3deg)' }}>
                Linda
              </h2>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-[#ebd5c1] tracking-[0.15em] mb-12 drop-shadow-xl mt-2">
                GUAJIRA
              </h1>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a 
                  href="https://www.google.com/maps/reserve/v/dine/c/mb7FM8pUGmA?source=pa&opi=79508299&hl=es-ES&gei=sYmgaZjXDb7y7M8PleiR2Qc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ebd5c1] text-[#2b1111] border border-[#ebd5c1] px-8 py-4 text-[0.7rem] font-bold tracking-[0.2em] uppercase hover:bg-transparent hover:text-[#ebd5c1] transition-all duration-300 text-center"
                >
                  Reservar ahora
                </a>
                <a 
                  href="#reviews"
                  className="bg-transparent text-[#ebd5c1] border border-[#ebd5c1] px-8 py-4 text-[0.7rem] font-bold tracking-[0.2em] uppercase hover:bg-[#ebd5c1] hover:text-[#2b1111] transition-all duration-300 text-center"
                >
                  Ver reseñas
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* Social Links Bottom Right */}
        <div className="absolute bottom-8 right-8 z-20 flex flex-col gap-5">
          <a href="https://www.instagram.com/lindaguajira.madrid/?hl=es" target="_blank" rel="noopener noreferrer" className="drop-shadow-lg hover:scale-110 transform duration-300">
            <svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f09433" />
                  <stop offset="25%" stopColor="#e6683c" />
                  <stop offset="50%" stopColor="#dc2743" />
                  <stop offset="75%" stopColor="#cc2366" />
                  <stop offset="100%" stopColor="#bc1888" />
                </linearGradient>
              </defs>
              <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/lindaguajiramadrid/?locale=es_ES" target="_blank" rel="noopener noreferrer" className="drop-shadow-lg hover:scale-110 transform duration-300">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Conócenos Section */}
      <section id="about" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-[#ebd5c1] font-script text-4xl mb-2">Conócenos</h3>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">Nuestra historia y esencia cubana</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>Linda Guajira nace con el objetivo de traer el auténtico sabor y la alegría de Cuba a Madrid.</p>
              <p>Combinamos gastronomía tradicional cubana con música en vivo y un ambiente festivo que te transporta directamente a La Habana.</p>
              <p>Cada visita es una experiencia completa: platos caseros, cocteles tropicales y noches llenas de ritmo y energía.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 h-[500px]">
            <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772138826/568740296_17945062134059732_3295690341329061451_n._xfwoox.jpg" alt="Interior" className="w-full h-full object-cover rounded-xl col-span-1 row-span-2" />
            <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772138826/568129235_17944656432059732_3247981673614688938_n._fjsdu9.jpg" alt="Equipo" className="w-full h-full object-cover rounded-xl" />
            <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772138826/568066953_17944718436059732_5324686450679723314_n._oplig4.jpg" alt="Ambiente" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </section>

      {/* Nuestra Carta Section */}
      <section id="menu" className="py-24 bg-[#111] px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h3 className="text-[#ebd5c1] font-script text-4xl mb-2">Nuestra Carta</h3>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Descubre nuestros sabores</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Explora nuestra gastronomía a través de imágenes de nuestros platos más representativos.</p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          {/* 2x2 Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {menuImages.map((img, idx) => (
              <div 
                key={idx} 
                className="aspect-square md:aspect-video rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => setSelectedMenuImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Plato representativo ${idx + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Música y Eventos Section */}
      <section id="events" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-[#ebd5c1] font-script text-4xl mb-2">Música y Eventos</h3>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Música en vivo y eventos</h2>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            En Linda Guajira la música es parte fundamental de la experiencia. Ofrecemos música en directo de miércoles a domingo con artistas invitados, noches de salsa, ritmos latinos y celebraciones especiales.
          </p>
        </div>

        {/* Spotify Wrapped Highlight */}
        <div className="mb-16 bg-[#1db954]/10 border border-[#1db954]/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1db954]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#1db954" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Spotify Wrapped 2025</h4>
              </div>
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                Tuvimos el honor de acoger el evento anual de Spotify Wrapped, convirtiéndonos en sede oficial de uno de los eventos musicales más importantes del año en nuestro espacio.
              </p>
              <p className="text-gray-400">
                Esto demuestra nuestro compromiso con la música y la cultura urbana en Madrid.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square md:aspect-[4/5] rounded-xl overflow-hidden group">
                <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772140985/573349774_17946124728059732_7985970955977663863_n._x8f6ey.jpg" alt="Spotify Event" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <span className="text-sm font-bold text-white">El Evento</span>
                </div>
              </div>
              <div className="relative aspect-square md:aspect-[4/5] rounded-xl overflow-hidden group translate-y-8">
                <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772138826/568129235_17944656432059732_3247981673614688938_n._fjsdu9.jpg" alt="Spotify Event" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <span className="text-sm font-bold text-white">Live Performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tardeos Highlight */}
        <div className="relative rounded-3xl overflow-hidden border border-[#ebd5c1]/40 group shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772138826/568740296_17945062134059732_3295690341329061451_n._xfwoox.jpg" alt="Fiesta y baile" className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#2b1111]/90 to-transparent"></div>
          </div>
          
          <div className="relative z-10 p-8 md:p-16 w-full md:w-3/4 lg:w-2/3">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center gap-3">
              <span className="text-3xl md:text-4xl">🔥</span> Tardeos en La Linda
            </h3>
            <h4 className="text-2xl md:text-3xl font-serif text-[#ebd5c1] mb-10 italic">Miércoles, Jueves y Domingos</h4>
            
            <ul className="space-y-5 text-gray-200 text-lg md:text-xl">
              <li className="flex items-center gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ebd5c1] shadow-[0_0_10px_rgba(235,213,193,0.8)] shrink-0"></div>
                <span>A partir de las 18:00</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ebd5c1] shadow-[0_0_10px_rgba(235,213,193,0.8)] shrink-0"></div>
                <span>18:00 – Happy Hour</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ebd5c1] shadow-[0_0_10px_rgba(235,213,193,0.8)] shrink-0"></div>
                <span>19:00 – Taller de salsa y bachata</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ebd5c1] shadow-[0_0_10px_rgba(235,213,193,0.8)] shrink-0"></div>
                <span>Y seguimos con DJ y música en vivo toda la noche</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Reseñas Section */}
      <section id="reviews" className="py-24 bg-[#111] px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-[#ebd5c1] font-script text-4xl mb-2">Reseñas</h3>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Lo que dicen nuestros clientes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16">La mejor forma de crecer es escuchando a quienes nos visitan. Déjanos tu opinión y comparte tu experiencia con nosotros en Google.</p>

          <div className="relative max-w-6xl mx-auto mb-12">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentReviewSlide * 100}%)` }}
              >
                {reviews.map((slide, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                    {slide.map((review, idx) => (
                      <div key={idx} className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 text-left flex flex-col h-full">
                        <div className="flex text-[#ebd5c1] mb-6">
                          {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                        </div>
                        <p className="text-lg italic text-gray-300 mb-8 flex-grow leading-relaxed">"{review.text}"</p>
                        <div className="flex items-center gap-4 mt-auto">
                          <div className="w-12 h-12 bg-[#2b1111] text-[#ebd5c1] rounded-full flex items-center justify-center font-bold text-xl border border-[#ebd5c1]/30 shrink-0">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-bold text-white">{review.name}</div>
                            <div className="text-sm text-gray-500">Cliente Google</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button onClick={prevReviewSlide} className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 bg-[#2b1111] hover:bg-[#ebd5c1] hover:text-[#2b1111] text-[#ebd5c1] p-3 rounded-full border border-[#ebd5c1]/30 transition-all z-10">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextReviewSlide} className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 bg-[#2b1111] hover:bg-[#ebd5c1] hover:text-[#2b1111] text-[#ebd5c1] p-3 rounded-full border border-[#ebd5c1]/30 transition-all z-10">
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mb-12">
            {reviews.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentReviewSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentReviewSlide === idx ? 'bg-[#ebd5c1] scale-125' : 'bg-gray-700 hover:bg-gray-500'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <a 
            href="https://www.google.com/maps/place/Linda+Guajira+%7C+Restaurante+cubano+en+Madrid/@40.4263148,-3.6705399,835m/data=!3m1!1e3!4m18!1m9!3m8!1s0xd422981b71e3e97:0xe5e246b3add432c9!2sLinda+Guajira+%7C+Restaurante+cubano+en+Madrid!8m2!3d40.4263148!4d-3.6705399!9m1!1b1!16s%2Fg%2F11lyjjb9bd!3m7!1s0xd422981b71e3e97:0xe5e246b3add432c9!8m2!3d40.4263148!4d-3.6705399!9m1!1b1!16s%2Fg%2F11lyjjb9bd?entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#ebd5c1] text-[#2b1111] px-10 py-5 text-[0.8rem] font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
          >
            <Star size={18} fill="currentColor" />
            Deja tu reseña aquí
          </a>
        </div>
      </section>

      {/* Reserva Section */}
      <section className="py-32 px-6 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop" alt="Reserva" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#2b1111]/90"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h3 className="text-[#ebd5c1] font-script text-4xl mb-2">Reserva</h3>
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-white">Reserva tu mesa</h2>
          <p className="text-gray-300 text-lg mb-10">Reserva fácilmente tu mesa online y asegura tu lugar para vivir la experiencia Linda Guajira.</p>
          <a 
            href="https://www.google.com/maps/reserve/v/dine/c/mb7FM8pUGmA?source=pa&opi=79508299&hl=es-ES&gei=sYmgaZjXDb7y7M8PleiR2Qc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ebd5c1] text-[#2b1111] px-10 py-5 text-[0.8rem] font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors"
          >
            Reservar ahora
          </a>
        </div>
      </section>

      {/* Contacto / Footer */}
      <footer id="contact" className="bg-[#0a0a0a] border-t border-gray-900 pt-24 pb-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="text-[#ebd5c1] font-script text-4xl mb-2">Visítanos</h3>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-10">Ven a conocernos</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="text-[#ebd5c1] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Dirección</h4>
                  <a 
                    href="https://www.google.com/maps/place/Linda+Guajira+%7C+Restaurante+cubano+en+Madrid/@40.4263148,-3.6705399,835m/data=!3m1!1e3!4m16!1m9!3m8!1s0xd422981b71e3e97:0xe5e246b3add432c9!2sLinda+Guajira+%7C+Restaurante+cubano+en+Madrid!8m2!3d40.4263148!4d-3.6705399!9m1!1b1!16s%2Fg%2F11lyjjb9bd!3m5!1s0xd422981b71e3e97:0xe5e246b3add432c9!8m2!3d40.4263148!4d-3.6705399!16s%2Fg%2F11lyjjb9bd?entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-[#ebd5c1] transition-colors block"
                  >
                    C. de la Fuente del Berro, 13<br/>28009 – Barrio de Salamanca<br/>Madrid
                  </a>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Phone className="text-[#ebd5c1] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Teléfono</h4>
                  <p className="text-gray-400">677 876 609</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Clock className="text-[#ebd5c1] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Horarios</h4>
                  <ul className="text-gray-400 space-y-1">
                    <li className="flex justify-between w-48"><span>Lunes</span> <span>Cerrado</span></li>
                    <li className="flex justify-between w-48"><span>Martes</span> <span>Cerrado</span></li>
                    <li className="flex justify-between w-48"><span>Miércoles</span> <span>13:00 – 03:00</span></li>
                    <li className="flex justify-between w-48"><span>Jueves</span> <span>13:00 – 03:00</span></li>
                    <li className="flex justify-between w-48"><span>Viernes</span> <span>13:00 – 03:00</span></li>
                    <li className="flex justify-between w-48"><span>Sábado</span> <span>13:00 – 03:00</span></li>
                    <li className="flex justify-between w-48"><span>Domingo</span> <span>13:00 – 01:30</span></li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4">Redes Sociales</h4>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/lindaguajira.madrid/?hl=es" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] p-3 rounded-full hover:scale-110 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="ig-grad-footer" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f09433" />
                          <stop offset="25%" stopColor="#e6683c" />
                          <stop offset="50%" stopColor="#dc2743" />
                          <stop offset="75%" stopColor="#cc2366" />
                          <stop offset="100%" stopColor="#bc1888" />
                        </linearGradient>
                      </defs>
                      <path fill="url(#ig-grad-footer)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/lindaguajiramadrid/?locale=es_ES" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] p-3 rounded-full hover:scale-110 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] lg:h-auto rounded-2xl overflow-hidden border border-gray-800 relative group">
            <iframe 
              src="https://maps.google.com/maps?q=Linda+Guajira,+C.+de+la+Fuente+del+Berro,+13,+28009+Madrid&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación"
            ></iframe>
            <a 
              href="https://www.google.com/maps/place/Linda+Guajira+%7C+Restaurante+cubano+en+Madrid/@40.4263148,-3.6705399,835m/data=!3m1!1e3!4m16!1m9!3m8!1s0xd422981b71e3e97:0xe5e246b3add432c9!2sLinda+Guajira+%7C+Restaurante+cubano+en+Madrid!8m2!3d40.4263148!4d-3.6705399!9m1!1b1!16s%2Fg%2F11lyjjb9bd!3m5!1s0xd422981b71e3e97:0xe5e246b3add432c9!8m2!3d40.4263148!4d-3.6705399!16s%2Fg%2F11lyjjb9bd?entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]"
            >
              <span className="bg-[#ebd5c1] text-[#2b1111] px-6 py-3 rounded-full font-bold tracking-wider text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <MapPin size={18} />
                Abrir en Google Maps
              </span>
            </a>
          </div>
        </div>
        
        <div className="text-center text-gray-600 text-sm border-t border-gray-900 pt-8">
          <p>&copy; {new Date().getFullYear()} Linda Guajira. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Logo Modal */}
      {showLogoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" onClick={() => setShowLogoModal(false)}>
          <button 
            className="absolute top-6 right-6 text-white hover:text-[#ebd5c1] transition-colors p-2"
            onClick={() => setShowLogoModal(false)}
          >
            <X size={32} />
          </button>
          <div className="relative max-w-3xl w-full aspect-square md:aspect-auto md:h-[80vh] rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <img 
              src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772138826/523910873_17935541736059732_1480639556600226207_n_yjbhxt.jpg" 
              alt="Linda Guajira Logo Grande" 
              className="w-full h-full object-contain bg-black"
            />
          </div>
        </div>
      )}

      {/* Menu Image Modal */}
      {selectedMenuImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" onClick={() => setSelectedMenuImage(null)}>
          <button 
            className="absolute top-6 right-6 text-white hover:text-[#ebd5c1] transition-colors p-2"
            onClick={() => setSelectedMenuImage(null)}
          >
            <X size={32} />
          </button>
          <div className="relative max-w-5xl w-full aspect-square md:aspect-auto md:h-[85vh] rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedMenuImage} 
              alt="Plato ampliado" 
              className="w-full h-full object-contain bg-black"
            />
          </div>
        </div>
      )}
    </div>
  );
}
