'use client';

import React from 'react';
import HomeIcon from '../icons/home';
import DirectIcon from '../icons/direct';
import NewArticleIcon from '../icons/new-article';
import HeartIcon from '../icons/heart';

export default function Sidebar() {
  return (
    // 전체 aside에 group을 주고 너비(w)가 72px에서 244px로 늘어나게 설정합니다.
    <aside className="fixed top-0 left-0 h-screen bg-white border-r border-[#dbdbdb] py-5 flex flex-col justify-between z-50 hidden md:flex w-[72px] hover:w-[244px] transition-all duration-300 group">
      
      <div>
        {/* 로고 영역 */}
        <div className="px-3 pt-5 pb-4 mb-4 cursor-pointer flex items-center h-[60px]">
          {/* 로고 이미지는 평소엔 투명했다가, 사이드바가 열리면 나타납니다 */}
          <div className="w-[103px] group-hover:opacity-100 transition-opacity duration-300 flex items-center">
            <img 
              src="/images/logo-hello-world.png" 
              alt="Instagram" 
              className="h-[29px] w-auto object-contain max-w-none" 
            />
          </div>
        </div>

        {/* 메인 메뉴 리스트 */}
        <div className="flex flex-col space-y-2 px-3">
          <NavItem icon={<HomeIcon className="w-6 h-6" />} text="홈" isBold />
          <NavItem icon={<SearchIcon />} text="검색" />
          <NavItem icon={<ExploreIcon />} text="탐색 탭" />
          <NavItem icon={<ReelsIcon />} text="릴스" />
          <NavItem icon={<DirectIcon className="w-6 h-6" />} text="메시지" />
          <NavItem icon={<HeartIcon className="w-6 h-6" />} text="알림" />
          <NavItem icon={<NewArticleIcon className="w-6 h-6" />} text="만들기" />
          <NavItem 
            icon={
              <div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden border border-gray-200 shrink-0">
                {/* 엑스박스 방지를 위해 일단 src를 비워두거나 기본 이미지 사용 */}
                <div className="w-full h-full bg-gray-400"></div>
              </div>
            } 
            text="프로필" 
          />
        </div>
      </div>

      {/* --- 하단: Meta 앱 및 더 보기 --- */}
      <div className="flex flex-col space-y-2 px-3">
        <NavItem icon={<MoreIcon />} text="더 보기" />
        <NavItem icon={<MetaIcon />} text="Meta의 다른 앱" />
      </div>
    </aside>
  );
}

// -------------------------------------------------------------
// UI 재사용 내부 컴포넌트
// -------------------------------------------------------------

function NavItem({ icon, text, isBold = false }: { icon: React.ReactNode; text: string; isBold?: boolean }) {
  return (
    <div className="flex items-center p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors duration-300">
      
      {/* 아이콘 (크기 고정 shrink-0) */}
      <div className="text-[#262626] shrink-0 group-hover:scale-105 transition-transform duration-200">
        {icon}
      </div>
      
      {/* 텍스트 (사이드바 호버 시 스르륵 나타남) */}
      <span 
        className={`overflow-hidden whitespace-nowrap transition-all duration-300 max-w-0 opacity-0 group-hover:max-w-[150px] group-hover:opacity-100 group-hover:ml-4 text-[16px] text-[#262626] ${isBold ? 'font-bold' : 'font-normal'}`}
      >
        {text}
      </span>
      
    </div>
  );
}

// 임시 아이콘들
const SearchIcon = () => ( <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> );
const ExploreIcon = () => ( <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 5l-9.121 4.879L5 19l9.121-4.879zM12 12v.01"></path><circle cx="12" cy="12" r="10"></circle></svg> );
const ReelsIcon = () => ( <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg> );
const MoreIcon = () => ( <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg> );
const MetaIcon = () => ( <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12c-2.21 0-4-1.79-4-4s1.79-4 4-4c1.86 0 3.41 1.28 3.86 3.03C12.31 8.78 13.86 10 16 10c2.21 0 4 1.79 4 4s-1.79 4-4 4c-1.86 0-3.41-1.28-3.86-3.03C11.69 15.22 10.14 14 8 14z"></path></svg> );