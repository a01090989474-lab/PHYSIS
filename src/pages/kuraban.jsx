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
    theme: "dark",
  },
  intro: {
    title: "KURABAN",
    subtitle: (
      <>
        <strong>비열 전기장</strong>을 이용해 −2℃ 부근에서 식품을 얼리지 않고
        <br />
        살아있는 상태로 보존하는 차세대 냉장 시스템
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
        desc: "해동 과정 없이 갓 손질한 듯한 식감이 유지됩니다.",
        chip: "해동 손실 ZERO",
      },
      {
        number: "02",
        title: "보관 기간 3~10배 연장",
        subtitle: "SHELF LIFE",
        desc: "부패·산화를 늦춰 일반 냉장보다 오래 보관됩니다.",
        chip: "신선도 3~10×",
      },
      {
        number: "03",
        title: "프리미엄 시장 진입",
        subtitle: "PREMIUM MARKET",
        desc: "스시·숙성육 등 최고 등급 시장에 대응 가능합니다.",
        chip: "프리미엄 단가 실현",
      },
      {
        number: "04",
        title: "작업 흐름 단순화",
        subtitle: "OPERATIONS",
        desc: "해동·재조리 과정이 없어 작업 동선이 단순해집니다.",
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
        title: "고전압 비열 전기장 생성",
        desc: "챔버 내부에 비열 고전압 전기장을 형성해, 열을 발생시키지 않고도 식품 보존 환경을 만듭니다.",
        image: "/images/kuraban/con1_01.png",
        chip: "열 발생 ZERO",
      },
      {
        number: "02",
        title: "자유수 분자 진동",
        desc: "형성된 전기장이 식품 내부 자유수 분자를 미세하게 진동시켜 세포 활성을 유지한 채 보존합니다.",
        image: "/images/kuraban/con1_02.png",
        chip: "분자 활성화",
      },
      {
        number: "03",
        title: "2-3℃ 미동결 유지",
        desc: "어는점 부근인 −2~−3℃에서도 얼지 않는 과냉각 상태를 유지해, 얼리지 않고도 장기 보존이 가능합니다.",
        image: "/images/kuraban/con1_03.png",
        chip: "−2℃ 과냉각",
      },
      {
        number: "04",
        title: "4세포 활성 보존",
        desc: "동결 과정이 없어 세포가 살아있는 상태 그대로 유지되며, 해동 손실 없이 신선도가 보존됩니다.",
        image: "/images/kuraban/con1_04.png",
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
        logo: "/images/kuraban/kurabanEx.png",
        label: "WET AGING",
        name: "창고형 쿠라반 활용 사례",
        desc: "KURABAN이 실현하는 숙성 솔루션<br/>활용 사례 보기",
        path: "/kuraban_ex",
      },
    ],
  },
  models: {
    title: "사업장 규모에 맞는 모델 선택",
    subtitle: "Find the model that fits yours operation",
    capacityLabel: "CHAMBER SIZE",
    items: [
      {
        series: "KB-075F-I2D",
        name: "컴팩트 챔버형",
        capacity: "소형",
        unit: "",
        desc: '<span class="model-card__desc-em">소형 매장·개인 작업장</span>에 적합.<br/>도입 진입 장벽이 가장 낮은 입문 모델.',
        specs: [
          { label: "동작 온도", value: "-5 ~ 10°C" },
          { label: "챔버 용량", value: "383L" },
          { label: "소비 전력", value: "≈251w" },
          { label: "외형 치수", value: "755×800×950" },
          { label: "본체 중량", value: "≈154kg" },
        ],
      },
      {
        series: "KB-150F-IF4D",
        name: "표준 챔버형",
        capacity: "중형",
        unit: "",
        featured: true,
        desc: '<span class="model-card__desc-em">호텔·중대형 매장</span>에 도입 되는 모델.<br/>처리량과 활용성이 우수.',
        specs: [
          { label: "동작 온도", value: "-5 ~ 10°C" },
          { label: "챔버 용량", value: "818L" },
          { label: "소비 전력", value: "≈324w" },
          { label: "외형 치수", value: "1490×800×950" },
          { label: "본체 중량", value: "≈234kg" },
        ],
      },
      {
        series: "KB-0000-00",
        name: "창고형",
        capacity: "맞춤형",
        unit: "",
        desc: '<span class="model-card__desc-em">정육·축산 도매·숙성 전문 사업자</span>에 적합.<br/>보존을 넘어 부가가치 창출까지',
        specs: [
          { label: "동작 온도", value: "-5 ~ 10°C" },
          { label: "챔버 용량", value: "맞춤형" },
          { label: "소비 전력", value: "문의하기" },
          { label: "외형 치수", value: "문의하기" },
          { label: "본체 중량", value: "문의하기" },
        ],
      },
    ],
  },
  applications: {
    title: "현장에서 증명된 활용 분야",
    subtitle: "Where KURABAN works best",
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
        name: "SEASNOW",
        desc: "어류 친화 1% 염도 슬러리 아이스",
        path: "/seasnow",
        image: "/images/seasnow.png",
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
