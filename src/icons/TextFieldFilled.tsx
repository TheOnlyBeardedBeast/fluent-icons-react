import * as React from 'react';
import IconProps from '../IconProps';

export const TextFieldFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 5.5C1 4.11929 2.11929 3 3.5 3H12.5C13.8807 3 15 4.11929 15 5.5V10.5C15 11.8807 13.8807 13 12.5 13H3.5C2.11929 13 1 11.8807 1 10.5V5.5ZM5 5.5V6.5C5 6.77614 5.22386 7 5.5 7C5.77614 7 6 6.77614 6 6.5V6H7.5V10H7C6.72386 10 6.5 10.2239 6.5 10.5C6.5 10.7761 6.72386 11 7 11H9C9.27614 11 9.5 10.7761 9.5 10.5C9.5 10.2239 9.27614 10 9 10H8.5V6H10V6.5C10 6.77614 10.2239 7 10.5 7C10.7761 7 11 6.77614 11 6.5V5.5C11 5.22386 10.7761 5 10.5 5H5.5C5.22386 5 5 5.22386 5 5.5Z"
      fill={color}
    />
  </svg>
);
