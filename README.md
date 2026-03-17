# 📸 Instagram Clone Project (FrontEnd)

Next.js(App Router)와 Tailwind CSS를 활용하여 제작한 인스타그램 클론 웹 애플리케이션입니다. 
데스크톱과 모바일/태블릿 환경을 모두 지원하는 완벽한 반응형 UI를 제공하며, 실제 인스타그램의 사용 경험을 재현하는 데 초점을 맞추고 있습니다.

## ✨ 주요 기능
- **반응형 레이아웃:** 데스크톱(사이드바) 및 모바일(상단 헤더 + 하단 바텀바) 레이아웃 자동 전환
- **메인 피드:** 가로 스크롤이 적용된 스토리 보드 및 개별 게시물 UI
- **무한 스크롤:** Intersection Observer를 활용한 추천 게시물 무한 스크롤 구현
- **추천 시스템 UI:** 데스크톱 우측 Aside 영역을 통한 팔로우 추천 목록 제공

---

## 🚀 시작하기 (Getting Started)

프로젝트를 로컬 환경에서 실행하는 방법입니다.

### 1. 패키지 설치
```bash
npm install
# 또는
yarn install
```

### 2. 개발 서버 실행
```bash
npm run dev
# 또는
yarn dev
```

### 3. 브라우저 확인
실행 후 브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하여 결과를 확인합니다.

---

## 🗂️ 디렉토리 구조 (Directory Structure)

유지보수와 확장성을 고려하여 컴포넌트와 데이터를 분리한 최신 Next.js App Router 구조입니다.

```text
📦 app
 ┣ 📂 components
 ┃ ┣ 📂 common       # 전역적으로 사용되는 공통 UI (Sidebar, ImageSprite 등)
 ┃ ┣ 📂 home         # 메인 피드 전용 UI (Article, StoryBoard, HomeAside 등)
 ┃ ┗ 📂 icons        # SVG 태그를 React 컴포넌트화한 아이콘 모음
 ┣ 📂 mocks          # UI 개발 및 테스트를 위한 가짜(Mock) 데이터 (게시물, 스토리)
 ┣ 📜 layout.tsx     # 최상위 레이아웃 (반응형 여백 및 Sidebar 포함)
 ┣ 📜 page.tsx       # 메인 홈 화면 (피드 및 추천 영역 조립)
 ┗ 📜 providers.tsx  # 전역 상태 및 데이터 패칭 라이브러리 프로바이더 설정
📦 public
 ┗ 📂 images         # 로고, 스프라이트 이미지, 더미 프로필 등 정적 에셋
```

---

## 🔄 기존 레거시 프로젝트와의 차이점 (Tech Evolution)

과거 CRA(Create React App) 기반으로 제작되었던 구버전 인스타그램 클론과 비교하여, 본 프로젝트는 **최신 프론트엔드 트렌드**를 반영하여 아키텍처와 스택을 전면 개편했습니다.

| 구분 | 🏛️ 과거 프로젝트 (Legacy) | 🚀 현재 프로젝트 (New) | 💡 변경 포인트 및 장점 |
| :--- | :--- | :--- | :--- |
| **프레임워크** | React (CRA) + React Router | **Next.js (App Router)** | CSR 렌더링 방식에서 벗어나 서버 컴포넌트(RSC)를 활용해 초기 로딩 속도(SEO 및 TTV)를 극대화했습니다. 라우팅도 파일 시스템 기반으로 직관적으로 변경되었습니다. |
| **스타일링** | Styled-components | **Tailwind CSS** | CSS-in-JS의 런타임 오버헤드를 없애고, 유틸리티 클래스 기반으로 마크업과 스타일링을 한 파일에서 빠르게(Vibe Coding) 처리하도록 변경했습니다. |
| **상태 관리** | Redux Toolkit (`ducks` 패턴) | **Zustand + TanStack Query** | 무겁고 보일러플레이트 코드가 많은 Redux 대신, 가볍고 직관적인 Zustand로 클라이언트 상태를 관리합니다. 서버 데이터는 TanStack Query에 위임하여 책임을 명확히 분리합니다. |
| **아이콘 처리** | `.svg` 파일 직접 import (`img` 태그) | **React Component 래핑 (`currentColor`)** | 기존에는 색상, 크기 변경이 제한적이었으나, SVG를 컴포넌트화하여 Tailwind의 텍스트 색상 클래스 만으로 동적 테마(다크모드, 호버 등) 제어가 가능해졌습니다. |

---

## 🎨 SVG 아이콘 처리 방식 (상세)

인스타그램에는 수많은 아이콘이 사용됩니다. 코드가 길어지고 지저분해지는 것을 막기 위해 모든 SVG 파일은 다음과 같은 방식으로 쪼개어 관리합니다.

1. **React 컴포넌트화:** `<svg>` 태그를 `app/components/icons/` 폴더 내에 개별 `.tsx` 파일(예: `home.tsx`)로 분리했습니다.
2. **타입스크립트 적용:** `type IconProps = React.SVGProps<SVGSVGElement>;` 타입을 적용하여 자동완성을 지원합니다.
3. **Tailwind CSS 연동:** `{...props}`와 `className`을 전달받도록 설계하여, 부모 컴포넌트에서 자유롭게 크기나 호버 애니메이션(`hover:opacity-70`)을 조작할 수 있습니다.
4. **currentColor 활용:** SVG 내부의 `fill`/`stroke` 속성을 `currentColor`로 두어, `text-blue-500` 같은 클래스만으로 색상이 스며들게 구성했습니다.