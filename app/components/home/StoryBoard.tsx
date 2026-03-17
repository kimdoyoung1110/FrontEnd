'use client';

import React from 'react';
import StoryItem from './StoryItem';
import { MOCK_STORIES } from '../../mocks/mockStories';

export default function StoryBoard() {
  return (
    // 상단 여백, 하단 테두리 추가
    <div className="w-full pt-4 pb-4 md:pt-10 mb-4">
      {/* 가로 스크롤 영역 구현의 핵심 클래스들!
        overflow-x-auto: 가로 스크롤 허용
        [scrollbar-width:none] & [&::-webkit-scrollbar]:hidden : 스크롤바 숨김 (Tailwind 임의값 기능)
      */}
      <div className="flex space-x-4 overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        
        {/* 가짜 데이터를 순회하며 스토리 아이템 렌더링 */}
        {MOCK_STORIES.map((story) => (
          <StoryItem key={story.id} story={story} />
        ))}
        
      </div>
    </div>
  );
}