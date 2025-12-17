#!/bin/bash

echo "🚀 objection-irigari 빠른 테스트 스크립트"
echo "=========================================="
echo ""

# 현재 디렉토리 저장
LIBRARY_DIR="/Users/yui/PersonalProjects/GITBLAME/objection-igiari "
TEST_DIR="$HOME/Documents/test-objection-$(date +%s)"

echo "📦 1단계: 라이브러리 빌드 중..."
cd "$LIBRARY_DIR"
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 빌드 실패!"
    exit 1
fi

echo "✅ 빌드 완료!"
echo ""

echo "🔗 2단계: npm link 생성 중..."
npm link

echo ""
echo "📁 3단계: 테스트 프로젝트 생성 중..."
echo "위치: $TEST_DIR"

npx create-next-app@latest "$TEST_DIR" \
  --typescript \
  --eslint \
  --app \
  --no-tailwind \
  --src-dir \
  --no-import-alias \
  --use-npm

if [ $? -ne 0 ]; then
    echo "❌ Next.js 프로젝트 생성 실패!"
    exit 1
fi

echo ""
echo "🔗 4단계: 라이브러리 링크 중..."
cd "$TEST_DIR"
npm link objection-irigari

echo ""
echo "📋 5단계: 에셋 복사 중..."
mkdir -p public/objection-assets
cp -r "$LIBRARY_DIR/person-resource/"* public/objection-assets/

echo ""
echo "📝 6단계: 테스트 페이지 생성 중..."

cat > src/app/page.tsx << 'EOF'
'use client';

import { ObjectionPlayer } from 'objection-irigari';
import { useState } from 'react';

export default function Home() {
  const [character, setCharacter] = useState<'phoenix' | 'miles' | 'judge1' | 'judge3'>('phoenix');
  const [text, setText] = useState('이의 있소!');
  const [nameplate, setNameplate] = useState('나루호도');

  return (
    <main style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '20px' }}>🎮 Objection Player 테스트</h1>

      <div style={{ marginBottom: '30px', padding: '20px', background: '#f5f5f5', borderRadius: '8px' }}>
        <h2 style={{ marginBottom: '15px' }}>설정</h2>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>캐릭터:</label>
          <select
            value={character}
            onChange={(e) => setCharacter(e.target.value as any)}
            style={{ padding: '8px', width: '200px' }}
          >
            <option value="phoenix">Phoenix Wright</option>
            <option value="miles">Miles Edgeworth</option>
            <option value="judge1">Judge</option>
            <option value="judge3">Judge (Korean)</option>
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>이름표:</label>
          <input
            type="text"
            value={nameplate}
            onChange={(e) => setNameplate(e.target.value)}
            style={{ padding: '8px', width: '300px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>대사:</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ padding: '8px', width: '100%', minHeight: '80px' }}
          />
        </div>
      </div>

      <div style={{
        height: '600px',
        border: '2px solid #333',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        <ObjectionPlayer
          character={character}
          nameplate={nameplate}
          text={text}
          onComplete={() => console.log('✅ 애니메이션 완료!')}
        />
      </div>

      <div style={{ marginTop: '20px', padding: '15px', background: '#e8f5e9', borderRadius: '8px' }}>
        <h3>✅ 테스트가 성공적으로 실행되었습니다!</h3>
        <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
          <li>캐릭터를 변경해보세요</li>
          <li>대사를 입력해보세요</li>
          <li>브라우저 콘솔을 열어 로그를 확인하세요</li>
        </ul>
      </div>
    </main>
  );
}
EOF

echo ""
echo "✅ 모든 설정이 완료되었습니다!"
echo ""
echo "=========================================="
echo "🎉 테스트 프로젝트가 준비되었습니다!"
echo "=========================================="
echo ""
echo "📂 프로젝트 위치: $TEST_DIR"
echo ""
echo "실행하려면 다음 명령어를 입력하세요:"
echo ""
echo "  cd $TEST_DIR"
echo "  npm run dev"
echo ""
echo "그리고 브라우저에서 http://localhost:3000 을 여세요!"
echo ""
echo "----------------------------------------"
echo "💡 팁:"
echo "  - 라이브러리를 수정한 경우:"
echo "    cd '$LIBRARY_DIR' && npm run build"
echo "    그 다음 개발 서버 재시작"
echo ""
echo "  - 링크 해제:"
echo "    cd $TEST_DIR && npm unlink objection-irigari"
echo "    cd '$LIBRARY_DIR' && npm unlink"
echo "=========================================="
