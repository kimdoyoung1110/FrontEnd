import { SVGProps } from 'react';

// interface 대신 type을 사용합니다.
type IconProps = SVGProps<SVGSVGElement>;

export default function HomeIcon({ className, ...props }: IconProps) {
  return (
    <svg 
      aria-label="홈" 
      className={className} 
      fill="currentColor" 
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7v-5.455z" fillRule="evenodd"></path>
    </svg>
  );
}