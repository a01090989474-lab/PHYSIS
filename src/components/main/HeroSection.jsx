import { Link } from "react-router-dom";
import "./HeroSection.scss";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__media">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/main_hero.png"
        />
      </div>
      <div className="hero__content">
        <h1 className="hero__temp">-21.3°C</h1>
        <p className="hero__title">신선도가 시작되는 온도</p>
        <p className="hero__desc">
          잡은 그 순간의 품질을, 식탁에 오르는 그 순간까지
        </p>
        <p className="hero__desc_en">
          From catch to table, freshness perfected. HybridIce — the pinnacle of
          rapid freezing.
        </p>
        <div className="hero__actions">
          <Link to="/contact" className="hero__btn hero__btn--primary">문의하기</Link>
          <Link to="/hybridice" className="hero__btn hero__btn--secondary">자세히 보기</Link>
        </div>
      </div>
    </section>
  );
}
