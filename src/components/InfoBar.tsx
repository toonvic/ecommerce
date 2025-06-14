import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function InfoBar() {
  const items = [
    { title: 'Ofertas', subtitle: 'exclusivas', icon: '/offer.svg' },
    { title: 'Até 3x sem juros', subtitle: 'no cartão de crédito', icon: '/card.svg' },
    { title: 'Atendimento', subtitle: 'via WhatsApp', icon: '/whatsapp.svg' },
  ];

  return (
    <div className="w-full bg-[#d46d94] border-y border-[#e9dadd]">
      <div className="max-w-[1300px] mx-auto px-4 py-4">

        {/* Mobile: Swiper com autoplay */}
        <div className="block md:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center gap-4 justify-center">
                  <img src={item.icon} alt={item.title} className="w-10 h-10 brightness-0 invert" />
                  <div className="flex flex-col items-center">
                    <span className="text-base text-white font-semibold">{item.title}</span>
                    <span className="text-sm text-white">{item.subtitle}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: Layout fixo */}
        <div className="hidden md:flex items-center justify-between gap-6">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <img src={item.icon} alt={item.title} className="w-8 h-8 md:w-10 md:h-10 brightness-0 invert" />
              <div className="flex flex-col">
                <span className="text-sm md:text-base text-white font-semibold">{item.title}</span>
                <span className="text-xs md:text-sm text-white">{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
