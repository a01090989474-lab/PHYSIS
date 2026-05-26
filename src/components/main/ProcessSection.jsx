import { useRef, useEffect, useState } from "react";
import "./ProcessSection.scss";

const steps = [
  {
    id: 1,
    sub: "CUSTOMIZE",
    title: "현장 맞춤 설계",
    desc: "사업장 규모·동결 대상·공간에 맞춰 설계합니다.",
    img: "images/main_con3_01.png",
  },
  {
    id: 2,
    sub: "INSPECT",
    title: "현장 점검",
    desc: "도면이 아니라 현장에서 시작합니다. 사전 실측과 시뮬레이션으로 시행착오를 줄입니다.",
    img: "images/main_con3_02.png",
  },
  {
    id: 3,
    sub: "MAINTENANCE",
    title: "한·일 24/7 대응",
    desc: "한국 본사와 일본 MARS 엔지니어가 24시간 대응합니다",
    img: "images/main_con3_03.png",
  },
  {
    id: 4,
    sub: "MATERIALS",
    title: "소금 기반 무공해 냉매",
    desc: "액체질소·프레온이 아닌 NaCI 기반염수로 환경 부담과 운영비를 감소합니다.",
    img: "images/main_con3_04.png",
  },
];

export default function ProcessSection() {
  const gridRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="process">
      <div className="process__inner">
        <div className="process__header">
          <h2 className="process__title">설계부터 운영까지</h2>
          <p className="process__subtitle">From production to operation</p>
        </div>
        <div className="process__grid" ref={gridRef}>
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className={`process__item${visible ? " process__item--visible" : ""}`}
              style={{ "--delay": `${idx * 0.15}s` }}
            >
              <div className="process__item-img">
                <img src={step.img} alt={step.title} />
              </div>
              <p className="process__item-sub">{step.sub}</p>
              <p className="process__item-title">{step.title}</p>
              <p className="process__item-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
