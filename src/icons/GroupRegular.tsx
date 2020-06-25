import * as React from 'react';
import IconProps from '../IconProps';

export const GroupRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 4.5C7 4.67123 6.98278 4.83844 6.94999 5H10C10.5523 5 11 5.44772 11 6V8H10C8.89543 8 8 8.89543 8 10V11H6C5.44772 11 5 10.5523 5 10V6.94999C4.83844 6.98278 4.67123 7 4.5 7C4.32877 7 4.16155 6.98278 4 6.94999V10C4 11.1046 4.89543 12 6 12H8V14C8 15.1046 8.89543 16 10 16H13.05C13.0172 15.8384 13 15.6712 13 15.5C13 15.3288 13.0172 15.1616 13.05 15H10C9.44772 15 9 14.5523 9 14V12H10C11.1046 12 12 11.1046 12 10V9H14C14.5523 9 15 9.44772 15 10V13.05C15.1616 13.0172 15.3288 13 15.5 13C15.6712 13 15.8384 13.0172 16 13.05V10C16 8.89543 15.1046 8 14 8H12V6C12 4.89543 11.1046 4 10 4H6.94999C6.98278 4.16155 7 4.32877 7 4.5ZM11 9V10C11 10.5523 10.5523 11 10 11H9V10C9 9.44772 9.44772 9 10 9H11Z"
      fill={color}
    />
    <path
      d="M6 4.5C6 5.32843 5.32843 6 4.5 6C3.67157 6 3 5.32843 3 4.5C3 3.67157 3.67157 3 4.5 3C5.32843 3 6 3.67157 6 4.5Z"
      fill={color}
    />
    <path
      d="M17 15.5C17 16.3284 16.3284 17 15.5 17C14.6716 17 14 16.3284 14 15.5C14 14.6716 14.6716 14 15.5 14C16.3284 14 17 14.6716 17 15.5Z"
      fill={color}
    />
    <path
      d="M17 4.5C17 5.32843 16.3284 6 15.5 6C14.6716 6 14 5.32843 14 4.5C14 3.67157 14.6716 3 15.5 3C16.3284 3 17 3.67157 17 4.5Z"
      fill={color}
    />
    <path
      d="M6 15.5C6 16.3284 5.32843 17 4.5 17C3.67157 17 3 16.3284 3 15.5C3 14.6716 3.67157 14 4.5 14C5.32843 14 6 14.6716 6 15.5Z"
      fill={color}
    />
  </svg>
);
