# objection-irigari 라이브러리 개발 프롬프트

## 프로젝트 개요

`objection-irigari`는 Objection.lol 스타일의 씬 플레이어를 React/Next.js에서 사용할 수 있게 해주는 npm 라이브러리입니다.

## 핵심 요구사항

### 지원 캐릭터
- `phoenix` - Phoenix Wright (변호사)
- `miles` - Miles Edgeworth (검사)
- `judge1` - Judge (기본 판사)
- `judge3` - Judge (한국 판사)

### 주요 기능
1. **nameplate 커스터마이징**: `assets.js`의 `nameplate` 값을 파라미터로 받아 동적 변경
2. **대사 커스터마이징**: `project.js`의 `frames[].text`에 `[#bgmd]` 태그 뒤에 대사 삽입
3. **캐릭터별 리소스 분리**: 각 캐릭터는 별도의 리소스 경로 사용
4. **CSS 커스터마이징**: `MuiBox-root css-4wykgb`의 `max-width`를 90%로 제한

## 프로젝트 구조

```
objection-irigari/
├── src/
│   ├── index.ts                 # 메인 진입점
│   ├── components/
│   │   ├── index.ts
│   │   └── ObjectionPlayer.tsx  # React 컴포넌트
│   ├── core/
│   │   ├── index.ts
│   │   └── engine.ts            # 에셋/프로젝트 생성 로직
│   ├── assets/
│   │   ├── index.ts             # 캐릭터 매핑
│   │   ├── phoenix.ts           # Phoenix 설정
│   │   ├── miles.ts             # Miles 설정
│   │   └── judge.ts             # Judge 설정
│   └── types/
│       └── index.ts             # 타입 정의
├── package.json
├── tsconfig.json
├── tsup.config.ts
└── README.md
```

## 사용 예시

```tsx
import { ObjectionPlayer } from 'objection-irigari';

// 기본 사용
<ObjectionPlayer
  character="miles"
  nameplate="에지워스"
  text="이의 있소!"
  pose="pointing"
/>

// 전체 옵션
<ObjectionPlayer
  character="phoenix"
  nameplate="나루호도"
  text="잠깐만요!"
  pose="thinking"
  textSpeed={35}
  autoplaySpeed={500}
  textBlipFrequency={64}
  assetsBasePath="/objection-assets"
  maxWidth="90%"
  onComplete={() => console.log('완료')}
/>
```

## 에셋 경로 구조

Next.js 프로젝트의 `public/` 폴더에 다음과 같이 배치:

```
public/objection-assets/
├── js/
│   └── export.js              # Objection.lol 플레이어 엔진
├── phoenix/
│   └── resources/
│       ├── Images/
│       │   ├── Backgrounds/
│       │   ├── Characters/1/
│       │   └── Gallery/
│       └── Audio/
├── miles/
│   └── resources/
│       ├── Images/
│       │   ├── Backgrounds/
│       │   ├── Characters/3/
│       │   └── Gallery/
│       └── Audio/
├── judge1/
│   └── resources/
│       └── ...
└── judge3/
    └── resources/
        └── ...
```

## 핵심 로직

### 1. generateAssets 함수
캐릭터별 `OBJECTION_ASSETS` 객체 생성. `basePath`를 적용하여 캐릭터별 리소스 경로 분리.

```typescript
function generateAssets(
  character: CharacterType,
  nameplate: string,
  basePath: string
): ObjectionAssets
```

### 2. generateProject 함수
`OBJECTION_PROJECT` 객체 생성. 대사 텍스트에 `[#bgmd]` 태그 자동 삽입.

```typescript
function generateProject(
  character: CharacterType,
  text: string,
  pose?: string,
  options?: Partial<ObjectionPlayerProps>
): ObjectionProject
```

### 3. generatePlayerHTML 함수
iframe에 주입할 완전한 HTML 생성. CSS로 `max-width` 제한 적용.

```typescript
function generatePlayerHTML(props: ObjectionPlayerProps): string
```

## 타입 정의

```typescript
type CharacterType = 'phoenix' | 'miles' | 'judge1' | 'judge3';

interface ObjectionPlayerProps {
  character: CharacterType;
  nameplate: string;
  text: string;
  pose?: string;
  textSpeed?: number;
  autoplaySpeed?: number;
  textBlipFrequency?: number;
  onComplete?: () => void;
  className?: string;
  style?: React.CSSProperties;
  assetsBasePath?: string;
  maxWidth?: string;
}
```

## 빌드 설정

- 빌드 도구: `tsup`
- 출력 포맷: CommonJS + ESM
- 타입 정의: 자동 생성 (.d.ts)
- peerDependencies: React 18+

```bash
npm run build    # 빌드
npm run dev      # 워치 모드
```

## 배포 방법

```bash
# GitHub에 올린 후 직접 설치
npm install github:username/objection-irigari

# npm 배포
npm publish
```

## 주의사항

1. `export.js`는 Objection.lol에서 export한 파일 필요
2. 캐릭터별 리소스(이미지, 오디오)는 별도로 준비 필요
3. 포즈 ID, 캐릭터 ID는 실제 Objection.lol 에셋에 맞춰 조정 필요
4. `'use client'` 지시문으로 Next.js App Router 호환
5. 또한, 모든 resorce(자료)들은 person-resorce에 사람별로 원래의 소스가 나누어져 있음. 이점을 유의하고, person-resorce를 사용하시오.

## 확장 가능한 부분

1. 새 캐릭터 추가: `src/assets/`에 새 파일 생성 후 `index.ts`에 등록
2. 새 포즈 추가: 각 캐릭터 설정 파일의 `poses` 배열에 추가
3. 다중 프레임 지원: `generateProject`의 `frames` 배열 확장
4. 이벤트 핸들링: `onComplete` 외 추가 콜백 지원