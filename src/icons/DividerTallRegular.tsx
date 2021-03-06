import * as React from 'react';
import IconProps from '../IconProps';

export const DividerTallRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_divider_tall_24_regular" fill={color} fill-rule="nonzero">
        <path
          d="M11.25,2.75 L11.25,21.25 C11.25,21.6642136 11.5857864,22 12,22 C12.4142136,22 12.75,21.6642136 12.75,21.25 L12.75,2.75 C12.75,2.33578644 12.4142136,2 12,2 C11.5857864,2 11.25,2.33578644 11.25,2.75 Z"
          id="🎨Color"
        ></path>
      </g>
    </g>
  </svg>
);
