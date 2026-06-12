import "./KurabanExPillars.scss";

const pillars = [
  {
    number: "01",
    label: "LOSS",
    title: "손실 없는 정육 수율",
    desc: "Wet Aging 방식이라 수분 손실이 거의 없습니다. Dry Aging의 표면 건조·절단 손실 없이 정육 수율을 그대로 유지하며 부가가치만 더합니다.",
    stat: {
      label: "YIELD",
      value: "≈ 100%",
      caption: "정육 수율 유지 (Dry Aging 대비)",
    },
  },
  {
    number: "02",
    label: "SAFETY & UMAMI",
    title: "위생과 풍미를 동시에",
    desc: "전기장이 부패균 증식을 대폭 억제해 일반 냉장·빙온 대비 안전한 장기 숙성이 가능합니다. 동시에 글루탐산이 증가해 감칠맛도 깊어집니다.",
    stat: {
      label: "PERIOD",
      value: "1~4주",
      caption: "장기 숙성 + 글루탐산 ↑",
    },
  },
  {
    number: "03",
    label: "ENERGY",
    title: "절반의 운영 전력",
    desc: "정밀 온도 제어가 필요한 빙온고는 일반 냉장고의 약 2배 전력을 쓰지만, 창고형 Kuraban은 일반 냉장고 수준으로 장기 운영 비용을 크게 절감합니다.",
    stat: {
      label: "POWER",
      value: "≈ 1/2",
      caption: "일반 빙온고 대비 전력 소비",
    },
  },
];

export default function KurabanExPillars() {
  return (
    <section className="kex-pillars">
      <div className="kex-pillars__inner">
        <div className="kex-pillars__head">
          <p className="kex-pillars__label">THREE PILLARS</p>
          <h2 className="kex-pillars__title">
            창고형 Kuraban이 만드는
            <br />
            세 가지 본질적 가치
          </h2>
          <p className="kex-pillars__sub">
            Loss-free, long-term safe, and energy-efficient aging.
          </p>
        </div>

        <div className="kex-pillars__list">
          {pillars.map((pillar) => (
            <div className="pillar-row" key={pillar.number}>
              <span className="pillar-row__number">{pillar.number}</span>
              <div className="pillar-row__content">
                <p className="pillar-row__label">{pillar.label}</p>
                <h3 className="pillar-row__title">{pillar.title}</h3>
                <p className="pillar-row__desc">{pillar.desc}</p>
              </div>
              <div className="pillar-row__stat">
                <p className="pillar-row__stat-label">{pillar.stat.label}</p>
                <p className="pillar-row__stat-value">{pillar.stat.value}</p>
                <p className="pillar-row__stat-caption">
                  {pillar.stat.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
