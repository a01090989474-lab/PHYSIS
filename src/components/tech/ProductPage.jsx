import { Link } from "react-router-dom";
import "./ProductPage.scss";

// ── Hero ──────────────────────────────────────────────
function HeroSection({ hero }) {
  return (
    <section
      className={`product-hero${hero.theme === "dark" ? " product-hero--dark" : ""}`}
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
  return (
    <section className="product-intro">
      <div className="product-intro__inner">
        <div>
          <p className="product-intro__label">{intro.title}</p>
          {intro.caption && (
            <p className="product-intro__caption">{intro.caption}</p>
          )}
          {intro.subtitle && !intro.subtitleLarge && (
            <p className="product-intro__sublabel">{intro.subtitle}</p>
          )}
        </div>
        <div className="product-intro__body">
          {intro.subtitle && intro.subtitleLarge && (
            <p className="product-intro__sublabel product-intro__sublabel--large">
              {intro.subtitle}
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
function FeaturesSection({ features }) 
{
  return (
    <section className="product-features">
      <div className="product-features__inner">
        {features.title && (
          <div className="product-features__head">
            <h2 className="product-features__title">{features.title}</h2>
            <p className="product-features__label">{features.subtitle}</p>
          </div>
        )}
        <ul className="product-features__grid">
          {features.items.map((item, i) => (
            <li key={i} className="feature-card">
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
  return (
    <section className="product-tech">
      <div className="product-tech__inner">
        <div className="product-tech__col">
          <p className="product-tech__name">{tech.name}</p>
        </div>
        <div className="product-tech__col product-tech__col--right">
          <p
            className="product-tech__desc"
            dangerouslySetInnerHTML={{ __html: tech.desc }}
          />
        </div>
      </div>
    </section>
  );
}

// ── Benefits ──────────────────────────────────────────
function BenefitsSection({ benefits }) {
  return (
    <section className="product-benefits">
      <div className="product-benefits__inner">
        {benefits.title && (
          <div className="product-benefits__head">
            <h2 className="product-benefits__title">{benefits.title}</h2>
            <p className="product-benefits__label">{benefits.subtitle}</p>
          </div>
        )}
        <ul className="product-benefits__timeline">
          {benefits.items.map((item, i) => (
            <li key={i} className="benefit-step">
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
                  <img
                    className="benefit-step__image"
                    src={item.image}
                    alt={item.title}
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ── Global Partnerships ───────────────────────────────
function GlobalSection({ global }) {
  return (
    <section className="product-global">
      <div className="product-global__inner">
        <div className="product-global__head">
          <h2 className="product-global__title">{global.title}</h2>
          <p className="product-global__subtitle">{global.subtitle}</p>
        </div>
        <div className="product-global__stat">
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
                className={`partner-card${item.path ? " partner-card--link" : ""}`}
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
  return (
    <section className="product-models">
      <div className="product-models__inner">
        <div className="product-models__head">
          <h2 className="product-models__title">{models.title}</h2>
          {models.subtitle && (
            <p className="product-models__sub">{models.subtitle}</p>
          )}
        </div>
        <ul className="product-models__grid">
          {models.items.map((item, i) => (
            <li
              key={i}
              className={`model-card${item.featured ? " model-card--featured" : ""}`}
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
  return (
    <section className="product-applications">
      <div className="product-applications__inner">
        <div className="product-applications__head">
          <h2 className="product-applications__title">{applications.title}</h2>
          <p className="product-applications__label">{applications.subtitle}</p>
        </div>
        <ul className="product-applications__grid">
          {applications.items.map((item, i) => (
            <li key={i} className="app-card">
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
  return (
    <section className="product-crosspromo">
      <div className="product-crosspromo__inner">
        <div className="product-crosspromo__head">
          <h2 className="product-crosspromo__title">{crosspromo.title}</h2>
          {crosspromo.subtitle && (
            <p className="product-crosspromo__subtitle">
              {crosspromo.subtitle}
            </p>
          )}
        </div>
        <ul className="product-crosspromo__grid">
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
