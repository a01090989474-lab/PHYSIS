import ProductPage from "../components/tech/ProductPage";

const data = {
  hero: {
    eyebrow: "쿠라반",
    title: "KURABAN",
    subtitle: "급속 슬러리 아이스 시스템",
    desc: (
      <>
        대용량 슬러리 아이스를 신속하게 생성하여
        <br />
        신선도를 극대화합니다.
      </>
    ),
    image: null,
  },
  intro: {
    title: "KURABAN",
    subtitle: (
      <>
        <strong>급속 슬러리 아이스</strong>를 대용량으로 빠르게 생성하는
        냉각 시스템입니다.
        <br />
        <br />
        수산물과 식품의 표면을 빈틈없이 감싸,
        <br />
        <strong>최상의 선도를 최대한 오래 유지</strong>합니다.
      </>
    ),
    subtitleLarge: true,
    caption: "Explanation and Operating Principle of Kuraban",
  },
  features: {
    items: [
      {
        number: "01",
        title: "SPEED",
        subtitle: "빠른 냉각 속도",
        desc: "기존 방식 대비 획기적으로 빠른 냉각으로 신선도를 보존합니다.",
        image: null,
        chip: "냉각 속도 대폭 향상",
      },
      {
        number: "02",
        title: "CAPACITY",
        subtitle: "대용량 처리 가능",
        desc: "대형 수산물 처리 현장에 최적화된 용량을 제공합니다.",
        image: null,
        chip: "대용량 처리",
      },
      {
        number: "03",
        title: "UNIFORMITY",
        subtitle: "균일한 냉각",
        desc: "슬러리 아이스로 제품 전체에 균일한 냉각을 적용합니다.",
        image: null,
        chip: "전 구간 균일 냉각",
      },
      {
        number: "04",
        title: "ECONOMY",
        subtitle: "경제적인 운영",
        desc: "에너지 효율이 높아 운영 비용을 절감합니다.",
        image: null,
        chip: "운영 비용 절감",
      },
    ],
  },
  tech: {
    name: "SIPS",
    desc: '슬러리 아이스 기술을 활용한 차세대 냉각 시스템으로, <span class="product-tech__emphasis">균일하고 빠른 냉각</span>을 실현합니다.',
  },
  benefits: {
    title: "사업장에 가져오는 4가지 변화",
    subtitle: "From technical features to business outcomes",
    items: [
      {
        number: "01",
        title: "처리량 증가",
        desc: "빠른 냉각으로 단위 시간당 처리량을 극대화합니다.",
        image: null,
        chip: "처리량 극대화",
      },
      {
        number: "02",
        title: "품질 향상",
        desc: "균일한 냉각으로 전체 제품의 품질을 높입니다.",
        image: null,
        chip: "품질 균일화",
      },
      {
        number: "03",
        title: "비용 절감",
        desc: "에너지 효율화로 운영 비용을 줄입니다.",
        image: null,
        chip: "에너지 효율 ↑",
      },
      {
        number: "04",
        title: "시장 경쟁력",
        desc: "고품질 제품으로 시장에서의 경쟁력을 강화합니다.",
        image: null,
        chip: "경쟁력 강화",
      },
    ],
  },
  models: {
    title: "사업장 규모에 맞는 모델 선택",
    subtitle: "Find the model that fits your operation",
    items: [
      {
        series: "KRB - S",
        name: "소형 모델",
        capacity: "5",
        unit: "톤/일",
        desc: '<span class="model-card__desc-em">소규모 사업장</span>에 적합.<br/>도입 부담이 적은 입문형 모델.',
        specs: [
          { label: "냉각 온도", value: "-1~0°C" },
          { label: "용량", value: "500L" },
          { label: "전력", value: "≤8kw" },
          { label: "외형 치수", value: "1200×600×1800" },
          { label: "본체 중량", value: "≤80kg" },
        ],
      },
      {
        series: "KRB - M",
        name: "중형 모델",
        capacity: "10-15",
        unit: "톤/일",
        featured: true,
        desc: '<span class="model-card__desc-em">중·대규모 사업장</span>에 적합.<br/>처리량과 운영 효율의 균형이 우수.',
        specs: [
          { label: "냉각 온도", value: "-1~0°C" },
          { label: "용량", value: "1500L" },
          { label: "전력", value: "≤15kw" },
          { label: "외형 치수", value: "1500×800×2200" },
          { label: "본체 중량", value: "≤150kg" },
        ],
      },
      {
        series: "KRB - L",
        name: "대형 모델",
        capacity: "20-30",
        unit: "톤/일",
        desc: '<span class="model-card__desc-em">대규모 처리 시설</span>에 적합.<br/>대용량 수산물 가공·유통 현장용.',
        specs: [
          { label: "냉각 온도", value: "-1~0°C" },
          { label: "용량", value: "3000L" },
          { label: "전력", value: "≤25kw" },
          { label: "외형 치수", value: "2000×1000×2500" },
          { label: "본체 중량", value: "≤250kg" },
        ],
      },
    ],
  },
  applications: {
    title: "현장에서 증명된 활용 분야",
    subtitle: "Where Kuraban works effectively",
    items: [
      {
        category: "FISHERY",
        title: "수산물 냉각",
        image: null,
        desc: "수산물을 신속하게 냉각하여 선도를 유지합니다.",
      },
      {
        category: "AQUACULTURE",
        title: "양식장",
        image: null,
        desc: "양식장에서 적용하여 스트레스 없이 냉각합니다.",
      },
      {
        category: "PROCESSING",
        title: "가공 공장",
        image: null,
        desc: "식품 가공 과정에서 위생적인 냉각을 지원합니다.",
      },
      {
        category: "DISTRIBUTION",
        title: "유통·물류",
        image: null,
        desc: "콜드체인 전반에 걸쳐 선도를 유지합니다.",
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
        tname: "FISH - SAFE ICE",
        name: "Sea Snow",
        desc: "섬세한 눈꽃 형태의 아이스로 최적의 냉각을 제공합니다.",
        path: "/seasnow",
        image: "/images/main_con2_03.png",
      },
    ],
  },
};

export default function Kuraban() {
  return <ProductPage data={data} />;
}
