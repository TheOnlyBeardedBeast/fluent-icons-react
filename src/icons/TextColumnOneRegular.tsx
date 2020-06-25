import * as React from 'react';
import IconProps from '../IconProps';

export const TextColumnOneRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 5.5C15 5.22386 14.7761 5 14.5 5H5.5C5.22386 5 5 5.22386 5 5.5C5 5.77614 5.22386 6 5.5 6H14.5C14.7761 6 15 5.77614 15 5.5Z"
      fill={color}
    />
    <path
      d="M15 8.5C15 8.22386 14.7761 8 14.5 8H5.5C5.22386 8 5 8.22386 5 8.5C5 8.77614 5.22386 9 5.5 9H14.5C14.7761 9 15 8.77614 15 8.5Z"
      fill={color}
    />
    <path
      d="M15 11.5C15 11.2239 14.7761 11 14.5 11H5.5C5.22386 11 5 11.2239 5 11.5C5 11.7761 5.22386 12 5.5 12H14.5C14.7761 12 15 11.7761 15 11.5Z"
      fill={color}
    />
    <path
      d="M15 14.5C15 14.2239 14.7761 14 14.5 14H5.5C5.22386 14 5 14.2239 5 14.5C5 14.7761 5.22386 15 5.5 15H14.5C14.7761 15 15 14.7761 15 14.5Z"
      fill={color}
    />
  </svg>
);
