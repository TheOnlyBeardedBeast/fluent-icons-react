import * as React from 'react';
import IconProps from '../IconProps';

export const ForwardFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 14V15.5C7 16.8807 8.11929 18 9.5 18H15.5C16.8807 18 18 16.8807 18 15.5V9.5C18 8.11929 16.8807 7 15.5 7H14V8H15.5C16.3284 8 17 8.67157 17 9.5V15.5C17 16.3284 16.3284 17 15.5 17H9.5C8.67157 17 8 16.3284 8 15.5V14H7Z"
      fill={color}
    />
    <path
      d="M2 4.5C2 3.11929 3.11929 2 4.5 2H10.5C11.8807 2 13 3.11929 13 4.5V10.5C13 11.8807 11.8807 13 10.5 13H4.5C3.11929 13 2 11.8807 2 10.5V4.5Z"
      fill={color}
    />
  </svg>
);
