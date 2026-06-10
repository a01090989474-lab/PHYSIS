import ProductPage from "../components/tech/ProductPage";

const data = {
  hero: {
    eyebrow: "씨스노우",
    title: "SEA SNOW",
    subtitle: "눈꽃 슬러리 아이스",
    desc: (
      <>
        섬세한 눈꽃 형태의 슬러리 아이스로
        <br />
        표면 손상 없이 완벽한 냉각을 실현합니다.
      </>
    ),
    image: null,
  },
  intro: {
    title: "SEA SNOW",
    subtitle: (
      <>
        <strong>눈꽃처럼 미세한 입자의 슬러리 아이스</strong>가 수산물
        표면에 밀착되는 냉각 시스템입니다.
        <br />
        <br />
        표면을 손상시키지 않으면서,
        <br />
        <strong>균일하고 부드러운 냉각</strong>을 제공합니다.
      </>
    ),
    subtitleLarge: true,
    caption: "Explanation and Operating Principle of Sea Snow",
  },
  features: {
    items: [
      {
        number: "01",
        title: "GENTLE",
        subtitle: "표면 손상 없는 냉각",
        desc: "눈꽃 입자가 제품 표면에 부드럽게 밀착하여 손상 없이 냉각합니다.",
        image: null,
        chip: "표면 손상 ZERO",
      },
      {
        number: "02",
        title: "UNIFORM",
        subtitle: "완벽한 균일 냉각",
        desc: "미세 입자로 모든 면에 균일한 냉각 효과를 제공합니다.",
        image: null,
        chip: "균일 냉각",
      },
      {
        number: "03",
        title: "FRESH",
        subtitle: "장기 선도 유지",
        desc: "최적의 냉각 환경으로 장기간 선도를 유지합니다.",
        image: null,
        chip: "선도 유지",
      },
      {
        number: "04",
        title: "CLEAN",
        subtitle: "위생적인 시스템",
        desc: "청결한 눈꽃 슬러리로 위생적인 냉각 환경을 보장합니다.",
        image: null,
        chip: "위생 안전",
      },
    ],
  },
  tech: {
    name: "SNIPS",
    desc: '미세 눈꽃 아이스 기술을 활용한 혁신적인 냉각 시스템으로, <span class="product-tech__emphasis">표면 손상 없는 완벽한 냉각</span>을 실현합니다.',
  },
  benefits: {
    title: "사업장에 가져오는 4가지 변화",
    subtitle: "From technical features to business outcomes",
    items: [
      {
        number: "01",
        title: "품질 프리미엄",
        desc: "표면 손상 없는 고품질 제품으로 프리미엄 시장을 공략합니다.",
        image: null,
        chip: "프리미엄 품질",
      },
      {
        number: "02",
        title: "선도 연장",
        desc: "최적의 냉각으로 유통 기한을 연장합니다.",
        image: null,
        chip: "유통기한 연장",
      },
      {
        number: "03",
        title: "수율 향상",
        desc: "손상 없는 냉각으로 폐기율을 줄이고 수율을 높입니다.",
        image: null,
        chip: "폐기율 감소",
      },
      {
        number: "04",
        title: "브랜드 가치",
        desc: "고품질 제품으로 브랜드 신뢰도를 높입니다.",
        image: null,
        chip: "브랜드 신뢰도 ↑",
      },
    ],
  },
  models: {
    title: "사업장 규모에 맞는 모델 선택",
    subtitle: "Find the model that fits your operation",
    items: [
      {
        series: "SNW - S",
        name: "소형 모델",
        capacity: "3",
        unit: "톤/일",
        desc: '<span class="model-card__desc-em">소규모 사업장</span>에 적합.<br/>도입 부담이 적은 입문형 모델.',
        specs: [
          { label: "냉각 온도", value: "0~2°C" },
          { label: "용량", value: "300L" },
          { label: "전력", value: "≤6kw" },
          { label: "외형 치수", value: "1000×600×1700" },
          { label: "본체 중량", value: "≤60kg" },
        ],
      },
      {
        series: "SNW - M",
        name: "중형 모델",
        capacity: "8-12",
        unit: "톤/일",
        featured: true,
        desc: '<span class="model-card__desc-em">중·대규모 사업장</span>에 적합.<br/>처리량과 품질의 균형이 우수.',
        specs: [
          { label: "냉각 온도", value: "0~2°C" },
          { label: "용량", value: "1200L" },
          { label: "전력", value: "≤12kw" },
          { label: "외형 치수", value: "1400×750×2100" },
          { label: "본체 중량", value: "≤130kg" },
        ],
      },
      {
        series: "SNW - L",
        name: "대형 모델",
        capacity: "16-25",
        unit: "톤/일",
        desc: '<span class="model-card__desc-em">대규모 처리 시설</span>에 적합.<br/>수산물 경매·유통 현장용.',
        specs: [
          { label: "냉각 온도", value: "0~2°C" },
          { label: "용량", value: "2500L" },
          { label: "전력", value: "≤20kw" },
          { label: "외형 치수", value: "1800×900×2400" },
          { label: "본체 중량", value: "≤200kg" },
        ],
      },
    ],
  },
  applications: {
    title: "현장에서 증명된 활용 분야",
    subtitle: "Where Sea Snow works effectively",
    items: [
      {
        category: "PREMIUM FISH",
        title: "프리미엄 생선",
        image: null,
        desc: "고급 생선의 표면을 손상 없이 냉각합니다.",
      },
      {
        category: "SHELLFISH",
        title: "패류·갑각류",
        image: null,
        desc: "섬세한 패류와 갑각류를 안전하게 냉각합니다.",
      },
      {
        category: "SASHIMI",
        title: "회·초밥 재료",
        image: null,
        desc: "최고급 회 재료의 신선도를 유지합니다.",
      },
      {
        category: "EXPORT",
        title: "수출용 수산물",
        image: null,
        desc: "장거리 운송에도 신선도를 유지합니다.",
      },
    ],
  },
  crosspromo: {
    title: "PHYSIS의 다른 솔루션도 살펴보세요",
    subtitle: "Explore other Physis solutions",
    items: [
      {
        tname: "RAPID FREEZE",
        name: "Hybrid Ice",
        desc: "-21.3°C 침지 동결 시스템으로 100배 빠른 속도를 실현합니다.",
        path: "/hybridice",
        image: "/images/hybrid/hybrid_01.png",
      },
      {
        tname: "LIVING CHILL",
        name: "Kuraban",
        desc: "대용량 슬러리 아이스로 대규모 처리를 지원합니다.",
        path: "/kuraban",
        image: "/images/kuraban_02.jpg",
      },
    ],
  },
};

export default function SeaSnow() {
  return <ProductPage data={data} />;
}
