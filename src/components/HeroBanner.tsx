import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HeroBanner() {
  const slides = [
    { image: '/banner.jpg', alt: 'Coleção Capivara 2025' },
    { image: '/banner.jpg', alt: 'Coleção Floral Premium' },
    { image: '/banner.jpg', alt: 'Linha Minimalista' },
  ];

  return (
    <section className="w-full bg-[#fff]">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 max-w-[1300px] mx-auto px-6 py-8">

        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Sofisticação e <span className="text-[#d46d94]">exclusividade</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
            Descubra nossos conjuntos de cama feitos com carinho, qualidade e elegância para transformar seu quarto.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button className="bg-[#d46d94] hover:bg-[#bb5f83] text-white px-6 py-3 rounded-full text-sm font-medium">
              Ver Produtos
            </button>
            <button className="border border-[#d46d94] text-[#d46d94] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#fdf5f7]">
              Promoções
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="w-[100%] max-w-[375px] md:max-w-[433px] relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop
            speed={700} // velocidade mais suave
            className="rounded-xl"
            spaceBetween={12}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-[400px] object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Estilo das setas e paginação */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          background: white;
          border-radius: 9999px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          color: #d46d94;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          transform: scale(1.05);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 14px;
          font-weight: bold;
        }

        @media (min-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 40px;
            height: 40px;
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 16px;
          }
        }

        .swiper-pagination-bullet {
          background: #d46d94;
          opacity: 0.6;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
