# PHYSIS

Physis 공식 웹사이트 — 차세대 냉동 기술을 소개하는 React 기반 랜딩 페이지입니다.

## 기술 스택

- **React 19** + **React Router v7**
- **Vite 8**
- **SCSS (Sass)**

## 시작하기

```bash
npm install
npm run dev
```

## 주요 페이지

| 경로 | 설명 |
|------|------|
| `/` | 메인 홈 |
| `/about` | 회사 소개 |
| `/seasnow` | SeaSnow 제품 |
| `/hybridice` | HybridIce 제품 |
| `/kuraban` | Kuraban 제품 |
| `/contact` | 문의 |

## 메인 섹션 구성

- **HeroSection** — 히어로 배너
- **StatsSection** — 수치 카운트업/다운 애니메이션 (100배, 10개월, 0%)
- **LimitsSection** — 기존 냉동의 한계 카드 + Solution 블록 (스크롤 페이드인)
- **ProcessSection** — 설계~운영 프로세스 카드 (스크롤 페이드인)
- **ProductCard** — 제품별 상세 카드 (이미지 클릭 시 제품 페이지 이동)

## 빌드

```bash
npm run build
```
