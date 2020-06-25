import * as React from 'react';
import IconProps from '../IconProps';

export const DividerTallFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_divider_tall_24_filled" fill={color} fill-rule="nonzero">
        <path
          d="M11,3 L11,21 C11,21.5522847 11.4477153,22 12,22 C12.5522847,22 13,21.5522847 13,21 L13,3 C13,2.44771525 12.5522847,2 12,2 C11.4477153,2 11,2.44771525 11,3 Z"
          id="🎨Color"
        ></path>
      </g>
    </g>
  </svg>
);
