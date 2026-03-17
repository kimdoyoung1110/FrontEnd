export interface ArticleType {
  id: string;
  username: string;
  avatarUrl: string;
  imageUrl: string;
  likesCount: number;
  caption: string;
  commentsCount: number;
  createdAt: string;
  isRecommended?: boolean; // 추천 게시물 여부 플래그
}

// 1. 최근 3일 이내에 올라온 팔로잉 게시물 (다 보면 '모두 확인했습니다'가 뜸)
export const MOCK_RECENT_ARTICLES: ArticleType[] = [
  {
    id: 'recent-1',
    username: 'dev_road',
    avatarUrl: '/images/slider/talk.jpg',
    imageUrl: '/images/slider/ImageEdit.jpg',
    likesCount: 1024,
    caption: '드디어 인스타그램 클론 메인 피드 UI 완성! 🚀 바이브 코딩으로 쭉쭉 나갑니다.',
    commentsCount: 32,
    createdAt: '1일',
  },
  {
    id: 'recent-2',
    username: 'techeer_bootcamp',
    avatarUrl: '/images/slider/home.jpg',
    imageUrl: '/images/slider/takePhoto.jpg',
    likesCount: 850,
    caption: '프로젝트 개발 중... 리액트 너무 재밌네요 💻',
    commentsCount: 15,
    createdAt: '2일',
  }
];

// 2. 무한 스크롤로 계속 불러올 추천 게시물 풀 (Mock)
export const MOCK_RECOMMENDED_ARTICLES: ArticleType[] = [
  {
    id: 'recom-1',
    username: 'basil_park',
    avatarUrl: '/images/slider/takePhoto.jpg',
    imageUrl: '/images/slider/instagram.jpg',
    likesCount: 2300,
    caption: '회원님을 위한 추천 게시물입니다 ✨',
    commentsCount: 120,
    createdAt: '4일',
    isRecommended: true,
  },
  {
    id: 'recom-2',
    username: 'apple_lover',
    avatarUrl: '/images/logo-hello-world.png',
    imageUrl: '/images/slider/home.jpg',
    likesCount: 512,
    caption: '새로운 맥북 프로 개봉기! 애플 생태계 완성 🍎',
    commentsCount: 45,
    createdAt: '5일',
    isRecommended: true,
  }
];