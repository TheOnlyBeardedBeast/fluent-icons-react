import * as React from 'react';
import IconProps from '../IconProps';

export const TabDesktopNewPageFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 5.5C3 4.11929 4.11929 3 5.5 3H8V5.5C8 6.32843 8.67157 7 9.5 7H17V14.5C17 15.8807 15.8807 17 14.5 17H5.5C4.11929 17 3 15.8807 3 14.5V5.5ZM8 11C8 10.4477 7.55228 10 7 10C6.44772 10 6 10.4477 6 11C6 11.5523 6.44772 12 7 12C7.55228 12 8 11.5523 8 11ZM10 12C10.5523 12 11 11.5523 11 11C11 10.4477 10.5523 10 10 10C9.44772 10 9 10.4477 9 11C9 11.5523 9.44772 12 10 12ZM14 11C14 10.4477 13.5523 10 13 10C12.4477 10 12 10.4477 12 11C12 11.5523 12.4477 12 13 12C13.5523 12 14 11.5523 14 11Z"
      fill={color}
    />
    <path
      d="M17 6V5.5C17 4.11929 15.8807 3 14.5 3H9V5.5C9 5.77614 9.22386 6 9.5 6H17Z"
      fill={color}
    />
  </svg>
);
