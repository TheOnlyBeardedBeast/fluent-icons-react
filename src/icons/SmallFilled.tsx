import * as React from 'react';
import IconProps from '../IconProps';

export const SmallFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.5 3C3.67157 3 3 3.67157 3 4.5V5.5C3 5.77614 2.77614 6 2.5 6C2.22386 6 2 5.77614 2 5.5V4.5C2 3.11929 3.11929 2 4.5 2H5.5C5.77614 2 6 2.22386 6 2.5C6 2.77614 5.77614 3 5.5 3H4.5Z"
      fill={color}
    />
    <path
      d="M7.5 6C6.67157 6 6 6.67157 6 7.5V8.5C6 9.32843 6.67157 10 7.5 10H8.5C9.32843 10 10 9.32843 10 8.5V7.5C10 6.67157 9.32843 6 8.5 6H7.5Z"
      fill={color}
    />
    <path
      d="M11.5 3C12.3284 3 13 3.67157 13 4.5V5.5C13 5.77614 13.2239 6 13.5 6C13.7761 6 14 5.77614 14 5.5V4.5C14 3.11929 12.8807 2 11.5 2H10.5C10.2239 2 10 2.22386 10 2.5C10 2.77614 10.2239 3 10.5 3L11.5 3Z"
      fill={color}
    />
    <path
      d="M11.5 13C12.3284 13 13 12.3284 13 11.5V10.5C13 10.2239 13.2239 10 13.5 10C13.7761 10 14 10.2239 14 10.5V11.5C14 12.8807 12.8807 14 11.5 14H10.5C10.2239 14 10 13.7761 10 13.5C10 13.2239 10.2239 13 10.5 13H11.5Z"
      fill={color}
    />
    <path
      d="M4.5 13C3.67157 13 3 12.3284 3 11.5L3 10.25C3 9.97386 2.77614 9.75 2.5 9.75C2.22386 9.75 2 9.97386 2 10.25V11.5C2 12.8807 3.11929 14 4.5 14H5.75C6.02614 14 6.25 13.7761 6.25 13.5C6.25 13.2239 6.02614 13 5.75 13H4.5Z"
      fill={color}
    />
  </svg>
);
