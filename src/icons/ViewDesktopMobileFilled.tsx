import * as React from 'react';
import IconProps from '../IconProps';

export const ViewDesktopMobileFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 4C5 2.89543 5.89543 2 7 2H13C14.1046 2 15 2.89543 15 4V16C15 17.1046 14.1046 18 13 18H7C5.89543 18 5 17.1046 5 16V4ZM7.5 4C7.22386 4 7 4.22386 7 4.5V6.5C7 6.77614 7.22386 7 7.5 7H12.5C12.7761 7 13 6.77614 13 6.5V4.5C13 4.22386 12.7761 4 12.5 4H7.5ZM7.5 8C7.22386 8 7 8.22386 7 8.5V13.5C7 13.7761 7.22386 14 7.5 14H12.5C12.7761 14 13 13.7761 13 13.5V8.5C13 8.22386 12.7761 8 12.5 8H7.5ZM9 15.5C9 15.7761 9.22386 16 9.5 16H10.5C10.7761 16 11 15.7761 11 15.5C11 15.2239 10.7761 15 10.5 15H9.5C9.22386 15 9 15.2239 9 15.5Z"
      fill={color}
    />
  </svg>
);
