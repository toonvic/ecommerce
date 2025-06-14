import { useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { useState } from "react";
import { products } from "../data/products";
import { useCart } from "../contexts/CartContext";
import Toast from "../components/Toast";

export default function Product() {
  const { slug } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.slug === slug);

  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);

  if (!product) {
    return <div className="text-center py-20">Produto não encontrado.</div>;
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % product.images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowToast(true);
  };

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-xs text-gray-500 mb-6">
        <span className="hover:underline cursor-pointer">Home</span> {" > "}
        <span className="hover:underline cursor-pointer">
          {product.category}
        </span>{" "}
        {" > "}
        <span className="text-black font-medium">{product.name}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Imagens */}
        <div className="flex flex-col lg:flex-row gap-6 flex-1">
          <div className="flex lg:flex-col gap-4">
            {product.images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-20 h-20 rounded-md overflow-hidden border cursor-pointer ${
                  activeIndex === i ? "border-[#d46d94] border-2" : ""
                }`}
              >
                <img
                  src={img}
                  alt={`Thumb ${i}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          <div className="relative flex-1 rounded-xl overflow-hidden border">
            <img
              src={product.images[activeIndex]}
              alt="Produto"
              className="object-cover w-full h-full"
            />

            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Infos */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-[#2f2f2f]">{product.name}</h1>

          <p className="text-2xl font-semibold text-[#d46d94] mt-6">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </p>
          <p className="text-xs text-gray-600">
            ou 3x de R$ {(product.price / 3).toFixed(2).replace(".", ",")}{" "}
            <span className="text-[#d46d94]">sem juros</span>
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <div className="flex items-center border rounded-full px-4 py-2 w-fit">
              <button
                className="text-xl px-2 hover:text-[#d46d94] cursor-pointer"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="px-6">{quantity}</span>
              <button
                className="text-xl px-2 hover:text-[#d46d94] cursor-pointer"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex-1 bg-black hover:bg-gray-800 text-white py-3 rounded-full font-medium cursor-pointer"
            >
              Adicionar ao carrinho
            </button>
          </div>

          <button className="flex items-center gap-2 text-sm text-[#d46d94] mt-3 cursor-pointer">
            <Heart className="w-4 h-4" />
            Adicionar à lista de desejos
          </button>

          <div className="mt-6">
            <p className="text-sm mb-2">Informe seu CEP</p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="00000-000"
                className="border rounded-full px-4 py-2 text-sm w-full max-w-[180px] focus:ring-2 focus:ring-[#d46d94] focus:outline-none"
              />
              <button className="bg-black text-white px-4 py-2 rounded-full text-sm cursor-pointer">
                CALCULAR FRETE
              </button>
            </div>
          </div>

          <div className="mt-8 border-t pt-6 text-sm text-gray-700">
            <h2 className="font-semibold mb-2">Descrição do Produto</h2>
            <p>{product.description}</p>
          </div>
        </div>
      </div>

      {/* Toast */}
      <Toast show={showToast} onClose={() => setShowToast(false)} />
    </div>
  );
}
