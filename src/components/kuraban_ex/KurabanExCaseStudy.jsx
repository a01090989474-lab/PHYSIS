import "./KurabanExCaseStudy.scss";

export default function KurabanExCaseStudy() {
  return (
    <section className="kex-case">
      <div className="kex-case__inner">
        <div className="kex-case__head">
          <div>
            <p className="kex-case__label">CASE STUDY</p>
            <h2 className="kex-case__title">
              “고기 판매량 4배, 문의 전환율 80%”
            </h2>
            <p className="kex-case__sub">
              10+ years of warehouse aging in real operation.
            </p>
          </div>
          <span className="kex-case__badge">VERIFIED · 10+ YEARS</span>
        </div>

        <div className="kex-case__body">
          <div className="kex-case__company">
            <div className="kex-case__company-media">
              호리우치 상사 매장 · 숙성육 사진
            </div>
            <p className="kex-case__company-label">COMPANY</p>
            <p className="kex-case__company-name">
              호리우치 상사
              <br />
              Horiuchi Trading
            </p>
            <ul className="kex-case__company-info">
              <li>
                <strong>위치</strong> · 일본 군마현 다카사키시
              </li>
              <li>
                <strong>사업</strong> · 숙성육 인터넷 판매·도매·외식
              </li>
              <li>
                <strong>업력</strong> · 불고기점 13년 · 창고형 Kuraban 10년+
              </li>
              <li>
                <strong>활용</strong> · 냉장고형 + 조립식형
              </li>
            </ul>
          </div>

          <div className="kex-case__quote">
            <span className="kex-case__quote-mark">“</span>
            <p className="kex-case__quote-text">
              창고형 Kuraban을 사용하면 고기의 맛과 향이 분명히
              증가합니다. 쇠고기는 놀라울 정도로 부드러워지고, 돼지고기는
              맛이 더욱 강해집니다. 고객의 반복률이 매우 높고 만족도가
              큽니다.
            </p>
            <p className="kex-case__quote-attr">
              — 호리우치 상사 담당자 인터뷰
            </p>
          </div>
        </div>

        <div className="kex-case__highlights">
          <div className="kex-case__highlight">
            <p className="kex-case__highlight-label">OPERATION</p>
            <p className="kex-case__highlight-title">
              사용은 단순, 노하우는 깊이
            </p>
            <p className="kex-case__highlight-desc">
              고기를 창고에 넣어두기만 하면 됩니다. 단, 부위별 최적 시간을
              조정하는 게 자체 노하우입니다.
            </p>
          </div>
          <div className="kex-case__highlight">
            <p className="kex-case__highlight-label">MARKET</p>
            <p className="kex-case__highlight-title">미들층 가격대 진입</p>
            <p className="kex-case__highlight-desc">
              손실 없이 부가가치만 더하는 구조라 미들층 소비자를 위한
              합리적 가격대를 만들 수 있었습니다.
            </p>
          </div>
          <div className="kex-case__highlight">
            <p className="kex-case__highlight-label">RELATIONSHIP</p>
            <p className="kex-case__highlight-title">생산자·농협 신뢰 관계</p>
            <p className="kex-case__highlight-desc">
              “생명을 낭비하지 않는다”는 가치가 전해져, 농협·생산자와의
              거래 신뢰 관계가 깊어졌습니다.
            </p>
          </div>
        </div>

        <div className="kex-case__stats">
          <div className="kex-case__stat">
            <p className="kex-case__stat-value">4×</p>
            <p className="kex-case__stat-label">SALES GROWTH</p>
            <p className="kex-case__stat-desc">
              3~4년 전 대비 고기 판매량 약 4배 증가
            </p>
          </div>
          <div className="kex-case__stat">
            <p className="kex-case__stat-value">80%</p>
            <p className="kex-case__stat-label">CONVERSION RATE</p>
            <p className="kex-case__stat-desc">
              ‘숙성육’ 검색 고객의 문의 → 구매 전환율
            </p>
          </div>
          <div className="kex-case__stat">
            <p className="kex-case__stat-value">10+년</p>
            <p className="kex-case__stat-label">OPERATION</p>
            <p className="kex-case__stat-desc">
              냉장고형·조립식형 창고형 Kuraban 장기 운영
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
