import { useEffect, useState } from "react";
import "./AboutHero.scss";

export default function AboutHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className={`about-hero${visible ? " about-hero--visible" : ""}`}>
      <div className="about-hero__inner">
        <div className="about-hero__text">
          <p className="about-hero__label">ABOUT PHYSIS</p>
          <h1 className="about-hero__title">
            신선함의 기준을<br />다시 세우는 사람들
          </h1>
          <p className="about-hero__desc">
            PHYSIS는 혁신적인 냉동·냉장 기술로 전 세계에<br />신선하고 안전한 식품을 전합니다.
          </p>
        </div>
        <div className="about-hero__image">
          <img src="/images/logo.png" alt="PHYSIS 로고" />
        </div>
      </div>
    </section>
  );
}
