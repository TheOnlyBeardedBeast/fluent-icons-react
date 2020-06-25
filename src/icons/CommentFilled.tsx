import * as React from 'react';
import IconProps from '../IconProps';

export const CommentFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.5 2C2.11929 2 1 3.11929 1 4.5V9.5C1 10.8807 2.11929 12 3.5 12H4V13.9422C4 14.7842 4.99168 15.2342 5.62533 14.6797L8.68787 12H12.5C13.8807 12 15 10.8807 15 9.5V4.5C15 3.11929 13.8807 2 12.5 2H3.5Z"
      fill={color}
    />
  </svg>
);
