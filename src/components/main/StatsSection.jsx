import { Fragment, useRef, useEffect, useState } from "react";
import "./StatsSection.scss";

const stats = [
  {
    left: {
      from: 0,
      to: 100,
      suffix: "배",
      prefix: "",
      desc: "일반 급랭 대비 동결 속도",
    },
    right: {
      from: 0,
      to: 10,
      suffix: "개월",
      prefix: "최대",
      desc: "신선도 유지 기간",
    },
  },
  {
    left: {
      from: 100,
      to: 0,
      suffix: "%",
      prefix: "",
      desc: "냉매 원재료 소모율",
    },
    right: {
      from: 100,
      to: 0,
      suffix: "%",
      prefix: "",
      desc: "해동 시 손실율",
    },
  },
];

function StatItem({ from, to, suffix, prefix, desc, started, className }) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const startTime = performance.now();
    const diff = to - from;

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(from + diff * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [started]);

  return (
    <div className={className}>
      <p className="stats__number">
        {prefix && <span className="stats__prefix">{prefix}</span>}
        {value}
        <span className="stats__unit">{suffix}</span>
      </p>
      <p className="stats__desc">{desc}</p>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" ref={sectionRef}>
      <div className="stats__inner">
        <div className="stats__grid">
          <div className="stats__header-cell">
            <h2 className="stats__title">숫자로 증명하는 차이</h2>
            <p className="stats__subtitle">The difference, in numbers</p>
          </div>
          <div className="stats__empty-cell" />

          {stats.map(({ left, right }, i) => (
            <Fragment key={i}>
              <StatItem
                {...left}
                started={started}
                className={`stats__item${i === stats.length - 1 ? " stats__item--last" : ""}`}
              />
              <StatItem
                {...right}
                started={started}
                className={`stats__item stats__item--right${i === stats.length - 1 ? " stats__item--last" : ""}`}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
