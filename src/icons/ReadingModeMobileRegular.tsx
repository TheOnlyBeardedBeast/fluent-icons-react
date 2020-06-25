import * as React from 'react';
import IconProps from '../IconProps';

export const ReadingModeMobileRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.5 6C6.22386 6 6 6.22386 6 6.5C6 6.77614 6.22386 7 6.5 7H13.5C13.7761 7 14 6.77614 14 6.5C14 6.22386 13.7761 6 13.5 6H6.5Z"
      fill={color}
    />
    <path
      d="M6 8.5C6 8.22386 6.22386 8 6.5 8H13.5C13.7761 8 14 8.22386 14 8.5C14 8.77614 13.7761 9 13.5 9H6.5C6.22386 9 6 8.77614 6 8.5Z"
      fill={color}
    />
    <path
      d="M6.5 10C6.22386 10 6 10.2239 6 10.5C6 10.7761 6.22386 11 6.5 11H10.5C10.7761 11 11 10.7761 11 10.5C11 10.2239 10.7761 10 10.5 10H6.5Z"
      fill={color}
    />
    <path
      d="M4 3.5C4 2.67157 4.67157 2 5.5 2H14.5C15.3284 2 16 2.67157 16 3.5V16.5C16 17.3284 15.3284 18 14.5 18H5.5C4.67157 18 4 17.3284 4 16.5V3.5ZM5.5 3C5.22386 3 5 3.22386 5 3.5V16.5C5 16.7761 5.22386 17 5.5 17H14.5C14.7761 17 15 16.7761 15 16.5V3.5C15 3.22386 14.7761 3 14.5 3H5.5Z"
      fill={color}
    />
  </svg>
);
