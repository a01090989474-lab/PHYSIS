import ProductPage from "../components/tech/ProductPage";

const data = {
  hero: {
    eyebrow: "하이브리드 아이스",
    title: "HYBRID ICE",
    subtitle: "-21.3°C\n침지 동결, 100배의 속도",
    desc: "액체소금+트레할로 없이 작동하는\n무균성 침지 동결 시스템(DIPS)",
    image: null,
  },
  intro: {
    title: "HYBRIDICE",
    subtitle: "Explanation and Operating Principle of Hybrid Ice",
    highlight: "23.5% 고염도 염수소",
    desc: "-21.3°C로 유지되는 슬러리 침지 동결 동결 시스템입니다. HYBRIDICE는 -21.3°C의 유지되는 슬러리 아래에 암반 및 틀 안에서 침지 동결 시킵니다. 소금(NaCl) 기반의 무균해 염수를 이용합니다.",
  },
  features: {
    image: null,
    items: [
      {
        number: "01",
        title: "QUALITY",
        subtitle: "새로 그대로, 짧아 그대로",
        desc: "염분 함량이 전혀 없는 첨단 냉동 방식으로 어류에 제품의 신선함을 최대한 보존합니다. HYBRIDICE는 -21.3°C의 유지되는 슬러리 아래에 암반 침지 동결 시킵니다. 기존 동결에 비하여 짧은 시간에 무균성 침지 동결됩니다.",
      },
      {
        number: "02",
        title: "SHELF LIFE",
        subtitle: "보관 기간이 길어 줄게",
        desc: "기존 동결 방식보다 장기간 선도를 유지합니다.",
      },
      {
        number: "03",
        title: "EFFICIENCY",
        subtitle: "차원이 다른 물고 시간",
        desc: "100배 빠른 동결로 생산성을 극대화합니다.",
      },
      {
        number: "04",
        title: "SUSTAINABILITY",
        subtitle: "친환경 인증 솔루션",
        desc: "친환경 인증을 받은 지속 가능한 냉동 솔루션입니다.",
      },
    ],
  },
  tech: {
    name: "DIPS",
    fullname: "Dipping Ice Processing System",
    desc: '이동을 동시에 적 및 소 선박에서도 응용이 가능한 차세대 침지 동결 기술입니다.<br/>또한 선박 전체 동시에 동결 냉동 냉동기를 밖에 가린 강대하게 기반의 <strong class="product-tech__emphasis">동결부 동결 최적*을</strong> 공개적으로 제소합니다.',
  },
  benefits: {
    title: "사업장에 가져오는 4가지 변화",
    subtitle: "From technical features to business outcomes",
    items: [
      {
        number: "01",
        title: "매출 증대",
        desc: "빠른 동결로 처리량 증가, 고급 수산물 프리미엄 수출 경쟁력 강화",
      },
      {
        number: "02",
        title: "운영 비용 절감",
        desc: "에너지 효율화, 폐기물 최소화로 운영 비용을 절감합니다.",
      },
      {
        number: "03",
        title: "시장 확대",
        desc: "고품질 냉동으로 글로벌 시장 진입 가능성을 높입니다.",
      },
      {
        number: "04",
        title: "리스크 관리",
        desc: "선도 유지 기간 연장으로 물류 리스크를 줄입니다.",
      },
    ],
  },
  models: {
    title: "사업장 규모에 맞는 모델 선택",
    note: "자사의 기업규모를 선택하시고, 설비에 적합한 전문 컨설팅 후 모델 을 찾을 수 있습니다.",
    items: [
      {
        series: "PHD - F100AB",
        name: "컴팩트 모델",
        capacity: "2",
        unit: "톤/일",
        specs: [
          { label: "동결 온도", value: "-21.3°C" },
          { label: "슬러리 용량", value: "640L" },
          { label: "냉동 전력", value: "≤10.5kw" },
          { label: "외형 치수", value: "1320×680×2030" },
          { label: "본체 중량", value: "≤70kg" },
        ],
      },
      {
        series: "PHD - F100AB",
        name: "표준 모델",
        capacity: "3-5",
        unit: "톤/일",
        featured: true,
        specs: [
          { label: "동결 온도", value: "-21.3°C" },
          { label: "슬러리 용량", value: "1000L" },
          { label: "냉동 전력", value: "≤13kw" },
          { label: "외형 치수", value: "1320×680×2964" },
          { label: "본체 중량", value: "≤140kg" },
        ],
      },
      {
        series: "PHD - LARGE",
        name: "대용량 모델",
        capacity: "10-20",
        unit: "톤/일",
        specs: [
          { label: "동결 온도", value: "-21.3°C" },
          { label: "슬러리 용량", value: "5톤" },
          { label: "냉동 전력", value: "≤10.5kw" },
          { label: "외형 치수", value: "1320×680×3000" },
          { label: "본체 중량", value: "110kg" },
        ],
      },
    ],
  },
  applications: {
    title: "현장에서 증명된 활용 분야",
    subtitle: "Where Hybridice works effectively",
    items: [
      {
        category: "FISHERY",
        title: "양식·연근해 수산",
        desc: "넙치 등 고급어 최상급 신선도 유지, 산소 사용 없이 효과적으로 선도를 유지.",
      },
      {
        category: "LIVESTOCK",
        title: "축산·가금류",
        desc: "도살 후 신속하게 냉각 처리하여 백색, 붉은색 육류 선도를 유지.",
      },
      {
        category: "PROCESSED FOOD",
        title: "냉동 가공 식품",
        desc: "판매 후 수 십시간 이상 냉동 상태 유지로 그래로 보호.",
      },
      {
        category: "EXPORT",
        title: "콜드체인 수출",
        desc: "수출 후 3주 이상이 지나도 현지에서 살아있는 느낌의 신선도 줄.",
      },
    ],
  },
  crosspromo: {
    title: "PHYSIS의 다른 솔루션도 살펴보세요",
    items: [
      {
        name: "Kuraban",
        desc: "16톤 분량의 눈의 급속 슬러리아이스.",
        path: "/kuraban",
        image: null,
      },
      {
        name: "Sea Snow",
        desc: "16톤 분량의 눈의 급속 슬러리아이스.",
        path: "/seasnow",
        image: null,
      },
    ],
  },
};

export default function HybridIce() {
  return <ProductPage data={data} />;
}
