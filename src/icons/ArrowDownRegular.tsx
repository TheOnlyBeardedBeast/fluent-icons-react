import * as React from 'react';
import IconProps from '../IconProps';

export const ArrowDownRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_arrow_down_16_regular" fill={color} fill-rule="nonzero">
        <path
          d="M8.50000221,2.5 C8.50000221,2.22386 8.27615,2 8.00000221,2 C7.72386,2 7.50000221,2.22386 7.50000221,2.5 L7.50000221,12.197 L3.87165,8.16552 C3.68692,7.96026 3.37078,7.94362 3.16552,8.12835 C2.96027,8.31308 2.94363,8.62923 3.12836,8.83448 L7.62836,13.8345 C7.72318,13.9398 7.85826,14 8.00000221,14 C8.14175,14 8.27683,13.9398 8.37165,13.8345 L12.8717,8.83448 C13.0564,8.62923 13.0397,8.31308 12.8345,8.12835 C12.6292,7.94362 12.3131,7.96026 12.1284,8.16552 L8.50000221,12.197 L8.50000221,2.5 Z"
          id="Path"
        ></path>
      </g>
    </g>
  </svg>
);
