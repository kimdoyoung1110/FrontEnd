'use client';

import React, { useState, useEffect, useRef } from 'react';
import Article from './Article';
import { MOCK_RECENT_ARTICLES, MOCK_RECOMMENDED_ARTICLES } from '../../mocks/mockArticles';

export default function ArticleFeed() {
  // 상태 관리: 최근 게시물과 추천 게시물을 따로 분리
  const [recentArticles] = useState(MOCK_RECENT_ARTICLES);
  const [recommendedArticles, setRecommendedArticles] = useState(MOCK_RECOMMENDED_ARTICLES);
  const [isLoading, setIsLoading] = useState(false);
  
  const loaderRef = useRef<HTMLDivElement>(null);

  // 무한 스크롤로 추천 게시물 불러오기
  const loadMoreArticles = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      const newArticles = MOCK_RECOMMENDED_ARTICLES.map(a => ({
        ...a,
        id: `${a.id}-${Date.now()}`
      }));
      setRecommendedArticles((prev) => [...prev, ...newArticles]);
      setIsLoading(false);
    }, 800);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          loadMoreArticles();
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [isLoading]);

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* 1. 최근 팔로잉 게시물 렌더링 */}
      {recentArticles.map((article) => (
        <Article key={article.id} data={article} />
      ))}

      {/* 2. "모두 확인했습니다" UI 분기점 */}
      <div className="w-full max-w-[470px] flex flex-col items-center py-8 border-b border-[#dbdbdb] mb-10">
        <div className="w-16 h-16 mb-4 rounded-full border-[3px] border-green-500 flex items-center justify-center bg-white">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h2 className="text-[20px] font-medium text-[#262626] mb-1">모두 확인했습니다</h2>
        <p className="text-[14px] text-[#737373]">최근 3일 동안 올라온 게시물을 모두 확인했습니다.</p>
      </div>

      {/* 3. 추천 게시물 헤더 */}
      <div className="w-full max-w-[470px] mb-6 flex justify-between items-end">
        <h3 className="text-[16px] font-semibold text-[#737373]">추천 게시물</h3>
      </div>

      {/* 4. 무한 스크롤되는 추천 게시물 렌더링 */}
      {recommendedArticles.map((article) => (
        <Article key={article.id} data={article} />
      ))}

      {/* 5. 로딩 스피너 (Intersection Observer 트리거) */}
      <div ref={loaderRef} className="py-8 flex justify-center w-full">
        {isLoading && (
          <svg className="animate-spin h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
      </div>
    </div>
  );
}