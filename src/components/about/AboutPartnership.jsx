import "./AboutPartnership.scss";

const features = [
  {
    tag: "JOINT RESEARCH",
    title: "3개 대학 공동연구",
    desc: "도쿄 대학·미야기 대학·가타히 공업 대학과 비열에너지 공동 연구",
  },
  {
    tag: "PATENTS",
    title: "비열에너지 핵심 특허",
    desc: "정전장 처리 정치방법 등 한일·미주·EU 다수 특허 보유",
  },
  {
    tag: "NETWORK",
    title: "글로벌 거래 네트워크",
    desc: "스미토모 상사 등 일본 주요 기업과의 거래 협력 관계",
  },
];

const trademarks = [
  { num: "제 30류", desc: "식품·식육 절임·조리품" },
  { num: "제 7·11류", desc: "기계·냉동·냉장 설비" },
  { num: "제 37류", desc: "설치·수리·서비스" },
];

export default function AboutPartnership() {
  return (
    <section className="about-partner">
      <div className="about-partner__inner">
        <p className="about-partner__eyebrow">WITH US — GLOBAL PARTNERSHIP</p>
        <h2 className="about-partner__title">세계적 기술 파트너와 함께합니다</h2>
        <p className="about-partner__subtitle">Built on world-class research partnerships.</p>

        <div className="about-partner__mars">
          <div className="about-partner__mars-logo">
            <span>MARS Company<br />로고</span>
          </div>
          <div className="about-partner__mars-info">
            <p className="about-partner__mars-tag">CORE TECHNOLOGY PARTNER</p>
            <h3 className="about-partner__mars-name">MARS Company<br />마즈컴퍼니</h3>
            <p className="about-partner__mars-desc">
              2006년 설립된 일본 근마현 기반의 냉동·냉장 솔루션 전문 기업. 비열에너지 연구개발과 냉동·냉장·해빙·제빙 장치의 정치를 제조를 전문으로 합니다.
            </p>
            <div className="about-partner__mars-meta">
              <p><strong>설립</strong> 2006년, 일본 군마현 다카사키시</p>
              <p><strong>전문 분야</strong> 비열에너지 R&amp;D · 냉동·냉장 설비 설계 · 신지 유통 네트워크</p>
            </div>
          </div>
        </div>

        <div className="about-partner__features">
          {features.map((f) => (
            <div key={f.tag} className="about-partner__feature">
              <p className="about-partner__feature-tag">{f.tag}</p>
              <p className="about-partner__feature-title">{f.title}</p>
              <p className="about-partner__feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="about-partner__trademarks">
          <div className="about-partner__tm-header">
            <p className="about-partner__tm-label">REGISTERED TRADEMARKS</p>
            <h3 className="about-partner__tm-title">등록상표 보유 — 식품·기계·설치 전 영역</h3>
            <p className="about-partner__tm-note">글로벌아이엔 등록상표 완전 목록</p>
          </div>
          <div className="about-partner__tm-grid">
            {trademarks.map((t) => (
              <div key={t.num} className="about-partner__tm-card">
                <div className="about-partner__tm-img">
                  <span>등록상표<br />샘플</span>
                </div>
                <p className="about-partner__tm-num">{t.num}</p>
                <p className="about-partner__tm-desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
