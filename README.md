# objection-irigari

Objection.lol 스타일의 씬 플레이어를 React/Next.js에서 사용할 수 있게 해주는 npm 라이브러리입니다.

사용하기전, 이 면책조항을 꼭 읽어야합니다.
## DISCLAIMER / 면책조항

---

### English

#### IMPORTANT LEGAL DISCLAIMER

**READ THIS DISCLAIMER CAREFULLY BEFORE USING THIS SOFTWARE**

This project, "objection-irigari," is an unofficial, fan-made, non-commercial project created solely for educational purposes as part of a high school academic assignment in South Korea.

#### Non-Commercial Declaration

1. **Educational Purpose Only**: This software was developed exclusively as a school performance assessment project by a high school student. It is not intended for any commercial use, profit generation, or business purposes whatsoever.

2. **No Affiliation**: This project is NOT affiliated with, endorsed by, sponsored by, or in any way officially connected with CAPCOM Co., Ltd., the creators of the "Ace Attorney" (逆転裁判) series, or Objection.lol, or any of their subsidiaries or affiliates.

3. **Fan-Made Content**: All character references, visual styles, and game-related elements are the intellectual property of their respective owners, primarily CAPCOM Co., Ltd. This project is a fan-made tribute created out of appreciation for the original works.

4. **One-Time Academic Project**: This is a one-time, temporary project submitted for academic evaluation. It is not intended for long-term maintenance, updates, or distribution beyond educational demonstration purposes.

#### Prohibition of Commercial Use

**BY USING, DOWNLOADING, FORKING, OR DISTRIBUTING THIS SOFTWARE, YOU AGREE TO THE FOLLOWING TERMS:**

1. **Absolute Prohibition**: Commercial use of this software is STRICTLY PROHIBITED. This includes, but is not limited to:
   - Selling this software or any derivative works
   - Using this software in any revenue-generating application
   - Incorporating this software into commercial products or services
   - Using this software for advertising or promotional purposes for commercial entities
   - Monetizing content created using this software
   - Using this software in any context where money is exchanged

2. **No Commercial Derivatives**: You may NOT create derivative works based on this software for commercial purposes. Any modifications, adaptations, or works based on this project must also remain strictly non-commercial.

3. **Enforcement**: Any individual, organization, or entity found to be using this software for commercial purposes will be in violation of these terms. The author reserves the right to request immediate cessation of such use and removal of any commercially-deployed instances.

4. **Reporting Violations**: If you discover any commercial use of this software, please report it immediately by opening an issue on the GitHub repository.

#### Liability Waiver

1. **As-Is Provision**: This software is provided "AS IS" without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and non-infringement.

2. **No Liability**: In no event shall the author be liable for any claim, damages, or other liability, whether in an action of contract, tort, or otherwise, arising from, out of, or in connection with the software or the use or other dealings in the software.

3. **User Responsibility**: Users assume all responsibility and risk for the use of this software. The author is not responsible for any consequences resulting from the use or misuse of this software.

4. **Indemnification**: By using this software, you agree to indemnify and hold harmless the author from any claims, damages, losses, or expenses arising from your use of the software or violation of these terms.

#### Copyright Notice

All "Ace Attorney" characters, names, and related indicia are trademarks of and © CAPCOM Co., Ltd. All rights reserved. This fan project makes no claim to these properties and is created purely for educational and non-commercial purposes.

#### Agreement

By accessing, downloading, using, or contributing to this project, you acknowledge that you have read, understood, and agree to be bound by this disclaimer. If you do not agree with these terms, do not use this software.

**This disclaimer is effective as of the date of first publication and applies to all versions of this software.**

---

### 한국어

#### 중요 법적 면책조항

**본 소프트웨어를 사용하기 전에 이 면책조항을 주의 깊게 읽어주십시오**

본 프로젝트 "objection-irigari"는 대한민국 고등학교 학업 과제의 일환으로 교육 목적으로만 제작된 비공식적, 팬 제작, 비상업적 프로젝트입니다.

#### 비상업적 선언

1. **교육 목적 전용**: 본 소프트웨어는 고등학생의 학교 수행평가 프로젝트로서 개발되었습니다. 어떠한 상업적 사용, 수익 창출 또는 사업 목적으로도 의도되지 않았습니다.

2. **무관계 선언**: 본 프로젝트는 주식회사 캡콤(CAPCOM Co., Ltd.), "역전재판" 시리즈 제작자, Objection.lol 또는 그들의 자회사나 계열사와 어떠한 제휴, 보증, 후원 또는 공식적 관계도 없습니다.

