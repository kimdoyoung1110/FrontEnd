'use client';

import React from 'react';
import HomeIcon from '../icons/home';
import DirectIcon from '../icons/direct';
import NewArticleIcon from '../icons/new-article';
import HeartIcon from '../icons/heart';

export default function Sidebar() {
  return (
    // 왼쪽 사이드바 컨테이너: 화면 높이 100%(h-screen), 가로 고정(244px)
    <aside className="fixed top-0 left-0 h-screen w-[244px] bg-white border-r border-[#dbdbdb] px-3 py-5 flex flex-col justify-between z-50 hidden md:flex">
      
      {/* --- 상단: 로고 및 메인 네비게이션 --- */}
      <div>
        {/* 인스타그램 텍스트 로고 */}
        <div className="px-3 pt-5 pb-4 mb-4 cursor-pointer">
          <img 
            src="/images/logo-hello-world.png" 
            alt="Instagram" 
            className="h-[29px] w-auto object-contain" 
          />
        </div>

        {/* 메뉴 리스트 */}
        <div className="flex flex-col space-y-1">
          <NavItem icon={<HomeIcon className="w-6 h-6" />} text="홈" isBold />
          <NavItem icon={<SearchIcon />} text="검색" />
          <NavItem icon={<ExploreIcon />} text="탐색 탭" />
          <NavItem icon={<ReelsIcon />} text="릴스" />
          <NavItem icon={<DirectIcon className="w-6 h-6" />} text="메시지" />
          <NavItem icon={<HeartIcon className="w-6 h-6" />} text="알림" />
          <NavItem icon={<NewArticleIcon className="w-6 h-6" />} text="만들기" />
          <NavItem 
            icon={
              <div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden border border-gray-200">
                <img src="/images/logo-hello-world.png" alt="프로필" className="w-full h-full object-cover" />
              </div>
            } 
            text="프로필" 
          />
        </div>
      </div>

      {/* --- 하단: 스레드 및 더 보기 --- */}
      <div className="flex flex-col space-y-1">
        <NavItem icon={<ThreadsIcon />} text="Threads" />
        <NavItem icon={<MoreIcon />} text="더 보기" />
      </div>
    </aside>
  );
}

// -------------------------------------------------------------
// UI 재사용을 위한 내부 컴포넌트 및 임시 아이콘들
// -------------------------------------------------------------

function NavItem({ icon, text, isBold = false }: { icon: React.ReactNode; text: string; isBold?: boolean }) {
  // 첫 렌더링 직후 텍스트가 잠시 나타나다가 사라지도록 상태를 관리
  const [showText, setShowText] = React.useState(true);

  React.useEffect(() => {
    // 마운트가 완료되면 텍스트를 숨김
    setShowText(false);
  }, []);

  return (
    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors group">
      {/* 마우스를 올렸을 때 아이콘이 살짝 커지는 애니메이션 추가 */}
      <div className="group-hover:scale-110 transition-transform duration-200 text-[#262626]">
        {icon}
      </div>
      {showText && (
        <span className={`text-[16px] text-[#262626] ${isBold ? 'font-bold' : 'font-normal'}`}>
          {text}
        </span>
      )}
    </div>
  );
}

// 당장 없는 아이콘들을 위한 임시 SVG (나중에 app/components/icons 로 분리하셔도 됩니다)
const SearchIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
);
const ExploreIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 5l-9.121 4.879L5 19l9.121-4.879zM12 12v.01"></path><circle cx="12" cy="12" r="10"></circle></svg>
);
const ReelsIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
);
const ThreadsIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2v2c0 1.1-.9 2-2 2h-1c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4v5c0 1.7-1.3 3-3 3s-3-1.3-3-3v-4"></path></svg>
);
const MoreIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
);