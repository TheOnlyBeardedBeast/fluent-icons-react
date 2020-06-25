import * as React from 'react';
import IconProps from '../IconProps';

export const PhoneDesktopRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 2H13C13.5523 2 14 2.44772 14 3V9C14 9.55229 13.5523 10 13 10H8V11H10V12H8V13H11.5C11.7761 13 12 12.7761 12 12.5C12 12.2239 11.7761 12 11.5 12H11V11H13C14.1046 11 15 10.1046 15 9V3C15 1.89543 14.1046 1 13 1H6C4.89543 1 4 1.89543 4 3V5H5V3C5 2.44772 5.44772 2 6 2Z"
      fill={color}
    />
    <path
      d="M3.5 12C3.22386 12 3 12.2239 3 12.5C3 12.7761 3.22386 13 3.5 13H4.5C4.77614 13 5 12.7761 5 12.5C5 12.2239 4.77614 12 4.5 12H3.5Z"
      fill={color}
    />
    <path
      d="M2.5 6C1.67157 6 1 6.67157 1 7.5V13.5C1 14.3284 1.67157 15 2.5 15H5.5C6.32843 15 7 14.3284 7 13.5V7.5C7 6.67157 6.32843 6 5.5 6H2.5ZM2.5 7H5.5C5.77614 7 6 7.22386 6 7.5V13.5C6 13.7761 5.77614 14 5.5 14H2.5C2.22386 14 2 13.7761 2 13.5V7.5C2 7.22386 2.22386 7 2.5 7Z"
      fill={color}
    />
  </svg>
);
