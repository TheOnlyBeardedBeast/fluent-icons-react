import * as React from 'react';
import IconProps from '../IconProps';

export const PictureInPictureFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.75 8C11.75 8.41421 11.4142 8.75 11 8.75C10.5858 8.75 10.25 8.41421 10.25 8C10.25 7.58579 10.5858 7.25 11 7.25C11.4142 7.25 11.75 7.58579 11.75 8Z"
      fill={color}
    />
    <path
      d="M1 5.5C1 4.11929 2.11929 3 3.5 3H12.5C13.8807 3 15 4.11929 15 5.5V10.5C15 11.8807 13.8807 13 12.5 13H3.5C2.11929 13 1 11.8807 1 10.5V5.5ZM5.5 6C5.22386 6 5 6.22386 5 6.5V10.5C5 10.5848 5.02109 10.6646 5.05832 10.7346L7.64642 8.14645C7.84169 7.95118 8.15827 7.95118 8.35353 8.14645L11.2071 11H12.5C12.7761 11 13 10.7761 13 10.5V6.5C13 6.22386 12.7761 6 12.5 6H5.5ZM9.79287 11L7.99998 9.20711L6.20708 11H9.79287Z"
      fill={color}
    />
  </svg>
);
