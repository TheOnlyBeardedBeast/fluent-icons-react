import * as React from 'react';
import IconProps from '../IconProps';

export const SendToBackRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 14C12 12.8954 12.8954 12 14 12H17C18.1046 12 19 12.8954 19 14V17C19 18.1046 18.1046 19 17 19H14C12.8954 19 12 18.1046 12 17V14ZM14 13C13.4477 13 13 13.4477 13 14V17C13 17.5523 13.4477 18 14 18H17C17.5523 18 18 17.5523 18 17V14C18 13.4477 17.5523 13 17 13H14Z"
      fill={color}
    />
    <path
      d="M5 9V12.5C5 13.8807 6.11929 15 7.5 15H11V14H9.70718L11.3668 12.3404C11.6018 11.938 11.938 11.6018 12.3404 11.3668L14 9.70718V11H15V7.5C15 6.11929 13.8807 5 12.5 5H9V6H10.293L8.63298 7.65999C8.39805 8.06213 8.06212 8.39805 7.65999 8.63298L6 10.293V9H5ZM11.7072 6H12.5C12.7316 6 12.9509 6.05248 13.1468 6.14621L6.14621 13.1468C6.05248 12.9509 6 12.7316 6 12.5V11.7072L11.7072 6ZM7.5 14C7.26845 14 7.04915 13.9475 6.85334 13.8538L13.8538 6.85334C13.9475 7.04915 14 7.26845 14 7.5V8.29395L8.29297 14H7.5Z"
      fill={color}
    />
    <path
      d="M1 3C1 1.89543 1.89543 1 3 1H6C7.10457 1 8 1.89543 8 3V6C8 7.10457 7.10457 8 6 8H3C1.89543 8 1 7.10457 1 6V3ZM3 2C2.44772 2 2 2.44772 2 3V6C2 6.55228 2.44772 7 3 7H6C6.55228 7 7 6.55228 7 6V3C7 2.44772 6.55228 2 6 2H3Z"
      fill={color}
    />
  </svg>
);
