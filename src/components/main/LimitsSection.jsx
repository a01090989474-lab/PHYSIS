import { useRef, useEffect, useState } from "react";
import "./LimitsSection.scss";

const limits = [
  {
    id: 1,
    label: "드립 손실",
    hoverText:
      "해동 시 빠져나가는 5~10% 중량 손실로 풍미와 식감, 상품성까지 함께 떨어집니다. ",
    image: "/images/main_con1_01.png",
  },
  {
    id: 2,
    label: "동결 속도 한계",
    hoverText:
      "중심부까지 얼리는 데 수 시간이 소요되어 처리량과 생산성이 한계에 부딪힙니다.",
    image: "/images/main_con1_02.png",
  },
  {
    id: 3,
    label: "높은 운영 비용",
    hoverText:
      "액체질소·프레온 냉매는 지속적인 비용이 발생하고 공급 차질 시 생산 중단 리스크가 따릅니다.",
    image: "/images/main_con1_03.png",
  },
  {
    id: 4,
    label: "환경 규제 부담",
    hoverText:
      "프레온 계열 냉매는 단계적으로 퇴출되며, 수출 거래처와 대형 유통사는 친환경 인증을 요구하고 있습니다.",
    image: "/images/main_con1_04.png",
  },
];

const solutions = [
  {
    label: "미세 결정 동결",
    desc: "-21.3℃ 침지로 세포 손상 없이 드립 손실 ≈0%",
  },
  {
    label: "100배 빠른 침지 동결",
    desc: "고염도 슬러쉬 침지로 처리량 한계 해소",
  },
  {
    label: "소금 기반 무공해 냉매",
    desc: "NaCI 기반 재활용 구조로 원재료 소모 ≈ 0%",
  },
  {
    label: "액체질소•프레온 미사용",
    desc: "친환경 인증과 글로법 수출 경쟁력 동시 확보",
  },
];

export default function LimitsSection() {
  const gridRef = useRef(null);
  const solutionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [solutionVisible, setSolutionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSolutionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (solutionRef.current) observer.observe(solutionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="limits">
      <div className="limits__header">
        <h2 className="limits__title">기존 냉동의 한계</h2>
        <p className="limits__subtitle">The limits of conventional freezing</p>
      </div>

      <div className="limits__grid" ref={gridRef}>
        {limits.map((item, idx) => (
          <div
            key={item.id}
            className={`limits__card limits__card--${idx % 2 === 0 ? "up" : "down"}${visible ? " limits__card--visible" : ""}`}
            style={{ "--delay": `${idx * 0.15}s` }}
          >
            <img
              className="limits__card-img"
              src={item.image}
              alt={item.label}
            />
            <div className="limits__card-overlay">
              <div className="limits__card-default">
                <p className="limits__card-label">{item.label}</p>
              </div>
              <div className="limits__card-hover">
                <p className="limits__card-desc">{item.hoverText}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`limits__solution${solutionVisible ? " limits__solution--visible" : ""}`}
        ref={solutionRef}
      >
        <p className="limits__solution-label">SOLUTION</p>
        <h3 className="limits__solution-title">
          Physis는 모든 한계를 설계합니다
        </h3>
        <p className="limits__solution-sub">
          Physis redesigned every one of those limits.
        </p>
        <div className="limits__solution-grid">
          {solutions.map((s, idx) => (
            <div key={idx} className="limits__solution-item">
              <p className="limits__solution-item-number">
                SOLUTION {String(idx + 1).padStart(2, "0")}
              </p>
              <p className="limits__solution-item-label">{s.label}</p>
              <p className="limits__solution-item-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
