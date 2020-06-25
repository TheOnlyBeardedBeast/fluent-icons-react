import * as React from 'react';
import IconProps from '../IconProps';

export const TextColumnOneFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 5.75C15 5.33579 14.6642 5 14.25 5H5.75C5.33579 5 5 5.33579 5 5.75C5 6.16421 5.33579 6.5 5.75 6.5H14.25C14.6642 6.5 15 6.16421 15 5.75Z"
      fill={color}
    />
    <path
      d="M15 8.75C15 8.33579 14.6642 8 14.25 8H5.75C5.33579 8 5 8.33579 5 8.75C5 9.16421 5.33579 9.5 5.75 9.5H14.25C14.6642 9.5 15 9.16421 15 8.75Z"
      fill={color}
    />
    <path
      d="M15 11.75C15 11.3358 14.6642 11 14.25 11H5.75C5.33579 11 5 11.3358 5 11.75C5 12.1642 5.33579 12.5 5.75 12.5H14.25C14.6642 12.5 15 12.1642 15 11.75Z"
      fill={color}
    />
    <path
      d="M15 14.75C15 14.3358 14.6642 14 14.25 14H5.75C5.33579 14 5 14.3358 5 14.75C5 15.1642 5.33579 15.5 5.75 15.5H14.25C14.6642 15.5 15 15.1642 15 14.75Z"
      fill={color}
    />
  </svg>
);
