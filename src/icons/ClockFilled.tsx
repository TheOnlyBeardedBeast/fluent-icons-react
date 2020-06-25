import * as React from 'react';
import IconProps from '../IconProps';

export const ClockFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_clock_12_filled" fill={color} fill-rule="nonzero">
        <path
          d="M6,1 C8.76142375,1 11,3.23857625 11,6 C11,8.76142375 8.76142375,11 6,11 C3.23857625,11 1,8.76142375 1,6 C1,3.23857625 3.23857625,1 6,1 Z M5.5,3.5 C5.22385763,3.5 5,3.72385763 5,4 L5,6.5 C5,6.77614237 5.22385763,7 5.5,7 L7.5,7 C7.77614237,7 8,6.77614237 8,6.5 C8,6.22385763 7.77614237,6 7.5,6 L6,6 L6,4 C6,3.72385763 5.77614237,3.5 5.5,3.5 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
