import StoryBoard from './components/home/StoryBoard';
import HomeAside from './components/home/HomeAside';
import ArticleFeed from './components/home/ArticleFeed'; // 새로 만든 피드 추가

export default function Home() {
  return (
    <div className="flex justify-center w-full min-h-screen bg-white">
      <div className="flex w-full max-w-[1000px] pt-4 md:pt-8 px-0 sm:px-4 justify-center lg:justify-center gap-[64px]">
        
        {/* --- 1. 좌측 메인 피드 --- */}
        <div className="w-full max-w-[470px] flex flex-col items-center shrink-0">
          <StoryBoard />
          <ArticleFeed />
        </div>

        {/* --- 2. 우측 추천(Aside) 영역 (데스크톱 전용) --- */}
        <HomeAside />

      </div>
    </div>
  );
}