# objection-irigari 설정 가이드

이 가이드는 Next.js 프로젝트에서 `objection-irigari` 라이브러리를 설정하는 방법을 안내합니다.

## 1. 라이브러리 설치

```bash
npm install objection-irigari
```

또는 GitHub에서 직접 설치:

```bash
npm install github:username/objection-irigari
```

## 2. 에셋 폴더 구조 준비

Next.js 프로젝트의 `public/` 폴더에 다음 구조로 에셋을 복사하세요:

```
your-nextjs-project/
└── public/
    └── objection-assets/
        ├── js/
        │   └── export.js                    # Objection.lol 플레이어 엔진
        ├── Pheonix/                          # Phoenix Wright
        │   └── resources/
        │       ├── Images/
        │       │   ├── Backgrounds/
        │       │   │   └── Preset/
        │       │   │       └── [PW] Defense.jpg
        │       │   ├── Backgrounds/Preset_Desk/
        │       │   │   └── [PW] Defense.png
        │       │   ├── Characters/
        │       │   │   └── 1/
        │       │   │       ├── icon.png
        │       │   │       ├── Slam.gif
        │       │   │       ├── Slam_Stand.gif
        │       │   │       └── Slam_Talk.gif
        │       │   ├── Bubbles/
        │       │   │   └── 1.png
        │       │   ├── Gallery/
        │       │   │   └── 1.png
        │       │   └── PoseIcons/
        │       │       └── 2.png
        │       └── Audio/
        │           ├── blip.wav
        │           ├── deskslam.mp3
        │           └── Vocal/
        │               └── 1/
        │                   └── 1.mp3          # Objection! sound
        ├── Miles/                             # Miles Edgeworth
        │   └── resources/
        │       ├── Images/
        │       │   ├── Backgrounds/
        │       │   │   └── Preset/
        │       │   │       └── [PW] Prosecution.jpg
        │       │   ├── Backgrounds/Preset_Desk/
        │       │   │   └── [PW] Prosecution.png
        │       │   ├── Characters/
        │       │   │   └── 3/
        │       │   │       ├── icon.png
        │       │   │       ├── Arms_Crossed.gif
        │       │   │       └── Arms_Crossed_Talk.gif
        │       │   └── Gallery/
        │       │       └── 3.png
        │       └── Audio/
        │           └── blip.wav
        ├── judge1/                            # Judge (default)
        │   └── resources/
        │       ├── Images/
        │       │   ├── Backgrounds/
        │       │   │   └── Preset/
        │       │   │       └── [PW] Judge.jpg
        │       │   ├── Backgrounds/Preset_Desk/
        │       │   │   └── [PW] Judge.png
        │       │   ├── Characters/
        │       │   │   └── 10/
        │       │   │       ├── icon.png
        │       │   │       ├── Stand.gif
        │       │   │       └── Stand_Talk.gif
        │       │   └── Gallery/
        │       │       └── 10.png
        │       └── Audio/
        │           └── blip.wav
        └── judge3/                            # Judge (Korean version)
            └── resources/
                └── (Same structure as judge1)
```

## 3. person-resource에서 에셋 복사하기

이 저장소의 `person-resource/` 폴더에 각 캐릭터별 리소스가 준비되어 있습니다.

### 자동 복사 스크립트 (선택사항)

```bash
# person-resource 폴더를 public/objection-assets로 복사
cp -r person-resource/* public/objection-assets/
```

### 수동 복사

1. `person-resource/Pheonix/` → `public/objection-assets/Pheonix/`
2. `person-resource/Miles/` → `public/objection-assets/Miles/`
3. `person-resource/judge1/` → `public/objection-assets/judge1/`
4. `person-resource/judge3/` → `public/objection-assets/judge3/`

## 4. export.js 파일 준비

Objection.lol 플레이어 엔진 파일이 필요합니다:

1. https://objection.lol 방문
2. 프로젝트 생성 후 Export
3. `export.js` 파일을 `public/objection-assets/js/export.js`에 저장

또는 `person-resource/` 폴더의 기존 `js/export.js` 파일을 사용하세요.

## 5. Next.js 앱에서 사용하기

### App Router 사용

```tsx
// app/page.tsx
'use client';

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

### Pages Router 사용

```tsx
// pages/index.tsx
import { ObjectionPlayer } from 'objection-irigari';

export default function Home() {
  return (
    <div style={{ height: '600px' }}>
      <ObjectionPlayer
        character="miles"
        nameplate="에지워스"
        text="그건 모순이야!"
      />
    </div>
  );
}
```

## 6. 문제 해결

### 에셋이 로드되지 않는 경우

1. 브라우저 콘솔에서 404 에러 확인
2. 파일 경로가 정확한지 확인
3. `assetsBasePath` prop을 확인

```tsx
<ObjectionPlayer
  character="phoenix"
  nameplate="나루호도"
  text="이의 있소!"
  assetsBasePath="/objection-assets"  // 기본값
/>
```

### TypeScript 에러가 발생하는 경우

```tsx
// 타입을 명시적으로 import
import type { CharacterType } from 'objection-irigari';

const character: CharacterType = 'phoenix';
```

### iframe sandbox 경고

iframe의 `sandbox` 속성으로 인해 일부 기능이 제한될 수 있습니다. 이는 보안을 위한 것입니다.

## 7. 프로덕션 배포

빌드 전에 모든 에셋이 `public/` 폴더에 있는지 확인하세요:

```bash
npm run build
```

Next.js는 `public/` 폴더의 파일을 자동으로 정적 파일로 제공합니다.

## 8. 고급 설정

### 커스텀 에셋 경로

CDN을 사용하거나 다른 경로를 사용하는 경우:

```tsx
<ObjectionPlayer
  character="phoenix"
  nameplate="나루호도"
  text="이의 있소!"
  assetsBasePath="https://cdn.example.com/objection-assets"
/>
```

### 동적 캐릭터 변경

```tsx
'use client';

import { useState } from 'react';
import { ObjectionPlayer, CharacterType } from 'objection-irigari';

export default function DynamicPlayer() {
  const [character, setCharacter] = useState<CharacterType>('phoenix');
  const [text, setText] = useState('이의 있소!');

  return (
    <div>
      <select onChange={(e) => setCharacter(e.target.value as CharacterType)}>
        <option value="phoenix">Phoenix</option>
        <option value="miles">Miles</option>
        <option value="judge1">Judge 1</option>
        <option value="judge3">Judge 3</option>
      </select>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="대사를 입력하세요"
      />

      <div style={{ height: '600px' }}>
        <ObjectionPlayer
          character={character}
          nameplate="캐릭터"
          text={text}
        />
      </div>
    </div>
  );
}
```

## 도움이 필요하신가요?

이슈를 열어주세요: https://github.com/username/objection-irigari/issues
