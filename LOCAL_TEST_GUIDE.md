# 로컬에서 objection-irigari 테스트하기

## 방법 1: npm link (추천)

### 1단계: 라이브러리 빌드 및 링크

```bash
cd /Users/yui/PersonalProjects/GITBLAME/objection-igiari\

# 빌드
npm run build

# 전역 링크 생성
npm link
```

### 2단계: 테스트 Next.js 프로젝트 생성

```bash
# 원하는 위치로 이동
cd ~/Documents

# Next.js 프로젝트 생성
npx create-next-app@latest test-objection
# ✓ TypeScript? Yes
# ✓ ESLint? Yes
# ✓ Tailwind CSS? No (선택)
# ✓ src/ directory? Yes
# ✓ App Router? Yes
# ✓ import alias? No

cd test-objection
```

### 3단계: 라이브러리 링크

```bash
# test-objection 폴더에서 실행
npm link objection-irigari
```

### 4단계: 에셋 복사

```bash
# person-resource를 public으로 복사
mkdir -p public/objection-assets
cp -r /Users/yui/PersonalProjects/GITBLAME/objection-igiari\ /person-resource/* public/objection-assets/
```

### 5단계: 테스트 페이지 작성

`src/app/page.tsx` 파일을 다음과 같이 수정:

```tsx
'use client';

import { ObjectionPlayer } from 'objection-irigari';

export default function Home() {
  return (
    <main style={{ padding: '20px' }}>
      <h1>Objection Player Test</h1>

      <div style={{ height: '600px', border: '2px solid #ccc', marginTop: '20px' }}>
        <ObjectionPlayer
          character="phoenix"
          nameplate="나루호도"
          text="이의 있소!"
          onComplete={() => console.log('애니메이션 완료!')}
        />
      </div>
    </main>
  );
}
```

### 6단계: 실행

```bash
npm run dev
```

브라우저에서 http://localhost:3000 접속

### 7단계: 라이브러리 수정 후 재테스트

라이브러리를 수정한 경우:

```bash
# objection-irigari 폴더에서
cd /Users/yui/PersonalProjects/GITBLAME/objection-igiari\
npm run build

# test-objection 폴더에서
cd ~/Documents/test-objection
# 개발 서버 재시작 (Ctrl+C 후 다시 npm run dev)
```

### 링크 해제 (테스트 완료 후)

```bash
# test-objection 폴더에서
npm unlink objection-irigari

# objection-irigari 폴더에서
cd /Users/yui/PersonalProjects/GITBLAME/objection-igiari\
npm unlink
```

---

## 방법 2: npm pack (더 간단)

### 1단계: tarball 생성

```bash
cd /Users/yui/PersonalProjects/GITBLAME/objection-igiari\
npm run build
npm pack
# 생성된 파일: objection-irigari-0.1.0.tgz
```

### 2단계: Next.js 프로젝트에서 설치

```bash
cd ~/Documents/test-objection
npm install /Users/yui/PersonalProjects/GITBLAME/objection-igiari\ /objection-irigari-0.1.0.tgz
```

나머지는 방법 1과 동일합니다.

---

## 방법 3: 파일 경로로 직접 설치

### package.json에 추가

```json
{
  "dependencies": {
    "objection-irigari": "file:../objection-igiari "
  }
}
```

```bash
npm install
```

---

## 빠른 테스트 스크립트

아래 스크립트를 복사해서 실행하면 자동으로 테스트 환경이 구성됩니다:

```bash
#!/bin/bash

# 1. 라이브러리 빌드
cd "/Users/yui/PersonalProjects/GITBLAME/objection-igiari "
npm run build
npm link

# 2. 테스트 프로젝트 생성
cd ~/Documents
npx create-next-app@latest test-objection --typescript --eslint --app --no-tailwind --src-dir --no-import-alias

# 3. 링크 및 에셋 복사
cd test-objection
npm link objection-irigari
mkdir -p public/objection-assets
cp -r "/Users/yui/PersonalProjects/GITBLAME/objection-igiari /person-resource/"* public/objection-assets/

# 4. 테스트 페이지 생성
cat > src/app/page.tsx << 'EOF'
'use client';

import { ObjectionPlayer } from 'objection-irigari';

export default function Home() {
  return (
    <main style={{ padding: '20px' }}>
      <h1>Objection Player Test</h1>
      <div style={{ height: '600px', border: '2px solid #ccc', marginTop: '20px' }}>
        <ObjectionPlayer
          character="phoenix"
          nameplate="나루호도"
          text="이의 있소!"
        />
      </div>
    </main>
  );
}
EOF

# 5. 실행
npm run dev
```

위 스크립트를 `quick-test.sh`로 저장 후:

```bash
chmod +x quick-test.sh
./quick-test.sh
```
