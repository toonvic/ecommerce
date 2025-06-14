import HeroBanner from '@/components/HeroBanner';
import InfoBar from '@/components/InfoBar';
import ProductSection from '@/components/ProductSection';
import VideoSection from '@/components/VideoSection';
import { products } from '@/data/products';

export default function Home() {
  const getProductsBy = (filter: { category?: string; q?: string }) => {
    return products.filter((p) => {
      const matchCategory = filter.category ? p.category === filter.category : true;
      const matchQuery = filter.q
        ? p.name.toLowerCase().includes(filter.q.toLowerCase())
        : true;
      return matchCategory && matchQuery;
    });
  };

  const renderSection = (title: string, filter: { category?: string; q?: string }) => {
    const filtered = getProductsBy(filter);
    return (
      filtered.length > 0 && (
        <ProductSection title={title} products={filtered} />
      )
    );
  };

  return (
    <div>
      <HeroBanner />
      <InfoBar />

      {/* Seções */}
      {renderSection('Novidades', { q: 'novidade' })}
      {renderSection('Mais Vendidos', { q: 'vendido' })}
      {renderSection('Lençóis', { category: 'lencois' })}
      {renderSection('Fronhas', { category: 'fronhas' })}
      {renderSection('Conjuntos', { category: 'conjuntos' })}
      {renderSection('Promoções', { q: 'promoção' })}

      <VideoSection />
    </div>
  );
}
