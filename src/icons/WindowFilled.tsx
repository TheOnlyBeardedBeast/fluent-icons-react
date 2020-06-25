import * as React from 'react';
import IconProps from '../IconProps';

export const WindowFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.49707 3C4.11636 3 2.99707 4.11929 2.99707 5.5V14.5C2.99707 15.8807 4.11636 17 5.49707 17H14.4971C15.8778 17 16.9971 15.8807 16.9971 14.5V7H3V6H16.9971V5.5C16.9971 4.11929 15.8778 3 14.4971 3H5.49707Z"
      fill={color}
    />
  </svg>
);
