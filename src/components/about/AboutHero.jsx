import "./AboutHero.scss";

export default function AboutHero() {
  return (
    <section className="about-hero">
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
          <span>대표이사 사진<br />(와이드 — 21:9)</span>
        </div>
      </div>
    </section>
  );
}
