import { useEffect, useRef, useState } from "react";
import "./AboutMission.scss";

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

const cards = [
  {
    tag: "THE NAME",
    icon: "🌿",
    title: "PHYSIS",
    desc: "사명은 그리스어로 '자연'을 뜻합니다. 자연 친화적인 환경을 유지하며 사업하겠다는 철학을 담았습니다.",
  },
  {
    tag: "THE SYMBOL",
    icon: "🧊",
    title: "빙산",
    desc: "로고는 빙산을 형상화했습니다. 보이는 것보다 보이지 않는 것에 더 많은 가치가 있다는 의미를 담았습니다.",
  },
];

export default function AboutMission() {
  const [ref, visible] = useReveal();

  return (
    <section className="about-mission" ref={ref}>
      <div className="about-mission__inner">
        <div
          className={`about-mission__head${visible ? " about-mission__head--visible" : ""}`}
        >
          <p className="about-mission__label">MISSION &amp; IDENTITY</p>
          <h2 className="about-mission__title">PHYSIS의 비전</h2>
        </div>

        <div
          className={`about-mission__banner${visible ? " about-mission__banner--visible" : ""}`}
        >
          <p className="about-mission__banner-text">
            최신 기술과 데이터를 바탕으로 끊임없이 연구하고 혁신하여,
            <br />
            <strong>냉동·냉장 산업의 기준을 세우는 글로벌 리더</strong>가
            되겠습니다.
          </p>
        </div>

        <div
          className={`about-mission__cards${visible ? " about-mission__cards--visible" : ""}`}
        >
          {cards.map((c) => (
            <div key={c.tag} className="about-mission__card">
              <div className="about-mission__card-icon">{c.icon}</div>
              <p className="about-mission__card-tag">{c.tag}</p>
              <h3 className="about-mission__card-title">{c.title}</h3>
              <p className="about-mission__card-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
