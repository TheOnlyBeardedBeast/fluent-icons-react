import * as React from 'react';
import IconProps from '../IconProps';

export const SpacebarFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_spacebar_24_filled" fill={color} fill-rule="nonzero">
        <path
          d="M20,11 L20,13 L4,13 L4,11 C4,10.4477153 3.55228475,10 3,10 C2.44771525,10 2,10.4477153 2,11 L2,13 C2,14.1045695 2.8954305,15 4,15 L20,15 C21.1045695,15 22,14.1045695 22,13 L22,11 C22,10.4477153 21.5522847,10 21,10 C20.4477153,10 20,10.4477153 20,11 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
