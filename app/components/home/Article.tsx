import React from 'react';
import HeartIcon from '../icons/heart';
import DirectIcon from '../icons/direct';
import { ArticleType } from '../../mocks/mockArticles';

export default function Article({ data }: { data: ArticleType }) {
  return (
    <article className="w-full max-w-[470px] mx-auto mb-10 border-b border-[#dbdbdb] pb-5">
      
      {/* 1. 게시물 헤더 */}
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-[2px]">
            <div className="w-full h-full rounded-full border border-white overflow-hidden bg-white">
               <img src={data.avatarUrl} className="w-full h-full object-cover" alt="profile" />
            </div>
          </div>
          <span className="text-sm font-semibold text-[#262626]">{data.username}</span>
          <span className="text-sm text-gray-500">• {data.createdAt}</span>
        </div>
        <button className="text-[#262626] hover:text-gray-500">
          <svg aria-label="옵션 더 보기" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
        </button>
      </div>

      {/* 2. 게시물 사진 */}
      <div className="w-full rounded-[4px] border border-gray-100 overflow-hidden bg-black flex items-center justify-center aspect-[4/5]">
        <img src={data.imageUrl} alt="게시물" className="w-full h-full object-cover" />
      </div>

      {/* 3. 액션 버튼들 */}
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-4">
          <HeartIcon className="w-6 h-6 cursor-pointer hover:opacity-70 text-[#262626]" />
          <CommentIcon />
          <DirectIcon className="w-6 h-6 cursor-pointer hover:opacity-70 text-[#262626]" />
        </div>
        <BookmarkIcon />
      </div>

      {/* 4. 좋아요/캡션/댓글 */}
      <div className="text-sm font-semibold text-[#262626] mb-2">
        좋아요 {data.likesCount.toLocaleString()}개
      </div>
      <div className="text-sm text-[#262626] mb-2 leading-relaxed">
        <span className="font-semibold mr-2 cursor-pointer">{data.username}</span>
        {data.caption}
      </div>
      <div className="text-sm text-gray-500 cursor-pointer mb-2">
        댓글 {data.commentsCount}개 모두 보기
      </div>
      <div className="flex items-center justify-between mt-3">
        <input type="text" placeholder="댓글 달기..." className="w-full text-sm outline-none placeholder-gray-500 bg-transparent" />
        <button className="text-sm font-semibold text-blue-500 opacity-50 cursor-default shrink-0">게시</button>
      </div>
    </article>
  );
}

const CommentIcon = () => ( <svg className="w-6 h-6 cursor-pointer hover:opacity-70 text-[#262626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path></svg> );
const BookmarkIcon = () => ( <svg className="w-6 h-6 cursor-pointer hover:opacity-70 text-[#262626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg> );