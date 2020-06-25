import * as React from 'react';
import IconProps from '../IconProps';

export const ChevronDownRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_chevron_down_12_regular" fill={color} fill-rule="nonzero">
        <path
          d="M2.64645,4.64645 C2.84171,4.45118 3.15829,4.45118 3.35355,4.64645 L5.9999975,7.29289 L8.64645,4.64645 C8.84171,4.45118 9.15829,4.45118 9.35355,4.64645 C9.54882,4.84171 9.54882,5.15829 9.35355,5.35355 L6.35355,8.35355 C6.15829,8.54882 5.84171,8.54882 5.64645,8.35355 L2.64645,5.35355 C2.45118,5.15829 2.45118,4.84171 2.64645,4.64645 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
