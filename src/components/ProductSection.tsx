import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import type { Product } from '@/data/products';

import 'swiper/css';
import 'swiper/css/navigation';

type SectionProps = {
  title: string;
  products: Product[];
};

export default function ProductSection({ title, products }: SectionProps) {
  const { addToCart } = useCart();

  return (
    <div className="max-w-[1300px] mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          {title}
        </h2>
        <a href="/produtos" className="text-sm text-[#d46d94] hover:underline">
          Ver mais
        </a>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={16}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 3.5 },
          1024: { slidesPerView: 4.5 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="border rounded-xl overflow-hidden">
              <Link to={`/produto/${product.slug}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-cover cursor-pointer"
                />
              </Link>
              <div className="p-4">
                <Link to={`/produto/${product.slug}`}>
                  <p className="text-sm text-gray-700 line-clamp-2 hover:underline">
                    {product.name}
                  </p>
                </Link>
                <p className="text-lg font-semibold mt-2 text-[#d46d94]">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </p>
                <button
                  onClick={() => addToCart(product, 1)}
                  className="mt-3 w-full bg-[#d46d94] hover:bg-[#bb5f83] text-white text-sm rounded-full px-4 py-2 cursor-pointer"
                >
                  Comprar
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
