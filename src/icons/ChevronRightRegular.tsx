import * as React from 'react';
import IconProps from '../IconProps';

export const ChevronRightRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_chevron_right_12_regular" fill={color} fill-rule="nonzero">
        <path
          d="M4.64645,2.64645 C4.45118,2.84171 4.45118,3.15829 4.64645,3.35355 L7.29289,5.9999975 L4.64645,8.64645 C4.45118,8.84171 4.45118,9.15829 4.64645,9.35355 C4.84171,9.54882 5.15829,9.54882 5.35355,9.35355 L8.35355,6.35355 C8.54882,6.15829 8.54882,5.84171 8.35355,5.64645 L5.35355,2.64645 C5.15829,2.45118 4.84171,2.45118 4.64645,2.64645 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
