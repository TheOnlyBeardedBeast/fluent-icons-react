import * as React from 'react';
import IconProps from '../IconProps';

export const RulerFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.5 1.99969C10.3284 1.99969 11 2.67127 11 3.4997L11 12.5003C11 13.3287 10.3284 14.0003 9.5 14.0003H6.5C5.67157 14.0003 5 13.3287 5 12.5003V3.49969C5 2.67127 5.67157 1.99969 6.5 1.99969H9.5ZM7.5 11C7.77614 11 8 10.7761 8 10.5C8 10.2239 7.77614 10 7.5 10H6V11H7.5ZM8 8.5C8.27614 8.5 8.5 8.27614 8.5 8C8.5 7.72386 8.27614 7.5 8 7.5H6V8.5H8ZM7.5 6C7.77614 6 8 5.77614 8 5.5C8 5.22386 7.77614 5 7.5 5H6V6H7.5Z"
      fill={color}
    />
  </svg>
);
