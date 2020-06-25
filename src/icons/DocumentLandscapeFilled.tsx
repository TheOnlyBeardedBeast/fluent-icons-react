import * as React from 'react';
import IconProps from '../IconProps';

export const DocumentLandscapeFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 10H13.5C12.6716 10 12 9.32843 12 8.5V4L3.5 4C2.67157 4 2 4.67157 2 5.5L2 14.5C2 15.3284 2.67157 16 3.5 16L16.5 16C17.3284 16 18 15.3284 18 14.5V10Z"
      fill={color}
    />
    <path d="M17.75 9H13.5C13.2239 9 13 8.77614 13 8.5V4.25L17.75 9Z" fill={color} />
  </svg>
);