3. **팬 제작 콘텐츠**: 모든 캐릭터 참조, 시각적 스타일 및 게임 관련 요소는 해당 소유자, 주로 주식회사 캡콤의 지적 재산입니다. 본 프로젝트는 원작에 대한 존경의 표시로 제작된 팬 제작 작품입니다.

4. **일회성 학술 프로젝트**: 이것은 학업 평가를 위해 제출된 일회성, 임시 프로젝트입니다. 교육적 시연 목적 외의 장기적인 유지보수, 업데이트 또는 배포는 의도되지 않았습니다.

#### 상업적 사용 금지

**본 소프트웨어를 사용, 다운로드, 포크 또는 배포함으로써 귀하는 다음 조건에 동의하는 것입니다:**

1. **절대적 금지**: 본 소프트웨어의 상업적 사용은 엄격히 금지됩니다. 이에는 다음이 포함되지만 이에 국한되지 않습니다:
   - 본 소프트웨어 또는 파생 작품의 판매
   - 수익 창출 애플리케이션에서의 본 소프트웨어 사용
   - 상업적 제품이나 서비스에 본 소프트웨어 통합
   - 상업적 주체의 광고 또는 홍보 목적으로 본 소프트웨어 사용
   - 본 소프트웨어를 사용하여 제작된 콘텐츠의 수익화
   - 금전적 거래가 발생하는 어떠한 맥락에서의 본 소프트웨어 사용

2. **상업적 파생물 금지**: 상업적 목적으로 본 소프트웨어에 기반한 파생 작품을 제작할 수 없습니다. 본 프로젝트에 기반한 모든 수정, 각색 또는 작품도 엄격하게 비상업적이어야 합니다.

3. **집행**: 본 소프트웨어를 상업적 목적으로 사용하는 것이 발견된 개인, 조직 또는 단체는 이 조건을 위반한 것으로 간주됩니다. 저작자는 그러한 사용의 즉각적인 중단과 상업적으로 배포된 모든 인스턴스의 제거를 요청할 권리를 보유합니다.

4. **위반 신고**: 본 소프트웨어의 상업적 사용을 발견하시면 GitHub 저장소에서 이슈를 열어 즉시 신고해 주십시오.

#### 책임의 면제

1. **있는 그대로 제공**: 본 소프트웨어는 상품성, 특정 목적에의 적합성 및 비침해에 대한 보증을 포함하되 이에 국한되지 않는 명시적 또는 묵시적 어떠한 종류의 보증도 없이 "있는 그대로" 제공됩니다.

2. **책임 부인**: 어떠한 경우에도 저작자는 계약, 불법행위 또는 기타 행위 여부와 관계없이 본 소프트웨어 또는 본 소프트웨어의 사용이나 기타 거래로 인해 발생하는 어떠한 청구, 손해 또는 기타 책임에 대해서도 책임을 지지 않습니다.

3. **사용자 책임**: 사용자는 본 소프트웨어 사용에 대한 모든 책임과 위험을 부담합니다. 저작자는 본 소프트웨어의 사용 또는 오용으로 인한 어떠한 결과에 대해서도 책임을 지지 않습니다.

4. **면책**: 본 소프트웨어를 사용함으로써 귀하는 본 소프트웨어의 사용 또는 이 조건의 위반으로 인해 발생하는 모든 청구, 손해, 손실 또는 비용으로부터 저작자를 면책하고 손해를 입히지 않을 것에 동의합니다.

#### 저작권 고지

모든 "역전재판" 캐릭터, 이름 및 관련 표시는 주식회사 캡콤의 상표 및 저작물입니다. 모든 권리 보유. 이 팬 프로젝트는 이러한 자산에 대한 어떠한 권리도 주장하지 않으며 순수하게 교육적 및 비상업적 목적으로 제작되었습니다.

#### 동의

본 프로젝트에 접근, 다운로드, 사용 또는 기여함으로써 귀하는 이 면책조항을 읽고, 이해하고, 이에 구속되는 것에 동의했음을 인정합니다. 이 조건에 동의하지 않으시면 본 소프트웨어를 사용하지 마십시오.

**본 면책조항은 최초 공개일로부터 유효하며 본 소프트웨어의 모든 버전에 적용됩니다.**

---

*Last Updated: 2025*

*Contact: Please open an issue on GitHub for any concerns or violation reports.*
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
