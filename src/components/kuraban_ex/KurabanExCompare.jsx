import "./KurabanExCompare.scss";

export default function KurabanExCompare() {
  return (
    <section className="kex-compare">
      <div className="kex-compare__inner">
        <div className="kex-compare__head">
          <p className="kex-compare__label">AGING METHODS</p>
          <h2 className="kex-compare__title">Wet vs Dry Aging</h2>
          <p className="kex-compare__sub">
            Why Wet Aging makes more business sense.
          </p>
        </div>

        <div className="kex-compare__grid">
          <div className="compare-card compare-card--highlight">
            <span className="compare-card__badge compare-card__badge--highlight">
              KURABAN
            </span>
            <p className="compare-card__method">METHOD 01</p>
            <h3 className="compare-card__title">Wet Aging</h3>
            <p className="compare-card__desc">
              관리가 쉽고 안정적인 맛 — 창고형 Kuraban 방식
            </p>

            <div className="compare-card__group">
              <p className="compare-card__group-label compare-card__group-label--positive">
                ADVANTAGES
              </p>
              <ul className="compare-card__list">
                <li className="compare-card__item">
                  <span className="compare-card__dot compare-card__dot--positive" />
                  숙성 기간이 짧음 (1~4주)
                </li>
                <li className="compare-card__item">
                  <span className="compare-card__dot compare-card__dot--positive" />
                  수분 손실 적음 — <strong>수율 높음</strong>
                </li>
                <li className="compare-card__item">
                  <span className="compare-card__dot compare-card__dot--positive" />
                  위생 관리 쉬움 — 안정적 품질
                </li>
                <li className="compare-card__item">
                  <span className="compare-card__dot compare-card__dot--positive" />
                  효율적 생산에 적합
                </li>
              </ul>
            </div>

            <div className="compare-card__group">
              <p className="compare-card__group-label compare-card__group-label--negative">
                DISADVANTAGES
              </p>
              <ul className="compare-card__list">
                <li className="compare-card__item">
                  <span className="compare-card__dot compare-card__dot--negative" />
                  Dry 대비 숙성 향이 약함
                </li>
              </ul>
            </div>
          </div>

          <div className="compare-card">
            <span className="compare-card__badge compare-card__badge--neutral">
              COMPARISON
            </span>
            <p className="compare-card__method">METHOD 02</p>
            <h3 className="compare-card__title compare-card__title--muted">
              Dry Aging
            </h3>
            <p className="compare-card__desc">
              맛은 훌륭하지만 관리 어렵고 손실 많음
            </p>

            <div className="compare-card__group">
              <p className="compare-card__group-label compare-card__group-label--positive">
                ADVANTAGES
              </p>
              <ul className="compare-card__list">
                <li className="compare-card__item">
                  <span className="compare-card__dot compare-card__dot--positive" />
                  독특한 맛과 강한 숙성향
                </li>
              </ul>
            </div>

            <div className="compare-card__group">
              <p className="compare-card__group-label compare-card__group-label--negative">
                DISADVANTAGES
              </p>
              <ul className="compare-card__list">
                <li className="compare-card__item">
                  <span className="compare-card__dot compare-card__dot--negative" />
                  수분 증발로 <strong>중량 감소·수율 저하</strong>
                </li>
                <li className="compare-card__item">
                  <span className="compare-card__dot compare-card__dot--negative" />
                  표면 건조 부위 절단으로 손실률 높음
                </li>
                <li className="compare-card__item">
                  <span className="compare-card__dot compare-card__dot--negative" />
                  장인 의존 — 비용 높음
                </li>
                <li className="compare-card__item">
                  <span className="compare-card__dot compare-card__dot--negative" />
                  2~8주 장기간 필요
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="kex-compare__summary">
          <p className="kex-compare__summary-text">
            <strong>Wet Aging (창고형 Kuraban)</strong>은 손실은 최소화하고
            부가가치는 극대화하는 가장 효율적인 숙성 방식입니다. 위생·수율·운영
            효율의 균형이 우수합니다.
          </p>
          <div className="kex-compare__summary-stat">수율 ↑ + 손실 ↓</div>
        </div>
      </div>
    </section>
  );
}
