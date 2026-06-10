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
        일본 MARS Company의 N-Te-Fe 기술 기반.
      </>
    ),
    subtitleLarge: true,
    caption: "Explanation and operating principles of the Kuraban",
  },
  features: {
    items: [
      {
        number: "01",
        title: "ELECTRIC FIELD",
        subtitle: "고전압 전기장 생성",
        desc: "챔버 내부에 고전압 비열 전기장을 형성합니다. 열을 발생시키지 않으면서 식품 주변 환경 자체를 활성화합니다.",
        image: "/images/hybrid/con1_01.jpg",
        chip: "열 발생 ZERO",
      },
      {
        number: "02",
        title: "MOLECULAR ACTIVATION",
        subtitle: "자유수 분자 진동",
        desc: "전기장이 식품 내부의 자유수 분자를 진동시켜 얼지 못하는 상태를 만듭니다. 일반 냉장과 다른 분자 단위 작용으로 세포 손상 없이 신선도를 유지합니다.",
        image: "/images/hybrid/con1_02.png",
        chip: "분자 진동 활성",
      },
      {
        number: "03",
        title: "SUPERCOOLING",
        subtitle: "−2℃ 미동결 상태 유지",
        desc: "일반적으로 식춤이 얼기 시작하는 온도지만, kuraban은 -2℃에서도 얼지 않는 과냉각 상태를 유지합니다.",
        image: "/images/tech_hybrid_03.png",
        chip: "-2℃ 미동결",
      },
      {
        number: "04",
        title: "LIVING PRESERVATION",
        subtitle: "세포 활성 보존",
        desc: "동결되지 않음으로써 세포 손상이 없고, 식품이 살아있는 그대로 보존됩니다. 해동 과정이 필요 없고, 신선도와 식감이 유지됩니다.",
        image: "/images/tech_hybrid_04.png",
        chip: "신선도 3~10배",
      },
    ],
  },
  tech: {
    name: "N-Te-Fe",
    desc: "Non-Thermal Electric Field —<br/>열을 발생시키지 않는 고전압 전기장으로 식품을 얼리지 않고<br/>세포 활성을 유지하며 보존하는 일본 MARS Company의 원천 기술입니다.",
  },
  benefits: {
    title: "사업장에 가져오는 4가지 변화",
    subtitle: "From technical features to business outcomes",
    items: [
      {
        number: "01",
        title: "생물 등급의 신선도",
        desc: "해동 없이 갓 손질된 듯한 신선도와 식감을 유지합니다.",
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

export default function Kuraban() {
  return <ProductPage data={data} />;
}
