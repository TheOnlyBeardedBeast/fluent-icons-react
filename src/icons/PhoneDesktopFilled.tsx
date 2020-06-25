import * as React from 'react';
import IconProps from '../IconProps';

export const PhoneDesktopFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 1C4.89543 1 4 1.89543 4 3V5H5.5C6.88071 5 8 6.11929 8 7.5V11H10V12H8V13H11.5C11.7761 13 12 12.7761 12 12.5C12 12.2239 11.7761 12 11.5 12H11V11H13C14.1046 11 15 10.1046 15 9V3C15 1.89543 14.1046 1 13 1H6Z"
      fill={color}
    />
    <path
      d="M2.5 6C1.67157 6 1 6.67157 1 7.5V13.5C1 14.3284 1.67157 15 2.5 15H5.5C6.32843 15 7 14.3284 7 13.5V7.5C7 6.67157 6.32843 6 5.5 6H2.5ZM3 12.5C3 12.2239 3.22386 12 3.5 12H4.5C4.77614 12 5 12.2239 5 12.5C5 12.7761 4.77614 13 4.5 13H3.5C3.22386 13 3 12.7761 3 12.5Z"
      fill={color}
    />
  </svg>
);
