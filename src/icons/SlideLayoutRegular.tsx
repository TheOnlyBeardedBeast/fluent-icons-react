import * as React from 'react';
import IconProps from '../IconProps';

export const SlideLayoutRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.5 14C4.67157 14 4 13.3284 4 12.5V7.5C4 6.67157 4.67157 6 5.5 6H14.5C15.3284 6 16 6.67157 16 7.5V12.5C16 13.3284 15.3284 14 14.5 14H5.5ZM5.5 7C5.22386 7 5 7.22386 5 7.5V9H15V7.5C15 7.22386 14.7761 7 14.5 7H5.5ZM7 10H5V12.5C5 12.7761 5.22386 13 5.5 13H7V10ZM8 13H14.5C14.7761 13 15 12.7761 15 12.5V10H8V13Z"
      fill={color}
    />
    <path
      d="M2 6.5C2 5.11929 3.11929 4 4.5 4H15.5C16.8807 4 18 5.11929 18 6.5V13.5C18 14.8807 16.8807 16 15.5 16H4.5C3.11929 16 2 14.8807 2 13.5V6.5ZM4.5 5C3.67157 5 3 5.67157 3 6.5V13.5C3 14.3284 3.67157 15 4.5 15H15.5C16.3284 15 17 14.3284 17 13.5V6.5C17 5.67157 16.3284 5 15.5 5H4.5Z"
      fill={color}
    />
  </svg>
);
