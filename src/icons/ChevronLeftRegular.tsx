import * as React from 'react';
import IconProps from '../IconProps';

export const ChevronLeftRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_chevron_left_12_regular" fill={color} fill-rule="nonzero">
        <path
          d="M7.35355,2.64645 C7.54882,2.84171 7.54882,3.15829 7.35355,3.35355 L4.70711,5.9999975 L7.35355,8.64645 C7.54882,8.84171 7.54882,9.15829 7.35355,9.35355 C7.15829,9.54882 6.84171,9.54882 6.64645,9.35355 L3.64645,6.35355 C3.45118,6.15829 3.45118,5.84171 3.64645,5.64645 L6.64645,2.64645 C6.84171,2.45118 7.15829,2.45118 7.35355,2.64645 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
