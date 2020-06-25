import * as React from 'react';
import IconProps from '../IconProps';

export const BlockFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_block_16_filled" fill={color} fill-rule="nonzero">
        <path
          d="M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M10.5015268,7.5 L5.5,7.5 C5.22385763,7.5 5,7.72385763 5,8 C5,8.27614237 5.22385763,8.5 5.5,8.5 L10.5015268,8.5 C10.7776692,8.5 11.0015268,8.27614237 11.0015268,8 C11.0015268,7.72385763 10.7776692,7.5 10.5015268,7.5 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
