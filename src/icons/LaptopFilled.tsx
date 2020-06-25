import * as React from 'react';
import IconProps from '../IconProps';

export const LaptopFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 5.5C3 4.67157 3.67157 4 4.5 4H11.5C12.3284 4 13 4.67157 13 5.5V9.5C13 10.3284 12.3284 11 11.5 11H4.5C3.67157 11 3 10.3284 3 9.5V5.5Z"
      fill={color}
    />
    <path
      d="M2.5 12C2.22386 12 2 12.2239 2 12.5C2 12.7761 2.22386 13 2.5 13H13.5C13.7761 13 14 12.7761 14 12.5C14 12.2239 13.7761 12 13.5 12H2.5Z"
      fill={color}
    />
  </svg>
);
