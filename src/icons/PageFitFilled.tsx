import * as React from 'react';
import IconProps from '../IconProps';

export const PageFitFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 5C1 3.89543 1.89543 3 3 3H13C14.1046 3 15 3.89543 15 5V11C15 12.1046 14.1046 13 13 13H3C1.89543 13 1 12.1046 1 11V5ZM3 6V7C3 7.27614 3.22386 7.5 3.5 7.5C3.77614 7.5 4 7.27614 4 7V6H5C5.27614 6 5.5 5.77614 5.5 5.5C5.5 5.22386 5.27614 5 5 5H4C3.44772 5 3 5.44772 3 6ZM12 5H11C10.7239 5 10.5 5.22386 10.5 5.5C10.5 5.77614 10.7239 6 11 6H12V7C12 7.27614 12.2239 7.5 12.5 7.5C12.7761 7.5 13 7.27614 13 7V6C13 5.44772 12.5523 5 12 5ZM12 11C12.5523 11 13 10.5523 13 10V9C13 8.72386 12.7761 8.5 12.5 8.5C12.2239 8.5 12 8.72386 12 9V10H11C10.7239 10 10.5 10.2239 10.5 10.5C10.5 10.7761 10.7239 11 11 11H12ZM4 11H5C5.27614 11 5.5 10.7761 5.5 10.5C5.5 10.2239 5.27614 10 5 10H4V9C4 8.72386 3.77614 8.5 3.5 8.5C3.22386 8.5 3 8.72386 3 9V10C3 10.5523 3.44772 11 4 11Z"
      fill={color}
    />
  </svg>
);
