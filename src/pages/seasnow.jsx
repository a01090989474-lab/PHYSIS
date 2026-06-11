import ProductPage from "../components/tech/ProductPage";

const data = {
  hero: {
    eyebrow: "씨스노우",
    title: "SEA SNOW",
    subtitle: (
      <>
        염도 1%,
        <br />
        어체 손상 없는 아이스
      </>
    ),
    desc: (
      <>
        선상에서 경매장까지,
        <br />
        어류 친화적인 냉각 솔루션.
      </>
    ),
    image: null,
  },
  intro: {
    title: "SEA SNOW",
    subtitle: (
      <>
        <strong>염도 1%의 슬러시 아이스</strong>로 어획물을 냉각하는 <br />
        어류 친화 시스템입니다. 미세한 반액체 결정이 어체를 부드럽게 감싸
        <br />
        <strong>−1℃에서 손상 없이 빠르게 신선도를 보존</strong>합니다.
      </>
    ),
    subtitleLarge: true,
    caption: "Explanation and Operating Principle of Sea Snow",
  },
  features: {
    title: "사업장에 가져오는 4가지 변화",
    subtitle: "From technical features to business outcomes",
    items: [
      {
        number: "01",
        title: "어체 손상 없는 신선도",
        subtitle: "QUALITY",
        desc: "날카로운 각얼음과 달리 슬러리가 어체를 부드럽게 감싸 찰과상·압박 손상이 없습니다. 선어 등급 외관이 그대로 유지됩니다.",
        image: null,
        chip: "표면 손상 ZERO",
      },
      {
        number: "02",
        title: "빠른 초기 냉각",
        subtitle: "SPEED",
        desc: "어체와 접촉 면적이 넓어 일반 얼음보다 빠르게 심부 온도를 낮춥니다. 어획 직후 골든타임을 잡습니다.",
        image: null,
        chip: "−1℃ 급속 냉각",
      },
      {
        number: "03",
        title: "선도 유지 기간 연장",
        subtitle: "SHELF LIFE",
        desc: "낮고 균일한 온도로 부패·선도 저하를 늦춰 경매·유통까지의 신선도 유지 기간이 늘어납니다.",
        image: null,
        chip: "선도 유지 ↑",
      },
      {
        number: "04",
        title: "취급·작업 효율",
        subtitle: "EFFICIENCY",
        desc: "슬러시는 어체 사이 빈틈까지 흘러들어 적재가 쉽고, 얼음 갈아주는 수고가 줄어듭니다.",
        image: null,
        chip: "작업 공정 단순화",
      },
    ],
  },
  tech: {
    name: "SNIPS",
    desc: '미세 눈꽃 아이스 기술을 활용한 혁신적인 냉각 시스템으로, <span class="product-tech__emphasis">표면 손상 없는 완벽한 냉각</span>을 실현합니다.',
  },
  benefits: {
    items: [
      {
        number: "01",
        title: "염도 1% 슬러리 생성",
        desc: "해수와 유사한 염도 1%의 미세 슬러리 아이스 생성",
        image: null,
        chip: "염도 1%",
      },
      {
        number: "02",
        title: "어체 전체 균일 접촉",
        desc: "반액체 슬러리가 어체 표면을 빈틈없이 감쌈",
        image: null,
        chip: "표면 손상 0",
      },
      {
        number: "03",
        title: "−1℃ 빠른 냉각",
        desc: "넓은 접촉 면적으로 일반 얼음보다 빠르게 냉각",
        image: null,
        chip: "−1℃ 급속 냉각",
      },
      {
        number: "04",
        title: "선도 유지",
        desc: "어획 직후 신선도를 경매장·가공장까지 유지",
        image: null,
        chip: "선어 등급 유지",
      },
    ],
  },
  models: {
    title: "사업장 규모에 맞는 모델 선택",
    subtitle: "Find the model that fits your operation",
    capacityLabel: "CHAMBER SIZE",
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
        category: "FISHING VESSEL",
        title: "어선 · 선상",
        image: null,
        desc: "어획 직후 선상에서 바로 냉각. 잡은 순간의 신선도를 항구까지 유지합니다.",
      },
      {
        category: "AQUACULTURE",
        title: "양식장",
        image: null,
        desc: "출하 직전 활어·선어를 손상 없이 냉각. 양식 수산물의 상품 가치를 지킵니다.",
      },
      {
        category: "AUCTION MARKET",
        title: "위판장 · 경매장",
        image: null,
        desc: "산지 위판장에서 어체 손상 없는 진열·보관. 경매 등급과 단가를 높입니다.",
      },
      {
        category: "PROCESSING",
        title: "수산 가공",
        image: null,
        desc: "가공장 입고 수산물의 선도 유지. 후속 가공·동결 공정의 품질 기반이 됩니다.",
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
