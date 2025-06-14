import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products as allProducts } from "../data/products";
import type { Product } from "../data/products";
import { Button } from "@/components/ui/button";

const categories = [
  { label: "Novidades", filter: { q: "novidades" } },
  { label: "Lençóis", filter: { category: "lencois" } },
  { label: "Fronhas", filter: { category: "fronhas" } },
  { label: "Conjuntos", filter: { category: "conjuntos" } },
  { label: "Promoções", filter: { q: "promocoes" } },
  { label: "Todos os Produtos", filter: {} },
];

export default function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const query = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";

  // Estado temporário dos filtros
  const [selectedFilter, setSelectedFilter] = useState<{
    q?: string;
    category?: string;
  }>({
    q: query || undefined,
    category: category || undefined,
  });

  const currentCategory = categories.find((cat) => {
    return (
      ("category" in cat.filter && cat.filter.category === category) ||
      ("q" in cat.filter && cat.filter.q === query) ||
      (Object.keys(cat.filter).length === 0 && !query && !category)
    );
  });

  // Verifica se há alterações nos filtros
  const hasChanges = useMemo(() => {
    return (
      selectedFilter.q !== (query || undefined) ||
      selectedFilter.category !== (category || undefined)
    );
  }, [selectedFilter, query, category]);

  useEffect(() => {
    setLoading(true);

    const filtered = allProducts.filter((product) => {
      const matchCategory = category ? product.category === category : true;
      const matchQuery = query
        ? product.name.toLowerCase().includes(query.toLowerCase())
        : true;
      return matchCategory && matchQuery;
    });

    setTimeout(() => {
      setProducts(filtered);
      setLoading(false);
    }, 300);
  }, [query, category]);

  const applyFilters = () => {
    const params = new URLSearchParams();
    if (selectedFilter.category) {
      params.set("category", selectedFilter.category);
    }
    if (selectedFilter.q) {
      params.set("q", selectedFilter.q);
    }
    setSearchParams(params);
    setShowMobileFilters(false);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSelectedFilter({});
  };

  const Filters = (
    <div className="space-y-6">
      {/* Filtros de categoria */}
      <div>
        <p className="text-xs font-semibold text-[#d46d94] mb-2">CATEGORIAS</p>
        <div className="space-y-2 text-sm">
          {categories.map((cat) => {
            const isActive =
              ("category" in cat.filter &&
                selectedFilter.category === cat.filter.category) ||
              ("q" in cat.filter && selectedFilter.q === cat.filter.q) ||
              (Object.keys(cat.filter).length === 0 &&
                !selectedFilter.q &&
                !selectedFilter.category);

            return (
              <label
                key={cat.label}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  checked={isActive}
                  onChange={() => {
                    if ("category" in cat.filter) {
                      setSelectedFilter({ category: cat.filter.category });
                    } else if ("q" in cat.filter) {
                      setSelectedFilter({ q: cat.filter.q });
                    } else {
                      setSelectedFilter({});
                    }
                  }}
                />
                {cat.label}
              </label>
            );
          })}
        </div>
      </div>

      {/* Preço (mock) */}
      <div>
        <p className="text-xs font-semibold text-[#d46d94] mb-2">PREÇO</p>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" disabled /> {/* Placeholder visual */}
            Até R$ 130,00
          </label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-10 flex gap-8">
      <aside className="w-[220px] hidden md:block">
        <p className="font-semibold mb-4">FILTRAR MAIS</p>
        {Filters}
        <div className="space-y-2 pt-4">
          <button
            disabled={!hasChanges}
            className={`w-full py-2 rounded-full text-sm font-semibold ${
              hasChanges
                ? "bg-[#d46d94] text-white hover:bg-[#bb5f83]"
                : "bg-[#f5c9d6] text-white cursor-not-allowed"
            }`}
            onClick={applyFilters}
          >
            FILTRAR
          </button>
          <button
            onClick={clearFilters}
            className="bg-[#fdf5f7] border hover:bg-gray-100 w-full py-2 rounded-full text-sm font-semibold"
          >
            LIMPAR FILTROS
          </button>
        </div>
      </aside>

      <div className="flex-1">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">
            {currentCategory?.label || "Todos os Produtos"}
          </h1>
          <button
            onClick={() => setShowMobileFilters(true)}
            className="md:hidden border px-4 py-2 rounded-full text-sm hover:bg-gray-100"
          >
            Filtrar
          </button>
        </div>

        {loading ? (
          <p>Carregando produtos...</p>
        ) : products.length === 0 ? (
          <p>Nenhum produto encontrado.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link key={product.id} to={`/produto/${product.slug}`}>
                <div className="border rounded-xl overflow-hidden hover:shadow-md transition">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-sm font-semibold line-clamp-2">
                      {product.name}
                    </h2>
                    <p className="text-[#d46d94] font-medium mt-2">
                      R$ {product.price.toFixed(2).replace(".", ",")}
                    </p>
                    <p className="text-[12px] text-gray-500">
                      ou 3x de R${" "}
                      {(product.price / 3).toFixed(2).replace(".", ",")} sem
                      juros
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Drawer Mobile */}
      <AnimatePresence>
        {showMobileFilters && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-50"
              onClick={() => setShowMobileFilters(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-[280px] bg-white z-50 shadow-xl flex flex-col p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-4">
                <p className="font-semibold">Filtrar</p>
                <button onClick={() => setShowMobileFilters(false)}>✕</button>
              </div>

              <div className="flex-1 overflow-y-auto">{Filters}</div>

              <div className="space-y-2 pt-4 border-t">
                <div className="space-y-2 pt-4 border-t">
                  <Button
                    onClick={applyFilters}
                    disabled={!hasChanges}
                    className="w-full cursor-pointer"
                  >
                    Filtrar
                  </Button>

                  <Button
                    onClick={clearFilters}
                    variant="outline"
                    className="w-full cursor-pointer"
                  >
                    Limpar Filtros
                  </Button>

                  <Button
                    onClick={() => setShowMobileFilters(true)}
                    variant="outline"
                    className="w-full md:hidden cursor-pointer"
                  >
                    Filtrar
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
