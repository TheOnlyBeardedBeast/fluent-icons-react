import * as React from 'react';
import IconProps from '../IconProps';

export const TextBulletListTreeRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 5.5C2.55228 5.5 3 5.05228 3 4.5C3 3.94772 2.55228 3.5 2 3.5C1.44772 3.5 1 3.94772 1 4.5C1 5.05228 1.44772 5.5 2 5.5Z"
      fill={color}
    />
    <path
      d="M6 9C6.55228 9 7 8.55228 7 8C7 7.44772 6.55228 7 6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9Z"
      fill={color}
    />
    <path
      d="M7 11.5C7 12.0523 6.55228 12.5 6 12.5C5.44772 12.5 5 12.0523 5 11.5C5 10.9477 5.44772 10.5 6 10.5C6.55228 10.5 7 10.9477 7 11.5Z"
      fill={color}
    />
    <path
      d="M5.5 4C5.22386 4 5 4.22386 5 4.5C5 4.77614 5.22386 5 5.5 5H14.5C14.7761 5 15 4.77614 15 4.5C15 4.22386 14.7761 4 14.5 4H5.5Z"
      fill={color}
    />
    <path
      d="M9 8C9 7.72386 9.22386 7.5 9.5 7.5H14.5C14.7761 7.5 15 7.72386 15 8C15 8.27614 14.7761 8.5 14.5 8.5H9.5C9.22386 8.5 9 8.27614 9 8Z"
      fill={color}
    />
    <path
      d="M9.5 11C9.22386 11 9 11.2239 9 11.5C9 11.7761 9.22386 12 9.5 12H14.5C14.7761 12 15 11.7761 15 11.5C15 11.2239 14.7761 11 14.5 11H9.5Z"
      fill={color}
    />
  </svg>
);
