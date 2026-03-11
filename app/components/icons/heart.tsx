import { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export default function HeartIcon({ className, ...props }: IconProps) {
  return (
    <svg 
      aria-label="활동 피드" 
      className={className} 
      fill="currentColor" 
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.297-2.163-1.673-4.685-3.845C4.584 13.82 2.1 11.834 2.1 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.52 1.763s.678-.588 1.52-1.763a4.168 4.168 0 013.269-1.941z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
    </svg>
  );
}