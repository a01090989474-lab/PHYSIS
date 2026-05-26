
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductPage.scss'

// ── Hero ──────────────────────────────────────────────
function HeroSection({ hero }) {
  return (
    <section className="product-hero">
      <div className="product-hero__content">
        {hero.eyebrow && <p className="product-hero__eyebrow">{hero.eyebrow}</p>}
        <h1 className="product-hero__title">{hero.title}</h1>
        {hero.subtitle && <p className="product-hero__subtitle">{hero.subtitle}</p>}
        {hero.desc && <p className="product-hero__desc">{hero.desc}</p>}
      </div>
      {hero.image && (
        <img className="product-hero__image" src={hero.image} alt={hero.title} />
      )}
    </section>
  )
}

// ── Intro ─────────────────────────────────────────────
function IntroSection({ intro }) {
  return (
    <section className="product-intro">
      <div className="product-intro__inner">
        <div>
          <p className="product-intro__label">{intro.title}</p>
          {intro.subtitle && <p className="product-intro__sublabel">{intro.subtitle}</p>}
        </div>
        <div className="product-intro__body">
          {intro.highlight && (
            <span className="product-intro__highlight">{intro.highlight}</span>
          )}
          {intro.desc}
        </div>
      </div>
    </section>
  )
}

// ── Features ──────────────────────────────────────────
function FeaturesSection({ features }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="product-features">
      <div className="product-features__inner">
        {features.image && (
          <img className="product-features__image" src={features.image} alt="" />
        )}
        <ul className="product-features__list">
          {features.items.map((item, i) => (
            <li key={i} className="feature-item">
              <button
                className="feature-item__header"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <div className="feature-item__meta">
                  <span className="feature-item__number">{item.number}</span>
                  <div>
                    <p className="feature-item__title">{item.title}</p>
                    <p className="feature-item__subtitle">{item.subtitle}</p>
                  </div>
                </div>
                <span className={`feature-item__toggle${openIndex === i ? ' feature-item__toggle--open' : ''}`}>
                  ▼
                </span>
              </button>
              {item.desc && (
                <p className={`feature-item__body${openIndex === i ? ' feature-item__body--visible' : ''}`}>
                  {item.desc}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// ── Tech ──────────────────────────────────────────────
function TechSection({ tech }) {
  return (
    <section className="product-tech">
      <div className="product-tech__inner">
        <div>
          <p className="product-tech__name">{tech.name}</p>
          <p className="product-tech__fullname">{tech.fullname}</p>
        </div>
        <p className="product-tech__desc"
          dangerouslySetInnerHTML={{ __html: tech.desc }}
        />
      </div>
    </section>
  )
}

// ── Benefits ──────────────────────────────────────────
function BenefitsSection({ benefits }) {
  return (
    <section className="product-benefits">
      <div className="product-benefits__inner">
        <div className="product-benefits__head">
          <p className="product-benefits__label">{benefits.subtitle}</p>
          <h2 className="product-benefits__title">{benefits.title}</h2>
        </div>
        <ul className="product-benefits__grid">
          {benefits.items.map((item, i) => (
            <li key={i} className="benefit-card">
              <p className="benefit-card__number">{item.number}</p>
              {item.icon && <p className="benefit-card__icon">{item.icon}</p>}
              <p className="benefit-card__title">{item.title}</p>
              <p className="benefit-card__desc">{item.desc}</p>
              {item.link && <a className="benefit-card__link" href={item.link}>자세히 보기</a>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// ── Models ────────────────────────────────────────────
function ModelsSection({ models }) {
  return (
    <section className="product-models">
      <div className="product-models__inner">
        <div className="product-models__head">
          <h2 className="product-models__title">{models.title}</h2>
        </div>
        {models.note && <p className="product-models__note">{models.note}</p>}
        <ul className="product-models__grid">
          {models.items.map((item, i) => (
            <li key={i} className={`model-card${item.featured ? ' model-card--featured' : ''}`}>
              {item.featured && <span className="model-card__badge">추천</span>}
              <p className="model-card__series">{item.series}</p>
              <p className="model-card__name">{item.name}</p>
              <p className="model-card__capacity-label">PROCESSING CAPACITY</p>
              <p className="model-card__capacity">{item.capacity}</p>
              <p className="model-card__capacity-unit">{item.unit}</p>
              {item.specs && (
                <ul className="model-card__specs">
                  {item.specs.map((spec, j) => (
                    <li key={j}>
                      <p className="model-card__spec-label">{spec.label}</p>
                      <p className="model-card__spec-value">{spec.value}</p>
                    </li>
                  ))}
                </ul>
              )}
              <button className="model-card__cta">상담하기</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// ── Applications ──────────────────────────────────────
function ApplicationsSection({ applications }) {
  return (
    <section className="product-applications">
      <div className="product-applications__inner">
        <p className="product-applications__label">{applications.subtitle}</p>
        <h2 className="product-applications__title">{applications.title}</h2>
        <ul className="product-applications__grid">
          {applications.items.map((item, i) => (
            <li key={i} className="app-card">
              {item.image
                ? <img className="app-card__image" src={item.image} alt={item.title} />
                : <div className="app-card__image" style={{ background: '#ccc' }} />
              }
              <div className="app-card__overlay">
                {item.category && <p className="app-card__category">{item.category}</p>}
                <p className="app-card__title">{item.title}</p>
                {item.desc && <p className="app-card__desc">{item.desc}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// ── Cross Promo ───────────────────────────────────────
function CrossPromoSection({ crosspromo }) {
  return (
    <section className="product-crosspromo">
      <div className="product-crosspromo__inner">
        <h2 className="product-crosspromo__title">{crosspromo.title}</h2>
        <ul className="product-crosspromo__grid">
          {crosspromo.items.map((item, i) => (
            <li key={i}>
              <Link to={item.path} className="promo-card">
                {item.image && (
                  <img className="promo-card__image" src={item.image} alt={item.name} />
                )}
                <div className="promo-card__content">
                  <div>
                    <p className="promo-card__name">{item.name}</p>
                    <p className="promo-card__desc">{item.desc}</p>
                  </div>
                  <span className="promo-card__link">자세히 보기</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// ── ProductPage (조합) ────────────────────────────────
export default function ProductPage({ data }) {
  return (
    <>
      {data.hero         && <HeroSection         hero={data.hero} />}
      {data.intro        && <IntroSection        intro={data.intro} />}
      {data.features     && <FeaturesSection     features={data.features} />}
      {data.tech         && <TechSection         tech={data.tech} />}
      {data.benefits     && <BenefitsSection     benefits={data.benefits} />}
      {data.models       && <ModelsSection       models={data.models} />}
      {data.applications && <ApplicationsSection applications={data.applications} />}
      {data.crosspromo   && <CrossPromoSection   crosspromo={data.crosspromo} />}
    </>
  )
}
