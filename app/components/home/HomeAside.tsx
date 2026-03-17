import React from 'react';

export default function HomeAside() {
  return (
    // lg(데스크톱) 화면에서만 보이고, 너비는 319px 고정
    <div className="w-[319px] hidden lg:block pt-8 pl-8">
      
      {/* 1. 내 프로필 */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4 cursor-pointer">
          <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-200">
            <img src="/images/logo-hello-world.png" alt="내 프로필" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-sm font-semibold text-[#262626]">kimdoyoung1110</div>
            <div className="text-sm text-gray-500">Kim Do-young</div>
          </div>
        </div>
        <button className="text-xs font-bold text-blue-500 hover:text-blue-900">전환</button>
      </div>

      {/* 2. 회원님을 위한 추천 */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-gray-500">회원님을 위한 추천</span>
        <button className="text-xs font-bold text-[#262626] hover:text-gray-500">모두 보기</button>
      </div>
      
      <div className="flex flex-col space-y-4 mb-8">
        <RecommendItem username="basil_park" subtext="Instagram 신규 가입" />
        <RecommendItem username="dev_road" subtext="회원님을 위한 추천" />
        <RecommendItem username="techeer_bootcamp" subtext="인기" />
      </div>

      {/* 3. 푸터 및 저작권 문구 */}
      <div className="text-[11px] text-[#c7c7c7] leading-4 font-normal">
        <p className="mb-4 cursor-pointer">
          소개 · 도움말 · 홍보 센터 · API · 채용 정보 · 개인정보처리방침 · 약관 · 위치 · 언어 · Meta Verified
        </p>
        <p>© 2026 INSTAGRAM FROM META</p>
      </div>
    </div>
  );
}

// 추천 계정 컴포넌트
function RecommendItem({ username, subtext }: { username: string, subtext: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="w-11 h-11 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
        </div>
        <div>
          <div className="text-sm font-semibold text-[#262626]">{username}</div>
          <div className="text-xs text-gray-500">{subtext}</div>
        </div>
      </div>
      <button className="text-xs font-bold text-blue-500 hover:text-blue-900">팔로우</button>
    </div>
  );
}