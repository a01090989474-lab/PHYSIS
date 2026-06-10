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
    image: "/images/hybrid/hero.png",
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
    items: [
      {
        number: "01",
        title: "QUALITY",
        subtitle: "세포 그대로, 풍미 그대로",
        desc: "일반 냉동은 천천히 어는 동안 큰 얼음 결정이 자라며 세포벽을 찢습니다. HybridIce는 −21.3℃ 슬러리에 직접 침지하는 방식으로 미세 결정 동결을 구현해 세포 구조 손상을 차단합니다. 해동 시 드립이 거의 없고, 식감과 풍미가 생물에 가까운 상태로 보존됩니다.",
        image: "/images/hybrid/con1_01.jpg",
        chip: "드립 손실 ≈0%",
      },
      {
        number: "02",
        title: "SHELF LIFE",
        subtitle: "보관 기간 대폭 증가",
        desc: "미세 결정 동결은 미생물 활동과 산화 반응을 동시에 차단합니다 일반 냉동 대비 신선도 유지 기간이 크게 늘어나, 재고 손실과 폐기율이 감소하고 원거리 수출과 장기 보관이 가능해집니다.",
        image: "/images/hybrid/con1_02.png",
        chip: "신선도 유지",
      },
      {
        number: "03",
        title: "EFFICIENCY",
        subtitle: "처리량과 원가의 동시 개선",
        desc: "23.5% 고염도 슬러시에 직접 침지라는 DIPS 방식은 일반 급랭 대비 100배 빠른 동결 속소를 구현합니다. 처리량 한계가 사라지면서 성수기 대응이 가능해지고, NaCl기반 무공해 냉매를 재활용하는 구조라 액체 질소•프레온 대비 운영 원가가 크게 절감됩니다.",
        image: "/images/tech_hybrid_03.png",
        chip: "동결속도 100배",
      },
      {
        number: "04",
        title: "SUSTAINABILITY",
        subtitle: "친환경 인증 솔루션",
        desc: "액체질소나 프레온 같은 화학 냉매를 사용하지 않고, 소금(NaCl) 기반의 무공해 염수만으로 -21.3℃를 구현합니다. 탄소 배출이 없는 친환경 냉동 솔루션으로 친환경 인증 요구에 대응하며 지속적인 기업 가치를 창출합니다.",
        image: "/images/tech_hybrid_04.png",
        chip: "프레온·액체질소 사용 ZERO",
      },
    ],
  },
  tech: {
    name: "DIPS",
    desc: 'Dipping Ice Processing System —<br/>식품을 슬러시에 직접 담가 순간적으로 동결하는 차세대 침지 동결 기술입니다.<br/>표면 전체가 동시에 냉기와 접촉하기 때문에 기존 급랭 방식의 한계인 <span class="product-tech__emphasis">중심부 동결 지연*</span> 을 근본적으로 해소합니다.',
  },
  benefits: {
    title: "사업장에 가져오는 4가지 변화",
    subtitle: "From technical features to business outcomes",
    items: [
      {
        number: "01",
        title: "매출보호",
        desc: "해동 시 빠져나가던 5-10%의 드립 손실을 방지할 수 있습니다.",
        image: "/images/hybrid/con1_02.png",
        chip: "출하중량 + 5~10%",
      },
      {
        number: "02",
        title: "운영비 절감",
        desc: "에너지 효율화, 폐기물 최소화로 운영 비용을 절감합니다.",
        image: null,
        chip: "냉매 보충 비용 ZERO",
      },
      {
        number: "03",
        title: "시장 확대",
        desc: "신선도 유지 기간이 늘어 원거리 수출 장기 보관이 가능해집니다.",
        image: null,
        chip: "신선도 유지",
      },
      {
        number: "04",
        title: "리스크 관리",
        desc: "선도 유지 기간 연장으로 물류 리스크를 줄입니다.",
        image: null,
        chip: "친환경 인증 충족",
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
    subtitle: "Where HybridIce works best",
    items: [
      {
        category: "FISHERY",
        title: "양식·연근해 수산",
        image: "/images/hybrid/con4_01.png",
        desc: "넙치 등 고급어 최상급 신선도 유지, 산소 사용 없이 효과적으로 선도를 유지.",
      },
      {
        category: "LIVESTOCK",
        title: "정육·가공육",
        image: "/images/hybrid/con4_02.png",
        desc: "도축 후 신속하게 냉각 처리하여 신선도와 풍미 보존, 육즙 손실 최소화.",
      },
      {
        category: "PROCESSED FOOD",
        title: "냉동 가공 식품",
        image: "/images/hybrid/con4_03.png",
        desc: "만두 튀김 반찬류 등 다양한 가공식품의 식감과 외관을 그대로 보존.",
      },
      {
        category: "EXPORT",
        title: "콜드체인 수출",
        image: "/images/hybrid/con4_04.png",
        desc: "장거리 운송 수출 시 신선도 유지. 글로벌 바이어의 친환경 인증 요구 충족.",
      },
    ],
  },
  crosspromo: {
    title: "PHYSIS의 다른 솔루션도 살펴보세요",
    subtitle: "Explore other Physis solutions",
    items: [
      {
        tname: "LIVING CHILL",
        name: "Kuraban",
        desc: "얼리지 않는 -2℃ 살아있는 냉장 시스템",
        path: "/kuraban",
        image: "/images/kuraban_02.jpg",
      },
      {
        tname: "FISH - SAFE ICE",
        name: "Sea Snow",
        desc: "어류 친화 1% 염도 슬러시 아이스",
        path: "/seasnow",
        image: "/images/main_con2_03.png",
      },
    ],
  },
};

export default function HybridIce() {
  return <ProductPage data={data} />;
}
