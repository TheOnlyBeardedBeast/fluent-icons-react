import * as React from 'react';
import IconProps from '../IconProps';

export const ColorLineFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.2434 2.53963C14.3531 1.77998 13.0137 1.82261 12.1738 2.66571L6.20542 8.6604L6.09889 8.77938C5.96579 8.94499 5.869 9.13751 5.81563 9.34443L5.02364 12.4152L5.00921 12.499C4.98028 12.8305 5.28832 13.1091 5.62742 13.0255L8.71296 12.2653L8.86993 12.2174C9.07495 12.1423 9.26177 12.0231 9.41679 11.8675L15.3796 5.87837L15.5 5.74788C16.2243 4.89933 16.2243 3.64475 15.5 2.7962L15.3735 2.6596L15.2434 2.53963Z"
      fill={color}
    />
    <path
      d="M4.09805 12H4C2.89543 12 2 12.8954 2 14V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V14C18 12.8954 17.1046 12 16 12H10.696L10.1255 12.573C9.86712 12.8324 9.55555 13.0313 9.21386 13.1564L9.18815 13.1658L8.97882 13.2297L5.8667 13.9965C4.84556 14.2481 3.926 13.4094 4.01305 12.4121L4.01668 12.3705L4.04515 12.2051L4.09805 12Z"
      fill={color}
    />
  </svg>
);