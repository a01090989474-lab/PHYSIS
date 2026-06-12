import { Link } from "react-router-dom";
import "./ContactHero.scss";

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero__inner">
        <p className="contact-hero__breadcrumb">
          <Link to="/">Home</Link>
          <span>›</span>
          <strong>Contact</strong>
        </p>
        <p className="contact-hero__label">CONTACT</p>
        <h1 className="contact-hero__title">언제든 편하게 연락 주세요</h1>
        <p className="contact-hero__desc">
          콜드체인 솔루션 도입 상담부터 기술 문의까지, 담당자가 빠르게
          안내해드립니다.
        </p>
      </div>
    </section>
  );
}
