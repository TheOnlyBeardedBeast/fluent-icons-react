import * as React from 'react';
import IconProps from '../IconProps';

export const DocumentCopyFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.99854 4.5V1H6.49854C5.67011 1 4.99854 1.67157 4.99854 2.5V11.5C4.99854 12.3284 5.67011 13 6.49853 13L12.5 13C13.3284 13 14 12.3284 14 11.5V6H10.4985C9.67011 6 8.99854 5.32843 8.99854 4.5Z"
      fill={color}
    />
    <path
      d="M9.99854 4.5V1.25L13.7485 5H10.4985C10.2224 5 9.99854 4.77614 9.99854 4.5Z"
      fill={color}
    />
    <path
      d="M3 4C3 3.44772 3.44772 3 4 3V11.5C4 12.8807 5.11929 14 6.5 14L12 14C12 14.5523 11.5523 15 11 15H6.55556C4.59188 15 3 13.4081 3 11.4444V4Z"
      fill={color}
    />
  </svg>
);
