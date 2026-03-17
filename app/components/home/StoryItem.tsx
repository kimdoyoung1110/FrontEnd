import React from 'react';
import { StoryType } from '../../mocks/mockStories';

export default function StoryItem({ story }: { story: StoryType }) {
  const { username, avatarUrl, isMe, hasUnseenStory } = story;

  return (
    <div className="flex flex-col items-center cursor-pointer space-y-2 w-[74px] shrink-0">
      <div className="relative">
        <div 
          className={`w-[76px] h-[76px] rounded-full p-[2px] ${
            hasUnseenStory 
              ? 'bg-gradient-to-tr from-yellow-400 via-red-500 to-fuchsia-600' 
              : 'bg-gray-200'
          } ${isMe && !hasUnseenStory ? 'bg-transparent' : ''}`}
        >
          <div className="w-full h-full rounded-full border-2 border-white overflow-hidden bg-white">
            <img src={avatarUrl} alt={username} className="w-full h-full object-cover"/>
          </div>
        </div>

        {isMe && (
          <div className="absolute bottom-0 right-0 bg-blue-500 w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
            </svg>
          </div>
        )}
      </div>

      <span className="text-xs text-[#262626] truncate w-full text-center">
        {username}
      </span>
    </div>
  );
}