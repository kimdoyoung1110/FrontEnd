import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import Sidebar from './components/common/Sidebar';

export const metadata: Metadata = {
  title: 'Instagram Clone',
  description: 'Next.js + Tailwind + Zustand + TanStack Query',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <div className="flex min-h-screen bg-white">
            <Sidebar />
            {/* 모바일: 상단 헤더(60px), 하단 바텀바(50px)만큼 띄움
              데스크톱: 왼쪽 사이드바 기본 너비(72px)만큼만 띄움. 사이드바 확장 시 위로 덮임(Overlay)
            */}
            <main className="flex-1 w-full pt-[60px] pb-[50px] md:pt-0 md:pb-0 md:ml-[72px]">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}