import "./AboutMission.scss";

const cards = [
  {
    tag: "THE NAME",
    title: "Physis",
    desc: "사명은 그리스어로 '자연' 을 뜻합니다. 최대한 자연 친화적인 방법을 유지하며 사업하겠다는 철학을 담았습니다.",
  },
  {
    tag: "THE SYMBOL",
    title: "결정 구조",
    desc: "로고 심볼은 원자를 형상화했습니다. 보이는 것보다 더 깊은 곳에 더 많은 가치가 있다는 의미를 담았습니다.",
  },
];

export default function AboutMission() {
  return (
    <section className="about-mission">
      <div className="about-mission__inner">
        <p className="about-mission__label">MISSION &amp; IDENTITY</p>
        <h2 className="about-mission__title">우리가 존재하는 이유</h2>
        <p className="about-mission__subtitle">Why we exist.</p>

        <div className="about-mission__banner">
          <span className="about-mission__banner-small">냉동·냉장 산업의</span>
          <span className="about-mission__banner-large">기준을 세우는 글로벌 리더</span>
        </div>

        <div className="about-mission__cards">
          {cards.map((c) => (
            <div key={c.tag} className="about-mission__card">
              <div className="about-mission__card-icon" />
              <p className="about-mission__card-tag">{c.tag}</p>
              <p className="about-mission__card-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
