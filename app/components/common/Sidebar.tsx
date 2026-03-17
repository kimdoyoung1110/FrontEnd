'use client';

import React, { useState } from 'react';
import HomeIcon from '../icons/home';
import DirectIcon from '../icons/direct';
import NewArticleIcon from '../icons/new-article';
import HeartIcon from '../icons/heart';

export default function Sidebar() {
  // 모바일 헤더 로고 클릭 시 나오는 드롭다운 상태
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      {/* ==========================================
          📱 1. 모바일/태블릿 전용 상단 헤더
      ========================================== */}
      <header className="md:hidden fixed top-0 left-0 w-full h-[60px] bg-white border-b border-[#dbdbdb] flex justify-between items-center px-4 z-50">
        
        {/* 로고 & 드롭다운 */}
        <div className="relative">
          <div 
            className="flex items-center cursor-pointer gap-1"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <img src="/images/logo-hello-world.png" alt="Instagram" className="h-[29px] object-contain mt-1" />
            <DownChevronIcon />
          </div>
          
          {/* 드롭다운 메뉴 (팔로잉, 즐겨찾기) */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-lg border border-gray-100 w-32 flex flex-col z-50 py-1">
              <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm font-semibold flex justify-between items-center">
                팔로잉 <FollowingsIcon />
              </div>
              <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm font-semibold flex justify-between items-center">
                즐겨찾기 <FavoritesIcon />
              </div>
            </div>
          )}
        </div>

        {/* 돋보기 아이콘이 포함된 검색창 */}
        <div className="relative flex items-center">
          <div className="absolute left-3 text-gray-400 pointer-events-none">
            <SearchIcon className="w-4 h-4" />
          </div>
          <input 
            type="text" 
            placeholder="검색" 
            className="w-[140px] sm:w-[200px] h-9 bg-[#efefef] rounded-lg pl-9 pr-3 text-sm outline-none placeholder-gray-500 focus:bg-transparent focus:border focus:border-gray-300"
          />
        </div>
      </header>

      {/* ==========================================
          📱 2. 모바일/태블릿 전용 하단 바텀바 (순서 반영)
      ========================================== */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full h-[50px] bg-white border-t border-[#dbdbdb] flex justify-around items-center z-50">
        <HomeIcon className="w-6 h-6 text-[#262626] cursor-pointer" />
        <SearchIcon className="w-6 h-6 text-[#262626] cursor-pointer" />
        <NewArticleIcon className="w-6 h-6 text-[#262626] cursor-pointer" />
        <ReelsIcon className="w-6 h-6 text-[#262626] cursor-pointer" />
        <div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden border border-gray-200 cursor-pointer">
          <img src="/images/logo-hello-world.png" alt="프로필" className="w-full h-full object-cover" />
        </div>
      </nav>

      {/* ==========================================
          💻 3. 데스크톱 전용 사이드바 (애니메이션 정상화)
      ========================================== */}
      <aside className="hidden md:flex fixed top-0 left-0 h-screen bg-white border-r border-[#dbdbdb] py-5 flex-col justify-between z-50 w-[72px] hover:w-[244px] transition-[width] duration-300 group">
        
        <div className="flex flex-col space-y-2 px-3">
          {/* 로고 영역 */}
          <div className="px-3 pt-5 pb-4 mb-4 cursor-pointer flex items-center h-[60px] overflow-hidden">
            <div className="w-[103px] whitespace-nowrap shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
              <img src="/images/logo-hello-world.png" alt="Instagram" className="h-[29px] w-auto object-contain max-w-none" />
            </div>
          </div>

          <NavItem icon={<HomeIcon className="w-6 h-6" />} text="홈" isBold />
          <NavItem icon={<SearchIcon className="w-6 h-6"/>} text="검색" />
          <NavItem icon={<ExploreIcon />} text="탐색 탭" />
          <NavItem icon={<ReelsIcon className="w-6 h-6"/>} text="릴스" />
          <NavItem icon={<DirectIcon className="w-6 h-6" />} text="메시지" />
          <NavItem icon={<HeartIcon className="w-6 h-6" />} text="알림" />
          <NavItem icon={<NewArticleIcon className="w-6 h-6" />} text="만들기" />
          <NavItem 
            icon={
              <div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden border border-gray-200 shrink-0">
                 <img src="/images/logo-hello-world.png" alt="프로필" className="w-full h-full object-cover" />
              </div>
            } 
            text="프로필" 
          />
        </div>

        <div className="flex flex-col space-y-2 px-3">
          <NavItem icon={<MetaIcon />} text="Meta의 다른 앱" />
          <NavItem icon={<MoreIcon />} text="더 보기" />
        </div>
      </aside>
    </>
  );
}

// -------------------------------------------------------------
// 데스크톱 사이드바 전용 NavItem (호버 애니메이션 포함)
// -------------------------------------------------------------
function NavItem({ icon, text, isBold = false }: { icon: React.ReactNode; text: string; isBold?: boolean }) {
  return (
    <div className="flex items-center p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors duration-300">
      <div className="text-[#262626] shrink-0 group-hover:scale-105 transition-transform duration-200">
        {icon}
      </div>
      <span className={`overflow-hidden whitespace-nowrap transition-all duration-300 max-w-0 opacity-0 group-hover:max-w-[150px] group-hover:opacity-100 group-hover:ml-4 text-[16px] text-[#262626] ${isBold ? 'font-bold' : 'font-normal'}`}>
        {text}
      </span>
    </div>
  );
}

// 아이콘들
const DownChevronIcon = () => ( <svg className="w-4 h-4 text-[#262626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg> );
const FollowingsIcon = () => ( <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> );
const FavoritesIcon = () => ( <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg> );
const SearchIcon = ({ className }: { className?: string }) => ( <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> );
const ExploreIcon = () => ( <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 5l-9.121 4.879L5 19l9.121-4.879zM12 12v.01"></path><circle cx="12" cy="12" r="10"></circle></svg> );
const ReelsIcon = ({ className }: { className?: string }) => ( <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg> );
const MoreIcon = () => ( <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg> );
const MetaIcon = () => ( <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12c-2.21 0-4-1.79-4-4s1.79-4 4-4c1.86 0 3.41 1.28 3.86 3.03C12.31 8.78 13.86 10 16 10c2.21 0 4 1.79 4 4s-1.79 4-4 4c-1.86 0-3.41-1.28-3.86-3.03C11.69 15.22 10.14 14 8 14z"></path></svg> );