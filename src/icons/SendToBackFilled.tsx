import * as React from 'react';
import IconProps from '../IconProps';

export const SendToBackFilled: React.FC<IconProps> = ({ size, color }) => (
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
      d="M5 9H6.3C7.79117 9 9 7.79117 9 6.3V5H12.5C13.8807 5 15 6.11929 15 7.5V11H13.7C12.2088 11 11 12.2088 11 13.7V15H7.5C6.11929 15 5 13.8807 5 12.5V9Z"
      fill={color}
    />
    <path
      d="M1 3C1 1.89543 1.89543 1 3 1H6C7.10457 1 8 1.89543 8 3V6C8 7.10457 7.10457 8 6 8H3C1.89543 8 1 7.10457 1 6V3ZM3 2C2.44772 2 2 2.44772 2 3V6C2 6.55228 2.44772 7 3 7H6C6.55228 7 7 6.55228 7 6V3C7 2.44772 6.55228 2 6 2H3Z"
      fill={color}
    />
  </svg>
);
