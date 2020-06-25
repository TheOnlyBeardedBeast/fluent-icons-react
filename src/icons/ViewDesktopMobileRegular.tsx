import * as React from 'react';
import IconProps from '../IconProps';

export const ViewDesktopMobileRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5 4C7.22386 4 7 4.22386 7 4.5V6.5C7 6.77614 7.22386 7 7.5 7H12.5C12.7761 7 13 6.77614 13 6.5V4.5C13 4.22386 12.7761 4 12.5 4H7.5Z"
      fill={color}
    />
    <path
      d="M7 8.5C7 8.22386 7.22386 8 7.5 8H12.5C12.7761 8 13 8.22386 13 8.5V13.5C13 13.7761 12.7761 14 12.5 14H7.5C7.22386 14 7 13.7761 7 13.5V8.5Z"
      fill={color}
    />
    <path
      d="M9.5 15C9.22386 15 9 15.2239 9 15.5C9 15.7761 9.22386 16 9.5 16H10.5C10.7761 16 11 15.7761 11 15.5C11 15.2239 10.7761 15 10.5 15H9.5Z"
      fill={color}
    />
    <path
      d="M7 2C5.89543 2 5 2.89543 5 4V16C5 17.1046 5.89543 18 7 18H13C14.1046 18 15 17.1046 15 16V4C15 2.89543 14.1046 2 13 2H7ZM6 4C6 3.44772 6.44772 3 7 3H13C13.5523 3 14 3.44772 14 4V16C14 16.5523 13.5523 17 13 17H7C6.44772 17 6 16.5523 6 16V4Z"
      fill={color}
    />
  </svg>
);
