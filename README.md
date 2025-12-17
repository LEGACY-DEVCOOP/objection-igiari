# objection-irigari

Objection.lol 스타일의 씬 플레이어를 React/Next.js에서 사용할 수 있게 해주는 npm 라이브러리입니다.

## ✨ 특징

- 🎮 Objection.lol 스타일의 캐릭터 애니메이션
- ⚛️ React/Next.js 완벽 지원
- 🎭 4가지 캐릭터 지원 (Phoenix, Miles, Judge1, Judge3)
- 🎨 커스터마이징 가능한 nameplate와 대사
- 🚀 자동 재생 옵션
- 📦 TypeScript 타입 정의 포함

## 📦 설치

```bash
npm install objection-irigari
```

## 🚀 빠른 시작

### 1. 라이브러리 설치

```bash
npm install objection-irigari
```

### 2. 에셋 파일 복사 (필수!)

설치 후 에셋 파일을 프로젝트의 `public/` 폴더로 복사해야 합니다:

```bash
# 프로젝트 루트에서 실행
cp -r node_modules/objection-irigari/public/objection-assets ./public/
```

### 3. 컴포넌트 사용

```tsx
'use client'; // Next.js App Router 사용 시

import { ObjectionPlayer } from 'objection-irigari';

export default function Page() {
  return (
    <div style={{ height: '600px' }}>
      <ObjectionPlayer
        character="phoenix"
        nameplate="나루호도"
        text="이의 있소!"
      />
    </div>
  );
}
```

## 🎮 지원 캐릭터

| 캐릭터 ID | 이름 | 설명 |
|----------|------|------|
| `phoenix` | Phoenix Wright | 변호사 (Objection! 버블 포함) |
| `miles` | Miles Edgeworth | 검사 |
| `judge1` | Judge | 기본 판사 |
| `judge3` | Judge | 판사 (Gavel Slam 포함) |

## 📖 사용 예시

### 기본 사용

```tsx
<ObjectionPlayer
  character="phoenix"
  nameplate="나루호도"
  text="이의 있소!"
/>
```

### 전체 옵션

```tsx
<ObjectionPlayer
  character="miles"
  nameplate="에지워스"
  text="그건 모순이야!"
  autoplay={true}           // 자동 재생 (기본값: true)
  textSpeed={35}            // 텍스트 속도
  autoplaySpeed={500}       // 자동 재생 속도 (ms)
  textBlipFrequency={64}    // 텍스트 효과음 빈도
  assetsBasePath="/objection-assets"  // 에셋 경로
  onComplete={() => console.log('완료')}
  className="my-player"
  style={{ height: '500px' }}
/>
```

### 자동 재생 끄기

```tsx
<ObjectionPlayer
  character="judge3"
  nameplate="재판장"
  text="조용히 하시오!"
  autoplay={false}  // 사용자가 직접 재생 버튼 클릭
/>
```

## 📋 Props

| Prop | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `character` | `'phoenix' \| 'miles' \| 'judge1' \| 'judge3'` | 필수 | 캐릭터 선택 |
| `nameplate` | `string` | 필수 | 캐릭터 이름표 텍스트 |
| `text` | `string` | 필수 | 대사 텍스트 |
| `pose` | `string` | - | 포즈 ID (선택사항) |
| `autoplay` | `boolean` | `true` | 자동 재생 여부 |
| `textSpeed` | `number` | `35` | 텍스트 표시 속도 |
| `autoplaySpeed` | `number` | `500` | 자동 재생 속도 (ms) |
| `textBlipFrequency` | `number` | `64` | 텍스트 효과음 빈도 |
| `onComplete` | `() => void` | - | 재생 완료 시 콜백 |
| `className` | `string` | - | 추가 CSS 클래스 |
| `style` | `React.CSSProperties` | - | 인라인 스타일 |
| `assetsBasePath` | `string` | `'/objection-assets'` | 에셋 기본 경로 |

## 🔧 Next.js 설정

### App Router

```tsx
'use client';

import { ObjectionPlayer } from 'objection-irigari';

export default function Page() {
  return (
    <div style={{ height: '600px' }}>
      <ObjectionPlayer
        character="phoenix"
        nameplate="Phoenix Wright"
        text="Objection!"
      />
    </div>
  );
}
```

### Pages Router

```tsx
import { ObjectionPlayer } from 'objection-irigari';

export default function Home() {
  return (
    <div style={{ height: '600px' }}>
      <ObjectionPlayer
        character="miles"
        nameplate="Edgeworth"
        text="That's a contradiction!"
      />
    </div>
  );
}
```

## 🎨 고급 사용법

### 커스텀 에셋 경로

```tsx
<ObjectionPlayer
  character="phoenix"
  nameplate="나루호도"
  text="이의 있소!"
  assetsBasePath="/custom-path/objection"
/>
```

### 프로그래밍 방식으로 사용

```tsx
import { generateAssets, generateProject } from 'objection-irigari';

// 에셋 생성
const assets = generateAssets('phoenix', '나루호도', '/objection-assets');

// 프로젝트 생성
const project = generateProject('phoenix', '이의 있소!');
```

## 📁 에셋 구조

설치 후 다음과 같은 에셋이 포함됩니다:

```
node_modules/objection-irigari/public/objection-assets/
├── Pheonix/          # Phoenix Wright
│   └── resources/
│       ├── Images/
│       │   ├── Backgrounds/
│       │   ├── Characters/1/
│       │   ├── Bubbles/
│       │   └── Gallery/
│       └── Audio/
├── Miles/            # Miles Edgeworth
│   └── resources/
├── judge1/           # Judge (default)
│   └── resources/
└── judgeslam3/       # Judge (Gavel Slam)
    └── resources/
```

## 🐛 문제 해결

### 에셋이 로드되지 않는 경우

1. 에셋을 `public/` 폴더로 복사했는지 확인
   ```bash
   cp -r node_modules/objection-irigari/public/objection-assets ./public/
   ```

2. 브라우저 콘솔에서 404 에러 확인

3. `assetsBasePath` prop 확인
   ```tsx
   <ObjectionPlayer assetsBasePath="/objection-assets" ... />
   ```

### TypeScript 에러

```tsx
import type { CharacterType, ObjectionPlayerProps } from 'objection-irigari';
```

### 애니메이션이 자동 재생되지 않는 경우

`autoplay` prop이 `true`인지 확인 (기본값)
```tsx
<ObjectionPlayer autoplay={true} ... />
```

## 🛠️ 개발

```bash
# 의존성 설치
npm install

# 개발 모드 (워치 모드)
npm run dev

# 빌드
npm run build

# 타입 체크
npm run typecheck
```

## 📜 라이센스

MIT

## 🙏 기여

이슈와 PR을 환영합니다!

## ⚠️ 주의사항

1. 에셋 파일(이미지, 오디오)은 **반드시** `public/` 폴더로 복사해야 합니다
2. Next.js App Router 사용 시 `'use client'` 지시문이 필요합니다
3. iframe을 사용하므로 높이를 지정해야 제대로 표시됩니다

## 🔗 관련 링크

- [Objection.lol](https://objection.lol) - 원본 플레이어
- [GitHub Repository](https://github.com/your-username/objection-irigari)
