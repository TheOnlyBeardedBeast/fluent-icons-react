import * as React from 'react';
import IconProps from '../IconProps';

export const DividerShortRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_divider_short_24_regular" fill={color} fill-rule="nonzero">
        <path
          d="M11.25,4.75 L11.25,19.25 C11.25,19.6642136 11.5857864,20 12,20 C12.4142136,20 12.75,19.6642136 12.75,19.25 L12.75,4.75 C12.75,4.33578644 12.4142136,4 12,4 C11.5857864,4 11.25,4.33578644 11.25,4.75 Z"
          id="🎨Color"
        ></path>
      </g>
    </g>
  </svg>
);
