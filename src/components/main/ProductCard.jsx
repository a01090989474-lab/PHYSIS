import { NavLink } from 'react-router-dom'
import './ProductCard.scss'

export default function ProductCard({ name, badge, badgeColor, temp, desc, features, image, link }) {
  return (
    <section className="product-card">
      <div className="product-card__inner">
        <div className="product-card__text">
          <div className="product-card__name-row">
            <h2 className="product-card__name">{name}</h2>
            {badge && (
              <span className="product-card__badge" style={{ background: badgeColor }}>
                {badge}
              </span>
            )}
          </div>
          <p className="product-card__temp">{temp}</p>
          <p className="product-card__desc">{desc}</p>
          {features && (
            <ul className="product-card__features">
              {features.map((f, i) => (
                <li key={i}>
                  <span className="product-card__feature-label">{f.label}</span>
                  <span className="product-card__feature-value">{f.value}</span>
                </li>
              ))}
            </ul>
          )}
          <NavLink to={link} className="product-card__btn" style={{ background: badgeColor }}>자세히보기</NavLink>
        </div>
        <div className="product-card__image">
          {image ? (
            <NavLink to={link}>
              <img src={image} alt={name} />
            </NavLink>
          ) : (
            <div className="product-card__image-placeholder" />
          )}
        </div>
      </div>
    </section>
  )
}
