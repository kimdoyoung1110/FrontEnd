import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import Sidebar from './components/common/Sidebar'; // Header 대신 Sidebar를 불러옵니다

export const metadata: Metadata = {
  title: 'Instagram Clone',
  description: 'Next.js + Tailwind + Zustand + TanStack Query',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          {/* 전체를 가로 정렬(flex)로 묶습니다 */}
          <div className="flex min-h-screen bg-[#fafafa]">
            
            {/* 좌측 고정 사이드바 */}
            <Sidebar />
            
            {/* 메인 컨텐츠 영역: 
              데스크톱(md 이상)에서는 사이드바 너비(244px)만큼 왼쪽 여백(ml)을 줍니다 
            */}
            <main className="flex-1 md:ml-[244px] w-full">
              {children}
            </main>

          </div>
        </Providers>
      </body>
    </html>
  );
}