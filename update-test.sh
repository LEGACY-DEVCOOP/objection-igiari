#!/bin/bash

echo "🔄 라이브러리 업데이트 및 테스트 프로젝트 재배포"
echo "=================================================="
echo ""

# 1. 라이브러리 빌드
echo "📦 1단계: 라이브러리 빌드 중..."
cd "/Users/yui/PersonalProjects/GITBLAME/objection-igiari "
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 빌드 실패!"
    exit 1
fi

# 2. 패키지 생성
echo ""
echo "📦 2단계: tarball 생성 중..."
npm pack

# 3. 테스트 프로젝트 업데이트
echo ""
echo "📦 3단계: 테스트 프로젝트 업데이트 중..."
cd ~/Documents/test-objection-1765947117
npm install "/Users/yui/PersonalProjects/GITBLAME/objection-igiari /objection-irigari-0.1.0.tgz"

# 4. 캐시 정리
echo ""
echo "🧹 4단계: 캐시 정리 중..."
rm -rf .next

echo ""
echo "✅ 업데이트 완료!"
echo ""
echo "=================================================="
echo "개발 서버를 시작하려면:"
echo ""
echo "  cd ~/Documents/test-objection-1765947117"
echo "  npm run dev"
echo ""
echo "=================================================="
