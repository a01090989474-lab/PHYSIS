import ProductPage from "../components/tech/ProductPage";

const data = {
  hero: {
    eyebrow: "하이브리드 아이스",
    title: "HYBRID ICE",
    subtitle: (
      <>
        -21.3°C 침지 동결
        <br />
        100배의 속도
      </>
    ),
    desc: (
      <>
        액체잘소•프레온 없이 작동하는
        <br />
        무공해 침지 동결 시스템 (DIPS)
      </>
    ),
    image: "/images/hybrid/hero_01.png",
  },
  intro: {
    title: "HYBRIDICE",
    subtitle: (
      <>
        <strong>23.5% 고염도 염수</strong>를 −21.3℃로 유지하는 슬러쉬 기반 침지
        동결 시스템입니다.
        <br />
        <br />
        액체질소나 프레온 같은 화학 냉매를 사용하지 않고,
        <br />
        <strong>소금(NaCl) 기반의 무공해 염수</strong>만으로 작동합니다.
      </>
    ),
    subtitleLarge: true,
    caption: "Explanation and Operating Principle of Hybrid Ice",
  },
  features: {
    title: "사업장에 가져오는 4가지 변화",
    subtitle: "From technical features to business outcomes",
    items: [
      {
        number: "01",
        title: "매출 보호",
        subtitle: "REVENUE",
        desc: "드립 손실 없이 출하 중량을 그대로 확보합니다.",
        chip: "출하 중량 +5~10%",
      },
      {
        number: "02",
        title: "운영비 절감",
        subtitle: "OPERATIONS",
        desc: "냉매 보충 비용 없는 구조로 운영비가 줄어듭니다.",
        chip: "냉매 보충 비용 ZERO",
      },
      {
        number: "03",
        title: "시장 확대",
        subtitle: "MARKET",
        desc: "신선도 유지 기간이 늘어 원거리 수출까지 가능합니다.",
        chip: "신선도 유지",
      },
      {
        number: "04",
        title: "리스크 관리",
        subtitle: "RISK",
        desc: "환경 규제와 인증 요구에 선제적으로 대응합니다.",
        chip: "친환경 인증 충족",
      },
    ],
  },
  tech: {
    name: "DIPS",
    desc: 'Dipping Ice Processing System —<br/>식품을 슬러시에 직접 담가 순간적으로 동결하는 차세대 침지 동결 기술입니다.<br/>표면 전체가 동시에 냉기와 접촉하기 때문에 기존 급랭 방식의 한계인 <span class="product-tech__emphasis">중심부 동결 지연*</span> 을 근본적으로 해소합니다.',
  },
  benefits: {
    items: [
      {
        number: "01",
        title: "고염도 염수 냉각",
        desc: "23.5% 고염도 염수는 일반 담수보다 어는점이 크게 낮아져, 액체질소 없이도 −21.3℃까지 냉각할 수 있습니다.",
        image: "/images/hybrid/con1_01.png",
        chip: "액체질소 없이 초저온",
      },
      {
        number: "02",
        title: "동결조 직접 침지",
        desc: "식품을 동결조 슬러리에 직접 담가 표면 전체가 냉기와 동시에 접촉하므로, 부위별 온도 차이가 생기지 않습니다.",
        image: "/images/hybrid/con1_02.jpg",
        chip: "균일한 냉기 전달",
      },
      {
        number: "03",
        title: "순간 동결",
        desc: "표면뿐 아니라 중심부까지 균일하게 동결되어, 기존 급랭 방식 대비 처리 시간이 100배 가까이 줄어듭니다.",
        image: "/images/hybrid/con1_03.jpg",
        chip: "일반 급랭 100×",
      },
      {
        number: "04",
        title: "미세 결정 형성",
        desc: "큰 얼음 결정이 형성되기 전에 순간적으로 동결되어 세포벽 손상이 거의 없이 조직감이 그대로 보존됩니다.",
        image: "/images/hybrid/con1_04.png",
        chip: "세포 손상 ≈ 0",
      },
    ],
  },
  models: {
    title: "사업장 규모에 맞는 모델 선택",
    subtitle: "Find the model that fits yours operation",
    items: [
      {
        series: "PHD - Y200KR",
        name: "컴팩트 모델",
        capacity: "2",
        unit: "톤/일",
        desc: '<span class="model-card__desc-em">소•중규모 사업장</span>에 적합.<br/>도입 진입 장벽이 낮은 표준 입문 모델.',
        specs: [
          { label: "동결 온도", value: "-21.3°C" },
          { label: "슬러리 용량", value: "640L" },
          { label: "소비 전력", value: "≈10.5kw" },
          { label: "외형 치수", value: "1320×680×2030" },
          { label: "본체 중량", value: "≈110kg" },
        ],
      },
      {
        series: "PHD - Y350KR",
        name: "표준 모델",
        capacity: "3-5",
        unit: "톤/일",
        featured: true,
        desc: '<span class="model-card__desc-em">중•대규모 사업장</span>에 많이 도입 되는 모델.<br/>처리량과 운영 효율의 균형이 우수.',
        specs: [
          { label: "동결 온도", value: "-21.3°C" },
          { label: "슬러리 용량", value: "1000L" },
          { label: "소비 전력", value: "≈13kw" },
          { label: "외형 치수", value: "1200×918×2904" },
          { label: "본체 중량", value: "≈140kg" },
        ],
      },
      {
        series: "PHD - LARGE",
        name: "대용량 모델",
        capacity: "10-20",
        unit: "톤/일",
        desc: '<span class="model-card__desc-em">산업용 대규모 사업장</span>에 적합.<br/>원양수산•콜드체인•수출 가공 공장용.',
        specs: [
          { label: "동결 온도", value: "-21.3°C" },
          { label: "슬러리 용량", value: "5톤" },
          { label: "소비 전력", value: "≈10.5kw" },
          { label: "외형 치수", value: "1320×680×3000" },
          { label: "본체 중량", value: "≈110kg" },
        ],
      },
    ],
  },
  applications: {
    title: "현장에서 증명된 활용 분야",
    subtitle: "Where HYBRIDICE works best",
    items: [
      {
        category: "FISHERY",
        title: "양식·연근해 수산",
        image: "/images/hybrid/con4_01.png",
        desc: "넙치 등 고급어 최상급 신선도 유지, 산소 사용 없이 효과적으로 선도를 유지",
      },
      {
        category: "LIVESTOCK",
        title: "정육·가공육",
        image: "/images/hybrid/con4_02.png",
        desc: "도축 후 신속하게 냉각 처리하여 신선도와 풍미 보존, 육즙 손실 최소화",
      },
      {
        category: "PROCESSED FOOD",
        title: "냉동 가공 식품",
        image: "/images/hybrid/con4_03.png",
        desc: "만두 튀김 반찬류 등 다양한 가공식품의 식감과 외관을 그대로 보존",
      },
      {
        category: "EXPORT",
        title: "콜드체인 수출",
        image: "/images/hybrid/con4_04.png",
        desc: "장거리 운송 수출 시 신선도 유지. 글로벌 바이어의 친환경 인증 요구 충족",
      },
    ],
  },
  crosspromo: {
    title: "PHYSIS의 다른 솔루션도 살펴보세요",
    subtitle: "Explore other Physis solutions",
    items: [
      {
        tname: "LIVING CHILL",
        name: "KURABAN",
        desc: "얼리지 않는 -2℃ 살아있는 냉장 시스템",
        path: "/kuraban",
        image: "/images/kuraban.png",
      },
      {
        tname: "FISH - SAFE ICE",
        name: "SEASNOW",
        desc: "어류 친화 1% 염도 슬러시 아이스",
        path: "/seasnow",
        image: "/images/seasnow.png",
      },
    ],
  },
};

export default function HybridIce() {
  return <ProductPage data={data} />;
}
