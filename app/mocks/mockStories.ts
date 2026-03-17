export interface StoryType {
  id: string;
  username: string;
  avatarUrl: string;
  isMe?: boolean;
  hasUnseenStory: boolean;
}

export const MOCK_STORIES: StoryType[] = [
  {
    id: 'my-story',
    username: '내 스토리',
    avatarUrl: '/images/logo-hello-world.png', // 본인 프로필 이미지
    isMe: true,
    hasUnseenStory: false,
  },
  {
    id: 'user1',
    username: 'techeer_bootcamp',
    avatarUrl: '/images/slider/home.jpg',
    hasUnseenStory: true, // 안 본 스토리가 있으면 그라데이션 링 표시
  },
  {
    id: 'user2',
    username: 'basil_park',
    avatarUrl: '/images/slider/takePhoto.jpg',
    hasUnseenStory: true,
  },
  {
    id: 'user3',
    username: 'dev_road',
    avatarUrl: '/images/slider/talk.jpg',
    hasUnseenStory: true,
  },
  {
    id: 'user4',
    username: 'apple_lover',
    avatarUrl: '/images/slider/ImageEdit.jpg',
    hasUnseenStory: false, // 다 본 스토리는 회색 링
  },
  {
    id: 'user5',
    username: 'incheon_univ',
    avatarUrl: '/images/slider/instagram.jpg',
    hasUnseenStory: true,
  },
  {
    id: 'user6',
    username: 'marathon_10k',
    avatarUrl: '/images/slider/home.jpg',
    hasUnseenStory: true,
  },
  {
    id: 'user7',
    username: 'frontend_master',
    avatarUrl: '/images/slider/takePhoto.jpg',
    hasUnseenStory: false,
  },
    {
    id: 'user8',
    username: 'frontend_master',
    avatarUrl: '/images/slider/takePhoto.jpg',
    hasUnseenStory: false,
  },
    {
    id: 'user9',
    username: 'frontend_master',
    avatarUrl: '/images/slider/takePhoto.jpg',
    hasUnseenStory: false,
  },
    {
    id: 'user10',
    username: 'frontend_master',
    avatarUrl: '/images/slider/takePhoto.jpg',
    hasUnseenStory: false,
  },
    {
    id: 'user11',
    username: 'frontend_master',
    avatarUrl: '/images/slider/takePhoto.jpg',
    hasUnseenStory: false,
  },
    {
    id: 'user12',
    username: 'frontend_master',
    avatarUrl: '/images/slider/takePhoto.jpg',
    hasUnseenStory: false,
  },
];