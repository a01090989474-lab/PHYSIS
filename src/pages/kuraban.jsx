import ProductPage from "../components/tech/ProductPage";

const data = {
  hero: {
    eyebrow: "쿠라반",
    title: "KURABAN",
    subtitle: (
      <>
        -2°C
        <br />
        얼리지 않는 살아있는 냉장
      </>
    ),
    desc: (
      <>
        비열 전기장(N-Te-Fe)으로 세포 손상 없이
        <br />
        식품을 살아있는 상태로 유지합니다.
      </>
    ),
    image: "/images/kuraban_02.jpg",
  },
  intro: {
    title: "KURABAN",
    subtitle: (
      <>
        <strong>비열 전기장</strong>을 이용해 −2℃ 부근에서 식품을
        <br />
        얼리지 않고 살아있는 상태로 보존하는 차세대 냉장 시스템입니다.
        <br />
        <br />
        일본 MARS Company의 N-Te-Fe 기술 기반.
      </>
    ),
    subtitleLarge: true,
    caption: "Explanation and operating principles of the Kuraban",
  },
  features: {
    title: "사업장에 가져오는 4가지 변화",
    subtitle: "From technical features to business outcomes",
    items: [
      {
        number: "01",
        title: "생물 등급의 신선도",
        subtitle: "QUALITY",
        desc: "얼리지 않고 −2℃에서 보존하므로 해동 과정 자체가 없습니다. 회·스시 등 생식 용도에서도 갓 손질한 듯한 식감과 풍미가 그대로 유지됩니다.",
        image: "/images/hybrid/con1_01.jpg",
        chip: "해동 손실 ZERO",
      },
      {
        number: "02",
        title: "보관 기간 3~10배 연장",
        subtitle: "SHELF LIFE",
        desc: "세포 활성을 유지한 채 부패와 산화를 지연시켜 일반 냉장 대비 3~10배 의 보관 기간을 확보합니다. 재고 운영의 유연성이 크게 늘어납니다.",
        image: "/images/hybrid/con1_02.png",
        chip: "신선도 3~10×",
      },
      {
        number: "03",
        title: "프리미엄 시장 진입",
        subtitle: "PREMIUM MARKET",
        desc: "스시·숙성육·호텔 등 최고 등급 식자재 가 필요한 시장에 대응 가능합니다. 일반 냉장으로는 불가능한 프리미엄 단가 를 실현합니다.",
        image: "/images/tech_hybrid_03.png",
        chip: "프리미엄 단가 실현",
      },
      {
        number: "04",
        title: "작업 흐름 단순화",
        subtitle: "OPERATIONS",
        desc: "해동·재조리 과정이 없으니 주방·작업장 동선 이 단순해지고 인건비도 절감됩니다. 즉시 사용 가능한 식자재 상태로 보관됩니다.",
        image: "/images/tech_hybrid_04.png",
        chip: "해동 공정 제거",
      },
    ],
  },
  tech: {
    name: "N-Te-Fe",
    desc: "Non-Thermal Electric Field —<br/>열을 발생시키지 않는 고전압 전기장으로 식품을 얼리지 않고<br/>세포 활성을 유지하며 보존하는 일본 MARS Company의 원천 기술입니다.",
  },
  benefits: {
    items: [
      {
        number: "01",
        title: "고전압 전기장 생성",
        desc: "챔버 내부에 비열 고전압 전기장을 형성",
        image: "/images/hybrid/con1_02.png",
        chip: "열 발생 ZERO",
      },
      {
        number: "02",
        title: "자유수 분자 진동",
        desc: "전기장이 식품 내부 자유수 분자를 진동",
        image: null,
        chip: "분자 활성화",
      },
      {
        number: "03",
        title: "3−2℃ 미동결 유지",
        desc: "어는점 부근에서 얼지 않는 과냉각 상태 유지",
        image: null,
        chip: "−2℃ 과냉각",
      },
      {
        number: "04",
        title: "4세포 활성 보존",
        desc: "동결 없이 세포가 살아있는 그대로 유지",
        image: null,
        chip: "신선도 3~10×",
      },
    ],
  },
  global: {
    title: "글로벌 검증을 받은 차세대 기술",
    subtitle: "Validated by global partnerships and proven installations.",
    stat: {
      label: "GLOBAL INSTALLATIONS",
      value: "40+",
      desc: "전 세계 도입 사례",
      breakdown: [
        { value: "31", label: "일본", sublabel: "JAPAN" },
        { value: "5", label: "한국", sublabel: "KOREA" },
        { value: "4", label: "해외", sublabel: "OVERSEAS" },
      ],
    },
    partners: [
      {
        logo: "/images/kuraban/mars_logo.png",
        label: "ORIGIN TECHNOLOGY",
        name: "MARS Company",
        desc: "비열 전기장(N-Te-Fe) 원천 기술 보유.<br/>일본의 공식 파트너십.",
      },
      {
        logo: "/images/kuraban/mars_logo.png",
        label: "ORIGIN TECHNOLOGY",
        name: "MARS Company",
        desc: "비열 전기장(N-Te-Fe) 원천 기술 보유.<br/>일본의 공식 파트너십.",
      },
    ],
  },
  models: {
    title: "사업장 규모에 맞는 모델 선택",
    subtitle: "Find the model that fits yours operation",
    capacityLabel: "CHAMBER SIZE",
    items: [
      {
        series: "KURABAN-S",
        name: "컴팩트 챔버형",
        capacity: "소형",
        unit: "일반 냉장고 크기",
        desc: '<span class="model-card__desc-em">소형 매장·개인 작업장</span>에 적합.<br/>도입 진입 장벽이 가장 낮은 입문 모델.',
        specs: [
          { label: "동작 온도", value: "-2 ~ -1°C" },
          { label: "챔버 용량", value: "640L" },
          { label: "소비 전력", value: "≈10.5kw" },
          { label: "외형 치수", value: "1320×680×2030" },
          { label: "본체 중량", value: "≈110kg" },
        ],
      },
      {
        series: "PHD - Y350KR",
        name: "표준 챔버형",
        capacity: "중형",
        unit: "표준 사이즈",
        featured: true,
        desc: '<span class="model-card__desc-em">호텔·중대형 매장</span>에 도입 되는 모델.<br/>처리량과 활용성이 우수.',
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
        name: "창고형",
        capacity: "대형",
        unit: "워크인",
        desc: '<span class="model-card__desc-em">정육·축산 도매·숙성 전문 사업자</span>에 적합.<br/>보존을 넘어 부가가치 창출까지',
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
        category: "SUSHI",
        title: "스시 · 횟감 전문점",
        image: "/images/hybrid/con4_01.png",
        desc: "갓 손질한 듯한 식감과 풍미.회·스시 같은 식자재의 신선도 유지",
      },
      {
        category: "AGED MEAT",
        title: "숙성육 전문점",
        image: "/images/hybrid/con4_02.png",
        desc: "스테이크·정육 매장의 숙성육 보관에 최적. 일반 냉장으로는 불가능한 식감 구현",
      },
      {
        category: "HOTEL",
        title: "호텔 · 고급 외식",
        image: "/images/hybrid/con4_03.png",
        desc: "호텔·파인 다이닝의 고급 식자재 보관. 해동 공정 없이 즉시 사용 가능한 신선도",
      },
      {
        category: "BAKERY",
        title: "제과제빵 원료",
        image: "/images/hybrid/con4_04.png",
        desc: "반죽·과일·유제품 등 제과제빵 원료 의 발효·풍미를 살린 채 장기 보관 가능",
      },
    ],
  },
  crosspromo: {
    title: "PHYSIS의 다른 솔루션도 살펴보세요",
    subtitle: "Explore other Physis solutions",
    items: [
      {
        tname: "FISH - SAFE ICE",
        name: "Sea Snow",
        desc: "어류 친화 1% 염도 슬러시 아이스",
        path: "/seasnow",
        image: "/images/main_con2_03.png",
      },
      {
        tname: "RAPID FREEZE",
        name: "HYBRIDICE",
        desc: "-21.3℃ 침지 동결, 100배의 속도",
        path: "/hybridice",
        image: "/images/hybrid/hybrid_02.png",
      },
    ],
  },
};

export default function Kuraban() {
  return <ProductPage data={data} />;
}
