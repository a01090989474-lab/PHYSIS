import { Children, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductPage.scss";

// ── Shared helpers ────────────────────────────────────
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

// 컨테이너가 보이면 아이템을 일정 간격(step)을 두고 하나씩 순서대로 등장시킨다
function useStaggerReveal(count, { step = 0.18, threshold = 0.15 } = {}) {
  const [ref, visible] = useReveal(threshold);
  const [revealed, setRevealed] = useState(() => Array(count).fill(false));

  useEffect(() => {
    if (!visible) return;
    const timers = Array.from({ length: count }, (_, i) =>
      setTimeout(() => {
        setRevealed((prev) => {
          if (prev[i]) return prev;
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, i * step * 1000),
    );
    return () => timers.forEach(clearTimeout);
  }, [visible, count, step]);

  return [ref, visible, revealed];
}

// JSX 노드를 <br/> 기준으로 줄 단위 배열로 분리 (순차 등장 애니메이션용)
function splitLines(node) {
  const children = node && node.props ? node.props.children : node;
  const lines = [[]];
  Children.forEach(children, (child) => {
    if (child && child.type === "br") {
      lines.push([]);
    } else if (child !== null && child !== undefined) {
      lines[lines.length - 1].push(child);
    }
  });
  return lines;
}

// ── Hero ──────────────────────────────────────────────
function HeroSection({ hero }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      className={`product-hero${hero.theme === "dark" ? " product-hero--dark" : ""}${visible ? " product-hero--visible" : ""}`}
    >
      <div className="product-hero__media">
        {hero.image && (
          <img
            className="product-hero__image"
            src={hero.image}
            alt={hero.title}
          />
        )}
        <div className="product-hero__gradient" />
      </div>
      <div className="product-hero__content">
        <h1 className="product-hero__title">{hero.title}</h1>
        {hero.eyebrow && (
          <p className="product-hero__eyebrow">{hero.eyebrow}</p>
        )}
        {hero.subtitle && (
          <p className="product-hero__subtitle">{hero.subtitle}</p>
        )}
        {hero.desc && <p className="product-hero__desc">{hero.desc}</p>}
      </div>
    </section>
  );
}

// ── Intro ─────────────────────────────────────────────
function IntroSection({ intro }) {
  const [ref, visible] = useReveal(0.2);
  const subtitleLines = intro.subtitle ? splitLines(intro.subtitle) : [];

  const renderSubtitleLines = () =>
    subtitleLines.map((line, i) =>
      line.length === 0 ? (
        <br key={i} />
      ) : (
        <span
          key={i}
          className={`product-intro__line${visible ? " product-intro__line--visible" : ""}`}
          style={{ "--delay": `${i * 0.15}s` }}
        >
          {line}
        </span>
      ),
    );

  return (
    <section className="product-intro" ref={ref}>
      <div className="product-intro__inner">
        <div
          className={`product-intro__head${visible ? " product-intro__head--visible" : ""}`}
        >
          <p className="product-intro__label">{intro.title}</p>
          {intro.caption && (
            <p className="product-intro__caption">{intro.caption}</p>
          )}
          {intro.subtitle && !intro.subtitleLarge && (
            <p className="product-intro__sublabel">{renderSubtitleLines()}</p>
          )}
        </div>
        <div className="product-intro__body">
          {intro.subtitle && intro.subtitleLarge && (
            <p className="product-intro__sublabel product-intro__sublabel--large">
              {renderSubtitleLines()}
            </p>
          )}
          {intro.highlight && (
            <span className="product-intro__highlight">{intro.highlight}</span>
          )}
          {intro.desc}
        </div>
      </div>
    </section>
  );
}

// ── Features ──────────────────────────────────────────
function FeaturesSection({ features }) {
  const [ref, visible, revealed] = useStaggerReveal(features.items.length, {
    step: 0.2,
  });

  return (
    <section className="product-features" ref={ref}>
      <div className="product-features__inner">
        {features.title && (
          <div
            className={`product-features__head${visible ? " product-features__head--visible" : ""}`}
          >
            <h2 className="product-features__title">{features.title}</h2>
            <p className="product-features__label">{features.subtitle}</p>
          </div>
        )}
        <ul className="product-features__grid">
          {features.items.map((item, i) => (
            <li
              key={i}
              className={`feature-card${revealed[i] ? " feature-card--visible" : ""}`}
            >
              <span className="feature-card__number">{item.number}</span>
              {item.image && (
                <img
                  className="feature-card__image"
                  src={item.image}
                  alt={item.title}
                />
              )}
              {item.subtitle && (
                <p className="feature-card__subtitle">{item.subtitle}</p>
              )}
              <p className="feature-card__title">{item.title}</p>
              <p className="feature-card__desc">{item.desc}</p>
              {item.chip && (
                <span className="feature-card__chip">{item.chip}</span>
              )}
              {item.link && (
                <a className="feature-card__link" href={item.link}>
                  자세히 보기
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ── Tech ──────────────────────────────────────────────
function TechSection({ tech }) {
  const [ref, visible] = useReveal();

  return (
    <section className="product-tech" ref={ref}>
      <div className="product-tech__inner">
        <div
          className={`product-tech__col${visible ? " product-tech__col--visible" : ""}`}
        >
          <p className="product-tech__name">{tech.name}</p>
        </div>
        <div
          className={`product-tech__col product-tech__col--right${visible ? " product-tech__col--visible" : ""}`}
        >
          <p
            className="product-tech__desc"
            dangerouslySetInnerHTML={{ __html: tech.desc }}
          />
        </div>
      </div>
    </section>
  );
}

// 각 아이템이 자신의 스크롤 위치에서 충분히 들어왔을 때 개별적으로 등장
function BenefitStep({ item, onImageClick }) {
  const [ref, visible] = useReveal(0.35);

  return (
    <li
      ref={ref}
      className={`benefit-step${visible ? " benefit-step--visible" : ""}`}
    >
      <div className="benefit-step__rail">
        <span className="benefit-step__number">{item.number}</span>
      </div>
      <div className="benefit-step__content">
        <div className="benefit-step__body">
          {item.subtitle && (
            <p className="benefit-step__subtitle">{item.subtitle}</p>
          )}
          <h3 className="benefit-step__title">{item.title}</h3>
          <p className="benefit-step__desc">{item.desc}</p>
          {item.chip && (
            <span className="benefit-step__chip">{item.chip}</span>
          )}
        </div>
        {item.image && (
          <button
            type="button"
            className="benefit-step__image-btn"
            onClick={() => onImageClick(item.image)}
            aria-label={`${item.title} 이미지 크게 보기`}
          >
            <img
              className="benefit-step__image"
              src={item.image}
              alt={item.title}
            />
          </button>
        )}
      </div>
    </li>
  );
}

// ── Benefits ──────────────────────────────────────────
function BenefitsSection({ benefits }) {
  const [ref, visible] = useReveal();
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <section className="product-benefits" ref={ref}>
      <div className="product-benefits__inner">
        {benefits.title && (
          <div
            className={`product-benefits__head${visible ? " product-benefits__head--visible" : ""}`}
          >
            <h2 className="product-benefits__title">{benefits.title}</h2>
            <p className="product-benefits__label">{benefits.subtitle}</p>
          </div>
        )}
        <ul className="product-benefits__timeline">
          {benefits.items.map((item, i) => (
            <BenefitStep key={i} item={item} onImageClick={setLightboxImage} />
          ))}
        </ul>
      </div>

      {lightboxImage && (
        <div
          className="benefit-lightbox"
          onClick={() => setLightboxImage(null)}
        >
          <button
            type="button"
            className="benefit-lightbox__close"
            onClick={() => setLightboxImage(null)}
            aria-label="닫기"
          >
            ×
          </button>
          <img className="benefit-lightbox__image" src={lightboxImage} alt="" />
        </div>
      )}
    </section>
  );
}

// ── Global Partnerships ───────────────────────────────
function GlobalSection({ global }) {
  const [ref, visible, revealed] = useStaggerReveal(global.partners.length, {
    step: 0.18,
  });

  return (
    <section className="product-global" ref={ref}>
      <div className="product-global__inner">
        <div
          className={`product-global__head${visible ? " product-global__head--visible" : ""}`}
        >
          <h2 className="product-global__title">{global.title}</h2>
          <p className="product-global__subtitle">{global.subtitle}</p>
        </div>
        <div
          className={`product-global__stat${visible ? " product-global__stat--visible" : ""}`}
        >
          <p className="product-global__stat-label">{global.stat.label}</p>
          <p className="product-global__stat-value">{global.stat.value}</p>
          <p className="product-global__stat-desc">{global.stat.desc}</p>
          <div className="product-global__breakdown">
            {global.stat.breakdown.map((item, i) => (
              <div key={i} className="product-global__breakdown-item">
                <p className="product-global__breakdown-value">{item.value}</p>
                <p className="product-global__breakdown-label">{item.label}</p>
                <p className="product-global__breakdown-sublabel">
                  {item.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="product-global__partners">
          {global.partners.map((item, i) => {
            const Wrapper = item.path ? Link : "div";
            const wrapperProps = item.path ? { to: item.path } : {};
            return (
              <Wrapper
                key={i}
                className={`partner-card${item.path ? " partner-card--link" : ""}${revealed[i] ? " partner-card--visible" : ""}`}
                {...wrapperProps}
              >
                <img
                  className="partner-card__logo"
                  src={item.logo}
                  alt={item.name}
                />
                <div className="partner-card__content">
                  <p className="partner-card__label">{item.label}</p>
                  <p className="partner-card__name">{item.name}</p>
                  <p
                    className="partner-card__desc"
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Models ────────────────────────────────────────────
function ModelsSection({ models }) {
  const [ref, visible, revealed] = useStaggerReveal(models.items.length, {
    step: 0.2,
  });

  return (
    <section className="product-models" ref={ref}>
      <div className="product-models__inner">
        <div
          className={`product-models__head${visible ? " product-models__head--visible" : ""}`}
        >
          <h2 className="product-models__title">{models.title}</h2>
          {models.subtitle && (
            <p className="product-models__sub">{models.subtitle}</p>
          )}
        </div>
        <ul className="product-models__grid">
          {models.items.map((item, i) => (
            <li
              key={i}
              className={`model-card${item.featured ? " model-card--featured" : ""}${revealed[i] ? " model-card--visible" : ""}`}
            >
              {item.featured && (
                <span className="model-card__badge">가장 많이 팔린 모델</span>
              )}
              <p className="model-card__series">{item.series}</p>
              <p className="model-card__name">{item.name}</p>
              <hr className="model-card__divider" />
              <p className="model-card__capacity-label">
                {models.capacityLabel ?? "PROCESSING CAPACITY"}
              </p>
              <div className="model-card__capacity-row">
                <span className="model-card__capacity">{item.capacity}</span>
                <span className="model-card__capacity-unit">{item.unit}</span>
              </div>
              {item.desc && (
                <p
                  className="model-card__desc"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
              )}
              {item.specs && (
                <ul className="model-card__specs">
                  {item.specs.map((spec, j) => (
                    <li key={j} className="model-card__spec-row">
                      <span className="model-card__spec-label">
                        {spec.label}
                      </span>
                      <span className="model-card__spec-value">
                        {spec.value}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              <Link to="/contact" className="model-card__cta">
                문의하기
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ── Applications ──────────────────────────────────────
function ApplicationsSection({ applications }) {
  const [ref, visible, revealed] = useStaggerReveal(
    applications.items.length,
    { step: 0.2 },
  );

  return (
    <section className="product-applications" ref={ref}>
      <div className="product-applications__inner">
        <div
          className={`product-applications__head${visible ? " product-applications__head--visible" : ""}`}
        >
          <h2 className="product-applications__title">{applications.title}</h2>
          <p className="product-applications__label">{applications.subtitle}</p>
        </div>
        <ul className="product-applications__grid">
          {applications.items.map((item, i) => (
            <li
              key={i}
              className={`app-card${revealed[i] ? " app-card--visible" : ""}`}
            >
              <div className="app-card__image-wrap">
                {item.image ? (
                  <img
                    className="app-card__image"
                    src={item.image}
                    alt={item.title}
                  />
                ) : (
                  <div className="app-card__image app-card__image--empty" />
                )}
              </div>
              <div className="app-card__body">
                {item.category && (
                  <p className="app-card__category">{item.category}</p>
                )}
                <p className="app-card__title">{item.title}</p>
                {item.desc && <p className="app-card__desc">{item.desc}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ── Cross Promo ───────────────────────────────────────
function CrossPromoSection({ crosspromo }) {
  const [ref, visible] = useReveal();

  return (
    <section className="product-crosspromo" ref={ref}>
      <div className="product-crosspromo__inner">
        <div
          className={`product-crosspromo__head${visible ? " product-crosspromo__head--visible" : ""}`}
        >
          <h2 className="product-crosspromo__title">{crosspromo.title}</h2>
          {crosspromo.subtitle && (
            <p className="product-crosspromo__subtitle">
              {crosspromo.subtitle}
            </p>
          )}
        </div>
        <ul
          className={`product-crosspromo__grid${visible ? " product-crosspromo__grid--visible" : ""}`}
        >
          {crosspromo.items.map((item, i) => (
            <li key={i}>
              <Link to={item.path} className="promo-card">
                {item.image && (
                  <img
                    className="promo-card__image"
                    src={item.image}
                    alt={item.name}
                  />
                )}
                <div className="promo-card__content">
                  <div>
                    <p className="promo-card__tname">{item.tname}</p>
                    <p className="promo-card__name">{item.name}</p>
                    <p className="promo-card__desc">{item.desc}</p>
                  </div>
                  <span className="promo-card__arrow">→</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ── ProductPage (조합) ────────────────────────────────
export default function ProductPage({ data }) {
  return (
    <>
      {data.hero && <HeroSection hero={data.hero} />}
      {data.intro && <IntroSection intro={data.intro} />}
      {data.benefits && <BenefitsSection benefits={data.benefits} />}
      {data.tech && <TechSection tech={data.tech} />}
      {data.features && <FeaturesSection features={data.features} />}
      {data.global && <GlobalSection global={data.global} />}
      {data.models && <ModelsSection models={data.models} />}
      {data.applications && (
        <ApplicationsSection applications={data.applications} />
      )}
      {data.crosspromo && <CrossPromoSection crosspromo={data.crosspromo} />}
    </>
  );
}
