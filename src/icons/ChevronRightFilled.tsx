import * as React from 'react';
import IconProps from '../IconProps';

export const ChevronRightFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_chevron_right_12_filled" fill={color} fill-rule="nonzero">
        <path
          d="M4.46967,2.46967 C4.17678,2.76256 4.17678,3.23744 4.46967,3.53033 L6.93934,6 L4.46967,8.46967 C4.17678,8.76256 4.17678,9.23744 4.46967,9.53033 C4.76256,9.82322 5.23744,9.82322 5.53033,9.53033 L8.53033,6.53033 C8.82322,6.23744 8.82322,5.76256 8.53033,5.46967 L5.53033,2.46967 C5.23744,2.17678 4.76256,2.17678 4.46967,2.46967 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
