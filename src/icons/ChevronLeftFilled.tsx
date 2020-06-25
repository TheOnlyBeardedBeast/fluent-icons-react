import * as React from 'react';
import IconProps from '../IconProps';

export const ChevronLeftFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_chevron_left_12_filled" fill={color} fill-rule="nonzero">
        <path
          d="M7.53033,2.46967 C7.82322,2.76256 7.82322,3.23744 7.53033,3.53033 L5.06066,6 L7.53033,8.46967 C7.82322,8.76256 7.82322,9.23744 7.53033,9.53033 C7.23744,9.82322 6.76256,9.82322 6.46967,9.53033 L3.46967,6.53033 C3.17678,6.23744 3.17678,5.76256 3.46967,5.46967 L6.46967,2.46967 C6.76256,2.17678 7.23744,2.17678 7.53033,2.46967 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
