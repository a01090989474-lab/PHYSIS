import "./KurabanExHero.scss";

export default function KurabanExHero() {
  return (
    <section className="kex-hero">
      <div className="kex-hero__media">
        <img
          className="kex-hero__image"
          src="/images/kurabanEx/kurabanEx_hero.png"
          alt="쿠라반 활용 사례"
        />
        <div className="kex-hero__gradient" />
      </div>
      <div className="kex-hero__content">
        <p className="kex-hero__eyebrow">WET AGING SOLUTION</p>
        <h1 className="kex-hero__title">창고형 KURABAN</h1>
        <p className="kex-hero__sub">
          Wet Aging으로 만드는
          <br />
          부가가치
        </p>
        <p className="kex-hero__desc">
          창고형 Kuraban이 실현하는
          <br />
          손실 없는 숙성 솔루션.
        </p>
        <div className="kex-hero__about">
          <p className="kex-hero__about-label">ABOUT</p>
          <p className="kex-hero__about-desc">
            비열 전기장(N-Te-Fe) 기술로{" "}
            <strong>−2°C에서 안전하게 1~4주 장기 숙성</strong>. 손실 없이
            부가가치만 더하는 차세대 Wet Aging 시스템입니다.
          </p>
        </div>
      </div>
    </section>
  );
}
