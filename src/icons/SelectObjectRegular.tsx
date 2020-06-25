import * as React from 'react';
import IconProps from '../IconProps';

export const SelectObjectRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 4.5C6 5.32843 5.32843 6 4.5 6C3.67157 6 3 5.32843 3 4.5C3 3.67157 3.67157 3 4.5 3C5.32843 3 6 3.67157 6 4.5Z"
      fill={color}
    />
    <path
      d="M17 4.5C17 5.32843 16.3284 6 15.5 6C14.6716 6 14 5.32843 14 4.5C14 3.67157 14.6716 3 15.5 3C16.3284 3 17 3.67157 17 4.5Z"
      fill={color}
    />
    <path
      d="M6 15.5C6 16.3284 5.32843 17 4.5 17C3.67157 17 3 16.3284 3 15.5C3 14.6716 3.67157 14 4.5 14C5.32843 14 6 14.6716 6 15.5Z"
      fill={color}
    />
    <path
      d="M17 15.5C17 16.3284 16.3284 17 15.5 17C14.6716 17 14 16.3284 14 15.5C14 14.6716 14.6716 14 15.5 14C16.3284 14 17 14.6716 17 15.5Z"
      fill={color}
    />
    <path
      d="M7 4.5C7 4.22386 7.22386 4 7.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H7.5C7.22386 5 7 4.77614 7 4.5Z"
      fill={color}
    />
    <path
      d="M7 15.5C7 15.2239 7.22386 15 7.5 15H12.5C12.7761 15 13 15.2239 13 15.5C13 15.7761 12.7761 16 12.5 16H7.5C7.22386 16 7 15.7761 7 15.5Z"
      fill={color}
    />
    <path
      d="M4 7.5C4 7.22386 4.22386 7 4.5 7C4.77614 7 5 7.22386 5 7.5V12.5C5 12.7761 4.77614 13 4.5 13C4.22386 13 4 12.7761 4 12.5V7.5Z"
      fill={color}
    />
    <path
      d="M15 7.5C15 7.22386 15.2239 7 15.5 7C15.7761 7 16 7.22386 16 7.5V12.5C16 12.7761 15.7761 13 15.5 13C15.2239 13 15 12.7761 15 12.5V7.5Z"
      fill={color}
    />
  </svg>
);
