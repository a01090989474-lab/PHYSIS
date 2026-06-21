import { useEffect, useRef, useState } from "react";
import "./AboutPartnership.scss";

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
  {
    num: "제 11류 외 2개류",
    desc: "설치·수리·서비스",
    img: "/images/about/doc01.png",
  },
  {
    num: "제 30류",
    desc: "식품·식육 절임·조리품",
    img: "/images/about/doc02.png",
  },
  {
    num: "제 37류 외 1개류",
    desc: "기계·냉동·냉장 설비",
    img: "/images/about/doc03.png",
  },
];

export default function AboutPartnership() {
  const [activeDoc, setActiveDoc] = useState(null);
  const [partnerRef, partnerVisible] = useReveal();
  const [tmRef, tmVisible] = useReveal();

  useEffect(() => {
    if (!activeDoc) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveDoc(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeDoc]);

  return (
    <>
      <section className="about-partner" ref={partnerRef}>
        <div className="about-partner__inner">
          <div
            className={`about-partner__head${partnerVisible ? " about-partner__head--visible" : ""}`}
          >
            <p className="about-partner__eyebrow">
              WITH US — GLOBAL PARTNERSHIP
            </p>
            <h2 className="about-partner__title">
              세계적 기술 파트너와 함께합니다
            </h2>
          </div>
          <p
            className={`about-partner__subtitle${partnerVisible ? " about-partner__subtitle--visible" : ""}`}
          >
            Built on world-class research partnerships.
          </p>

          <div
            className={`about-partner__mars${partnerVisible ? " about-partner__mars--visible" : ""}`}
          >
            <div className="about-partner__mars-logo">
              <img
                src="/images/kuraban/mars_logo.png"
                alt="MARS Company 로고"
              />
            </div>
            <div className="about-partner__mars-info">
              <p className="about-partner__mars-tag">CORE TECHNOLOGY PARTNER</p>
              <h3 className="about-partner__mars-name">
                MARS Company
                <br />
                마즈컴퍼니
              </h3>
              <p className="about-partner__mars-desc">
                2006년 설립된 일본 근마현 기반의 냉동·냉장 솔루션 전문 기업.
                비열에너지 연구개발과 냉동·냉장·해빙·제빙 장치의 정치를 제조를
                전문으로 합니다.
              </p>
              <div className="about-partner__mars-meta">
                <p>
                  <strong>설립</strong> 2006년, 일본 군마현 다카사키시
                </p>
                <p>
                  <strong>전문 분야</strong> 비열에너지 R&amp;D · 냉동·냉장
                  설비 설계 · 신지 유통 네트워크
                </p>
              </div>
            </div>
          </div>

          <div className="about-partner__features">
            {features.map((f, i) => (
              <div
                key={f.tag}
                className={`about-partner__feature${partnerVisible ? " about-partner__feature--visible" : ""}`}
                style={{ "--delay": `${0.9 + i * 0.15}s` }}
              >
                <p className="about-partner__feature-tag">{f.tag}</p>
                <p className="about-partner__feature-title">{f.title}</p>
                <p className="about-partner__feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-partner-tm" ref={tmRef}>
        <div className="about-partner-tm__inner">
          <div
            className={`about-partner-tm__header${tmVisible ? " about-partner-tm__header--visible" : ""}`}
          >
            <h3 className="about-partner-tm__title">
              등록상표 보유 — 식품·기계·설치 전 영역
            </h3>
            <p className="about-partner-tm__label">REGISTERED TRADEMARKS</p>
          </div>
          <div className="about-partner-tm__grid">
            {trademarks.map((t, i) => (
              <div
                key={t.num}
                className={`about-partner-tm__card${tmVisible ? " about-partner-tm__card--visible" : ""}`}
                style={{ "--delay": `${i * 0.3}s` }}
              >
                <button
                  type="button"
                  className="about-partner-tm__img"
                  onClick={() => setActiveDoc(t)}
                  aria-label={`${t.num} 등록상표 이미지 확대 보기`}
                >
                  <img src={t.img} alt={`등록상표 ${t.num}`} />
                </button>
                <p className="about-partner-tm__num">{t.num}</p>
                <p className="about-partner-tm__desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeDoc && (
        <div
          className="about-partner-tm__lightbox"
          onClick={() => setActiveDoc(null)}
        >
          <button
            type="button"
            className="about-partner-tm__lightbox-close"
            onClick={() => setActiveDoc(null)}
            aria-label="닫기"
          >
            ✕
          </button>
          <img
            key={activeDoc.num}
            src={activeDoc.img}
            alt={`등록상표 ${activeDoc.num}`}
            className="about-partner-tm__lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
