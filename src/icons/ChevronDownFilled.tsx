import * as React from 'react';
import IconProps from '../IconProps';

export const ChevronDownFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_chevron_down_12_filled" fill={color} fill-rule="nonzero">
        <path
          d="M2.46967,4.46967 C2.76256,4.17678 3.23744,4.17678 3.53033,4.46967 L6,6.93934 L8.46967,4.46967 C8.76256,4.17678 9.23744,4.17678 9.53033,4.46967 C9.82322,4.76256 9.82322,5.23744 9.53033,5.53033 L6.53033,8.53033 C6.23744,8.82322 5.76256,8.82322 5.46967,8.53033 L2.46967,5.53033 C2.17678,5.23744 2.17678,4.76256 2.46967,4.46967 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
