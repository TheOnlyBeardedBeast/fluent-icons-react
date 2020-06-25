import * as React from 'react';
import IconProps from '../IconProps';

export const ChevronUpFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_chevron_up_12_filled" fill={color} fill-rule="nonzero">
        <path
          d="M2.46967,7.53033 C2.76256,7.82322 3.23744,7.82322 3.53033,7.53033 L6,5.06066 L8.46967,7.53033 C8.76256,7.82322 9.23744,7.82322 9.53033,7.53033 C9.82322,7.23744 9.82322,6.76256 9.53033,6.46967 L6.53033,3.46967 C6.23744,3.17678 5.76256,3.17678 5.46967,3.46967 L2.46967,6.46967 C2.17678,6.76256 2.17678,7.23744 2.46967,7.53033 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
