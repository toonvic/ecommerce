import { Link } from "react-router-dom";
import { Search, ShoppingBag, Headphones, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../contexts/CartContext";

const categories = [
  { label: "Novidades", path: "/produtos?q=novidades" },
  { label: "Lençóis", path: "/produtos?category=lencois" },
  { label: "Fronhas", path: "/produtos?category=fronhas" },
  { label: "Conjuntos", path: "/produtos?category=conjuntos" },
  { label: "Promoções", path: "/produtos?q=promoções" },
  { label: "Todos os Produtos", path: "/produtos" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalQuantity } = useCart();

  return (
    <>
      <div className="w-full bg-[#d46d94] text-white text-xs md:text-sm text-center py-1">
        FRETE FIXO R$14,00 SUL E SUDESTE
      </div>

      <header className="bg-[#fdf5f7] shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <Link to="/" className="flex items-center">
            <img src="/favicon.ico" alt="Nany Lençóis" className="h-8 w-auto" />
          </Link>

          <div className="hidden md:flex flex-1 mx-4">
            <div className="relative w-full max-w-[600px] mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="O que você procura?"
                className="w-full bg-white rounded-full border border-gray-200 px-4 py-2 pl-10 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#d46d94] focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <Link to="/sac" className="flex items-center gap-1 hover:text-[#d46d94]">
                <Headphones className="w-5 h-5" />
                <span>SAC</span>
              </Link>
              <Link to="/login" className="flex items-center gap-1 hover:text-[#d46d94]">
                <User className="w-5 h-5" />
                <span>Entrar</span>
              </Link>
            </div>

            <Link
              to="/carrinho"
              className="relative flex items-center justify-center bg-[#d46d94] hover:bg-[#bb5f83] rounded-full w-9 h-9"
            >
              <ShoppingBag className="w-5 h-5 text-white" />
              {totalQuantity > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-[#d46d94] text-[10px] font-semibold px-1 rounded-full">
                  {totalQuantity}
                </span>
              )}
            </Link>
          </div>
        </div>

        <div className="px-4 pb-3 md:hidden">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="O que você procura?"
              className="w-full bg-[#fff] rounded-full border border-gray-200 px-4 py-2 pl-10 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#d46d94] focus:border-transparent"
            />
          </div>
        </div>

        <nav className="hidden md:flex justify-center space-x-6 text-sm py-4">
          {categories.map((cat) => (
            <Link key={cat.path} to={cat.path} className="hover:text-[#d46d94]">
              {cat.label}
            </Link>
          ))}
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-white border-t"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <nav className="flex flex-col px-6 py-4 space-y-4">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                {categories.map((cat) => (
                  <Link key={cat.path} to={cat.path} onClick={() => setIsMenuOpen(false)}>
                    {cat.label}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col px-6 pb-6 space-y-4 border-t pt-4">
                <Link
                  to="/sac"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2"
                >
                  <Headphones className="w-5 h-5" />
                  <span>SAC</span>
                </Link>
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2"
                >
                  <User className="w-5 h-5" />
                  <span>Entrar</span>
                </Link>
                <Link
                  to="/carrinho"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Carrinho</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
