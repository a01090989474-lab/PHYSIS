import HeroSection from "../components/main/HeroSection";
import LimitsSection from "../components/main/LimitsSection";
import ProductCard from "../components/main/ProductCard";
import StatsSection from "../components/main/StatsSection";
import ProcessSection from "../components/main/ProcessSection";
import products from "../data/products";

export default function Main() {
  return (
    <>
      <HeroSection />
      <LimitsSection />
      <div className="products-header">
        <h2 className="products-header__title">신선도의 전 과정을 함께 합니다</h2>
        <p className="products-header__subtitle">Engineering every stage of freshness</p>
      </div>
      {products.map((p) => (
        <ProductCard key={p.id} {...p} />
      ))}
      <StatsSection />
      <ProcessSection />
    </>
  );
}
