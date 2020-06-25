import * as React from 'react';
import IconProps from '../IconProps';

export const TabRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.99994 4C1.99994 2.89543 2.89537 2 3.99994 2H11.9999C13.1045 2 13.9999 2.89543 13.9999 4V12C13.9999 13.1046 13.1045 14 11.9999 14H3.99994C2.89537 14 1.99994 13.1046 1.99994 12V4ZM3.99994 3C3.44765 3 2.99994 3.44772 2.99994 4V12C2.99994 12.5523 3.44765 13 3.99994 13H11.9999C12.5522 13 12.9999 12.5523 12.9999 12V4C12.9999 3.44772 12.5522 3 11.9999 3H3.99994Z"
      fill={color}
    />
  </svg>
);
