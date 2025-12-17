/**
 * Example usage of objection-irigari library
 *
 * This file shows how to use the ObjectionPlayer component in your React/Next.js app
 */

'use client';

import { ObjectionPlayer } from 'objection-irigari';

export default function ExamplePage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>objection-irigari 사용 예제</h1>

      {/* Example 1: Phoenix Wright */}
      <section style={{ marginBottom: '40px' }}>
        <h2>1. Phoenix Wright (피닉스 라이트)</h2>
        <div style={{ height: '500px', border: '1px solid #ccc' }}>
          <ObjectionPlayer
            character="phoenix"
            nameplate="나루호도"
            text="이의 있소!"
            onComplete={() => console.log('Phoenix animation completed!')}
          />
        </div>
      </section>

      {/* Example 2: Miles Edgeworth */}
      <section style={{ marginBottom: '40px' }}>
        <h2>2. Miles Edgeworth (마일즈 에지워스)</h2>
        <div style={{ height: '500px', border: '1px solid #ccc' }}>
          <ObjectionPlayer
            character="miles"
            nameplate="에지워스"
            text="그건 모순이야!"
            onComplete={() => console.log('Miles animation completed!')}
          />
        </div>
      </section>

      {/* Example 3: Judge */}
      <section style={{ marginBottom: '40px' }}>
        <h2>3. Judge (판사)</h2>
        <div style={{ height: '500px', border: '1px solid #ccc' }}>
          <ObjectionPlayer
            character="judge1"
            nameplate="재판장"
            text="조용히 하시오!"
            onComplete={() => console.log('Judge animation completed!')}
          />
        </div>
      </section>

      {/* Example 4: Custom settings */}
      <section style={{ marginBottom: '40px' }}>
        <h2>4. 커스텀 설정 예제</h2>
        <div style={{ height: '500px', border: '1px solid #ccc' }}>
          <ObjectionPlayer
            character="phoenix"
            nameplate="Phoenix Wright"
            text="Wait! I have evidence!"
            textSpeed={50}
            autoplaySpeed={300}
            maxWidth="95%"
            onComplete={() => alert('Animation finished!')}
          />
        </div>
      </section>
    </div>
  );
}
