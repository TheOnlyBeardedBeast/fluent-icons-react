import * as React from 'react';
import IconProps from '../IconProps';

export const TextBoxAlignRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.5 3C15.8807 3 17 4.11929 17 5.5V14.5C17 15.8807 15.8807 17 14.5 17H5.5C4.11929 17 3 15.8807 3 14.5V5.5C3 4.11929 4.11929 3 5.5 3H14.5ZM14.5 4H5.5C4.67157 4 4 4.67157 4 5.5V14.5C4 15.3284 4.67157 16 5.5 16H14.5C15.3284 16 16 15.3284 16 14.5V5.5C16 4.67157 15.3284 4 14.5 4Z"
      fill={color}
    />
    <path
      d="M6 8.5C6 8.22386 6.22386 8 6.5 8H13.5C13.7761 8 14 8.22386 14 8.5C14 8.77614 13.7761 9 13.5 9H6.5C6.22386 9 6 8.77614 6 8.5ZM7 11.5C7 11.2239 7.22386 11 7.5 11H12.5C12.7761 11 13 11.2239 13 11.5C13 11.7761 12.7761 12 12.5 12H7.5C7.22386 12 7 11.7761 7 11.5Z"
      fill={color}
    />
  </svg>
);
